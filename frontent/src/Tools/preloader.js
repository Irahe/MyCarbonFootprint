import assetsManifest from '../Assets';
import servicesManifest from '../Services';
import callApi from '../Services/api';

export const cacheImagesCanonical = (array, index) => {
  if (index < array.length) {
    const src = array[index];
    if (src && !window.preloadedImages[src]) {
      const img = new Image();
      img.onload = () => {
        window.preloadedImages[src] = img;
        cacheImagesCanonical(array, index + 1);
      };
      img.onerror = () => {
        if (process.env.REACT_APP_ENVIRONMENT !== 'production') {
          console.log('Error caching image: ', src);
        }
        cacheImagesCanonical(array, index + 1);
      };
      img.abort = () => {
        if (process.env.REACT_APP_ENVIRONMENT !== 'production') {
          console.log('Aborting caching image: ', src);
        }
        cacheImagesCanonical(array, index + 1);
      };
      img.src = src;
    } else if (src) {
      cacheImagesCanonical(array, index + 1);
    }
  }
};

export const preloadAssets = async () => {
  if (!window.preloadedImages) {
    window.preloadedImages = {};
  }
  cacheImagesCanonical(Object.values(assetsManifest).flat(), 0);
};
export const preloadServices = async (save) => {
  for (const serviceKey in servicesManifest) {
    if (Object.hasOwnProperty.call(servicesManifest, serviceKey)) {
      const service = servicesManifest[serviceKey];
      if (service.shouldPreload) {
        // eslint-disable-next-line
        const response = await callApi(service);
        save(service.preloaderStoreKey, response);
        // console.log('preloaded', { service, response });
      }
    }
  }
};
