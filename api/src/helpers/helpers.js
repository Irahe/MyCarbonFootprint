
const filterDuplicatedObjectArray = (objectArray, field = "id") => {
  const to_return = [];
  for (const value of objectArray) {
    if (!(to_return.map(element => element[field]).includes(value[field]))) {
      to_return.push(value);
    }
  }
  return to_return;
  // const filtered = [...new Set(objectArray.map(element => JSON.stringify(element)))];
  // return filtered.map(element => JSON.parse(element));
}

const calculateValueFromRange = ({
  rangeEntrada = [],
  rangeSaida = [],
  valor,
  inversamente = false,
}) => {
  if (inversamente) {
    return Number(
      parseFloat(
        ((valor - rangeEntrada[0]) * (rangeSaida[0] - rangeSaida[1])) /
        (rangeEntrada[1] - rangeEntrada[0]) +
        rangeSaida[1]
      ).toFixed(3)
    );
  } else {
    return Number(
      parseFloat(
        ((valor - rangeEntrada[0]) * (rangeSaida[1] - rangeSaida[0])) /
        (rangeEntrada[1] - rangeEntrada[0]) +
        rangeSaida[0]
      ).toFixed(3)
    );
  }
}

const getScaleFactor = (nut_scale, dri_scale) => {
  if (dri_scale === 'g') {
    if (nut_scale === 'g') {
      return 1;
    } else if (nut_scale === 'mg') {
      return 0.001;
    } else if (nut_scale === 'mcg' || nut_scale === 'µg') {
      return 0.0000001
    } else {
      return 1;
    }
  } else if (dri_scale === 'mg') {
    if (nut_scale === 'g') {
      return 1000;
    } else if (nut_scale === 'mg') {
      return 1;
    } else if (nut_scale === 'mcg' || nut_scale === 'µg') {
      return 0.001
    } else {
      return 1;
    }
  } else if (dri_scale === 'mcg' || dri_scale === 'µg') {
    if (nut_scale === 'g') {
      return 1000000;
    } else if (nut_scale === 'mg') {
      return 1000;
    } else if (nut_scale === 'mcg' || nut_scale === 'µg') {
      return 1;
    } else {
      return 1;
    }
  } else {
    return 1;
  }
}

const convertDateToMysql = date => {
  let twoDigits = (d) => {
    if (0 <= d && d < 10) return "0" + d.toString();
    if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
    return d.toString();
  }
  return date.getUTCFullYear() + "-" + twoDigits(1 + date.getMonth()) + "-" + twoDigits(date.getDate()) + " " + twoDigits(date.getHours()) + ":" + twoDigits(date.getMinutes()) + ":" + twoDigits(date.getSeconds());
}

const uniqueObjectBy = (array, key) => {
  const seen = [];
  if (Array.isArray(array)) {
    if (typeof key === 'string' || typeof key === 'number') {
      return array.filter(item => {
        if (seen.includes(item[key])) {
          return false;
        } else {
          seen.push(item[key]);
          return true;
        }
      });
    } else if (Array.isArray(key)) {
      //first of all check if all properties exists
      for (const k of key) {
        if (!(array[0].hasOwnProperty(k))) {
          throw new Error("You probably mistyped a key, please check");
        }
      }
      let local = [];
      return array.filter(item => {
        local.length = 0;
        for (const k of key) {
          local.push(JSON.stringify(item[k]));
        }
        if (seen.includes(local)) {
          return false;
        } else {
          seen.push(local);
          return true;
        }
      });
    } else {
      throw new Error("Unknown key type, sorry");
    }
  }
}

const mergeArraysUnique = (arr1, arr2) => {
  return [...arr1, ...arr2].filter((el, index, arr) => arr.indexOf(el) === index)
}




module.exports = {
  filterDuplicatedObjectArray,
  calculateValueFromRange,
  getScaleFactor,
  convertDateToMysql,
  uniqueObjectBy,
  mergeArraysUnique,
}