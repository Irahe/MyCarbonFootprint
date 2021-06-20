const Services = {
  efCategories: {
    url: '/ef_category/',
    type: 'GET',
    shouldPreload: true,
    preloaderStoreKey: 'efCategories'
  },
  processAnswer: {
    url: '/answer/',
    type: 'POST',
    shouldPreload: false
  }
};

export default Services;
