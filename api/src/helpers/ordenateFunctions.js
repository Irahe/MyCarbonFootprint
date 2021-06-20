module.exports = {
    sortObjectArrayPerKey(items, key, asc_desc) {
        var length = items.length;
        //Number of passes
        for (var i = 0; i < length; i++) {
            //Notice that j < (length - i)
            for (var j = 0; j < (length - 1); j++) {
                //Compare the adjacent positions
                if (asc_desc === 'ASC') {
                    if (items[j][key] > items[j + 1][key]) {
                        //Swap the numbers
                        var tmp = items[j]; //Temporary variable to hold the current number
                        items[j] = items[j + 1]; //Replace current number with adjacent number
                        items[j + 1] = tmp; //Replace adjacent number with current number
                    }

                } else {
                    if (items[j][key] < items[j + 1][key]) {
                        //Swap the numbers
                        var tmp = items[j]; //Temporary variable to hold the current number
                        items[j] = items[j + 1]; //Replace current number with adjacent number
                        items[j + 1] = tmp; //Replace adjacent number with current number
                    }
                }

            }
        }
        return items;
    },
    sortObjectArrayPerSubKey(items, key, sub_key, asc_desc) {
        var length = items.length;
        //Number of passes
        for (var i = 0; i < length; i++) {
            //Notice that j < (length - i)
            for (var j = 0; j < (length - 1); j++) {
                //Compare the adjacent positions
                if (asc_desc === 'ASC') {
                    if (items[j][key][sub_key] > items[j + 1][key][sub_key]) {
                        //Swap the numbers
                        var tmp = items[j]; //Temporary variable to hold the current number
                        items[j] = items[j + 1]; //Replace current number with adjacent number
                        items[j + 1] = tmp; //Replace adjacent number with current number
                    }

                } else {
                    if (items[j][key][sub_key] < items[j + 1][key][sub_key]) {
                        //Swap the numbers
                        var tmp = items[j]; //Temporary variable to hold the current number
                        items[j] = items[j + 1]; //Replace current number with adjacent number
                        items[j + 1] = tmp; //Replace adjacent number with current number
                    }
                }

            }
        }
        return items;
    },
    sortObjectArrayPerKeyDate(items, key, asc_desc) {
        var length = items.length;
        //Number of passes
        for (var i = 0; i < length; i++) {
            //Notice that j < (length - i)
            for (var j = 0; j < (length - 1); j++) {
                //Compare the adjacent positions
                if (asc_desc === 'ASC') {
                    if (new Date(items[j][key]).getTime() > new Date(items[j + 1][key]).getTime()) {
                        //Swap the numbers
                        var tmp = items[j]; //Temporary variable to hold the current number
                        items[j] = items[j + 1]; //Replace current number with adjacent number
                        items[j + 1] = tmp; //Replace adjacent number with current number
                    }

                } else {
                    if (new Date(items[j][key]).getTime() < new Date(items[j + 1][key]).getTime()) {
                        //Swap the numbers
                        var tmp = items[j]; //Temporary variable to hold the current number
                        items[j] = items[j + 1]; //Replace current number with adjacent number
                        items[j + 1] = tmp; //Replace adjacent number with current number
                    }
                }

            }
        }
        return items;
    }
}