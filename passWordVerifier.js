// Utility functions
const isNotNull = str => str != null;
// let string = null
// console.log(isNotNull(string))

const hasRightLength = (str) => {
    if (!isNotNull(str) | !isNaN(str)){
        console.log('This is NULL or a number:')
        return false
    } else {
        return str.length < 9
    }
} 
// let string2 = 'hallo123';
// console.log(string2.length)
// console.log(hasRightLength(string2))

const hasUpperCaseCharacter = (str) => {
    let counter = 0
    if (!isNotNull(str)) {
        return false
    } else {
        for (i=0; i < str.length; i++) {
            if (!isNaN(str[i] * 1)) {
                console.log('This is null or a number')
            } else {
                if (str[i] == str[i].toUpperCase() && 
                    str[i] != str[i].toLowerCase()){
                        console.log('Yes, uppercase')
                        counter++
                } else {
                    console.log('This character is not uppercase')
                }
            }
        }
    }
    console.log(counter)
    if (counter >= 1) {
        return true
    } else {
        return false
    }
};

// let string3 = "Hallodaar123"
// console.log(string3[1].toUpperCase())
// console.log(hasUpperCaseCharacter(string3))

const hasLowerCaseCharacter = (str) => {
    let counter = 0
    if (!isNotNull(str)) {
        return false
    } else {
        for (i=0; i < str.length; i++) {
            if (!isNaN(str[i] * 1)) {
                console.log('This is a number')
            } else {
                if (str[i] == str[i].toLowerCase() && 
                    str[i] != str[i].toUpperCase()){
                        console.log('This character is lowercase')
                        counter++
                } else {
                    console.log('This character is uppercase')
                }
            }
        }
    }
    if (counter >= 1) {
        return true
    } else {
        return false
    }
};

// let string4 = "Hallo12"
// console.log(hasLowerCaseCharacter(string4))

const hasDigit = (str) => {
    let checkIfNumber = new RegExp(/[0-9]/)
    return checkIfNumber.test(str)
}
// const test = '0null'
// console.log(hasDigit(test))

// const hasDigit2 = (str) => {
//     let counter = 0
//     if (!isNotNull(str)) {
//         return false
//     } else {
//         for (i=0; i < str.length; i++) {
//             if (!isNaN(str[i])) {
//                 console.log('This is a number')
//                 counter++
//             } else {
//                 console.log('This is not a number')
//             }
//         }
//     }
//     console.log(counter)
//     if (counter >= 1) {
//         return true
//     } else {
//         return false
//     }
// }

// let string5 = "Hallo12"
// console.log(hasDigit(string5))

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    let trueConditions = conditions.filter(bool => bool === true);
    console.log(trueConditions)
    console.log(trueConditions.length)
    return trueConditions.length >= 3
};

// "Outer" function
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    console.log(conditions)
    console.log(minimumConditionsReached(conditions))
    return result;
};

// const testPassword = "Zz123@!"
// console.log(verifyPassword(testPassword))

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};