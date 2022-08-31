// Question 1

function addition (num1, num2){
    return num1 + num2
}

console.log(addition(3, 5))

// Question 2

function hoursToSeconds (num1){
    return num1 * 60 * 60
}

console.log(hoursToSeconds(2))

// Question 3

function rectanglePerimeter (base, height){
    return 2 * base + 2 * height
}

console.log(rectanglePerimeter(10, 20))

// Question 4

function triangleArea (base, height){
    return 0.5 * base * height
}

console.log(triangleArea(10, 10))

// Question 5

function extendString (str){
    return str + "Frontend"
}

console.log(extendString("Apple"))

// Question 6

function greaterThan100 (num1, num2){
    return num1 + num2 > 100
}

console.log(greaterThan100(50, 60))

// function greaterThan100 (num1, num2){
//     if (num1 + num2 > 100){
//         return true
//     }
//     else{
//         return false
//     }
// }

// Question 7

function lessThanOrEqualTo (num1){
    return num1 <= 0
}

console.log(lessThanOrEqualTo(3))

// function lessThanOrEqualTo(num1){
//     if (num1 <= 0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// Question 8

function oppositeBoolean (bool){
    return !bool
}

console.log(oppositeBoolean(false))

// function oppositeBoolean(bool){
//     if (bool === true){
//         return false
//     }
//     else{
//         return true
//     }
// }

// Question 9

function isNot0 (num){
    return num !== 0
}

console.log(isNot0(0))

// function isNot0 (num){
//     if (num === 0){
//         return false
//     }
//     else{
//         return true
//     }
// }

// Question 10

function remainder (num1, num2){
    return  num1 % num2
}

console.log(remainder(30, 9))

// Question 11

function isOdd (num){
    return  num % 2 !== 0
}

console.log(isOdd(31))

// function isOdd (num){
//     if (num % 2 !== 0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// Question 12

function isEven (num){
    return  (num % 2 === 0) ? "1" : "-1"
}

console.log(isEven(75))

// function isOdd (num){
//     if (num % 2 === 0){
//         return 1
//     }
//     else{
//         return -1
//     }
// }

// Question 13

function isLogAndSubs (str1, str2){
    return str1 === "LOGGED_IN" && str2 === "SUBSCRIBED"
}

console.log(isLogAndSubs("LOGGED_IN" , "SUBSCRIBED"))

// function isLogAndSubs (num){
//     if (str1 === LOGGED_IN && str2 === SUBSCRIBED){
//         return true
//     }
//     else{
//         return false
//     }
// }

// Question 14

function isLogAndSubs (str1, str2){
    return str1 === "LOGGED_IN" || str2 === "SUBSCRIBED"
}

console.log(isLogAndSubs("LOGGED_OUT" , "UNSUBSCRIBED"))

// function isLogAndSubs (num){
//     if (str1 === LOGGED_IN || str2 === SUBSCRIBED){
//         return true
//     }
//     else{
//         return false
//     }
// }