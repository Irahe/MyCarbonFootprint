module.exports = {
    hashObjectBy(array, keyName, useLowerCase = false) {
        let finalObject = {};
        let ArrayKeys = {};
        if (useLowerCase) {
            for (let item of array) {
                if (typeof finalObject[String(item[String(keyName)]).toLowerCase()] !== 'undefined') {
                    //there is a record already.
                    if (ArrayKeys[item[keyName].toLowerCase()]) {
                        //is already array
                        finalObject[item[keyName].toLowerCase()].push(item);
                    } else {
                        //not array yet 
                        let temp = finalObject[item[keyName].toLowerCase()];
                        finalObject[item[keyName].toLowerCase()] = Array();
                        finalObject[item[keyName].toLowerCase()].push(temp);
                        finalObject[item[keyName].toLowerCase()].push(item);
                        ArrayKeys[item[keyName].toLowerCase()] = true;
                    }
                } else {
                    finalObject[item[keyName].toLowerCase()] = item;
                }
            }
        } else {
            for (let item of array) {
                if (typeof finalObject[String(item[String(keyName)])] !== 'undefined') {
                    //there is a record already.
                    if (ArrayKeys[item[keyName]]) {
                        //is already array
                        finalObject[item[keyName]].push(item);
                    } else {
                        //not array yet 
                        let temp = finalObject[item[keyName]];
                        finalObject[item[keyName]] = Array();
                        finalObject[item[keyName]].push(temp);
                        finalObject[item[keyName]].push(item);
                        ArrayKeys[item[keyName]] = true;
                    }
                } else {
                    finalObject[item[keyName]] = item;
                }
            }
        }
        return finalObject;
    },

    hashObjectBySubKey(array, keyName, subKey, useLowerCase = false) {
        let finalObject = {};
        let ArrayKeys = {};
        if (useLowerCase) {
            for (let item of array) {
                if (typeof finalObject[String(item[String(keyName)][String(subKey)]).toLowerCase()] !== 'undefined') {
                    //there is a record already.
                    if (ArrayKeys[item[keyName][subKey].toLowerCase()]) {
                        //is already array
                        finalObject[item[keyName][subKey].toLowerCase()].push(item);
                    } else {
                        //not array yet 
                        let temp = finalObject[item[keyName][subKey].toLowerCase()];
                        finalObject[item[keyName][subKey].toLowerCase()] = Array();
                        finalObject[item[keyName][subKey].toLowerCase()].push(temp);
                        finalObject[item[keyName][subKey].toLowerCase()].push(item);
                        ArrayKeys[item[keyName][subKey].toLowerCase()] = true;
                    }
                } else {
                    finalObject[item[keyName][subKey].toLowerCase()] = item;
                }
            }
        } else {
            for (let item of array) {
                if (typeof finalObject[String(item[String(keyName)][String(subKey)])] !== 'undefined') {
                    //there is a record already.
                    if (ArrayKeys[item[keyName][subKey]]) {
                        //is already array
                        finalObject[item[keyName][subKey]].push(item);
                    } else {
                        //not array yet 
                        let temp = finalObject[item[keyName][subKey]];
                        finalObject[item[keyName][subKey]] = Array();
                        finalObject[item[keyName][subKey]].push(temp);
                        finalObject[item[keyName][subKey]].push(item);
                        ArrayKeys[item[keyName][subKey]] = true;
                    }
                } else {
                    finalObject[item[keyName][subKey]] = item;
                }
            }
        }
        return finalObject;
    },

    hashToArray(hashedObject) {
        let finalObject = [];
        for (let item in hashedObject) {
            finalObject.push(hashedObject[item]);
        }
        return finalObject;
    },

    changeHashKey(hashedObject, newKey, useLowerCase = false) {
        let finalObject = [];
        for (const key in hashedObject) {
            if (hashedObject.hasOwnProperty(key)) {
                const element = hashedObject[key];
                if (Array.isArray(element)) {
                    for (let sub_element of element) {
                        finalObject.push(sub_element);
                    }
                } else {
                    finalObject.push(element);
                }
            }
        }
        return this.hashObjectBy(finalObject, newKey, useLowerCase);
    },

}
