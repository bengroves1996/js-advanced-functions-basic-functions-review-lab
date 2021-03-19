// Your code here
function saturdayFun(thing = 'roller-skate') {
    return `This Saturday, I want to ${thing}!`
}


function mondayWork(thing = 'go to the office') {
    return `This Monday, I will ${thing}.`
}

function wrapAdjective(flair = '*') {
    return function(arg = 'special') {
        return `You are ${flair}${arg}${flair}!`
    }
}

let Calculator = {
    add: function add(a = 0, b = 0){
        return a+b
    },
    subtract: function subtract(a = 0, b = 0){
        return a-b
    },
    multiply: function multiply(a = 0, b = 0){
        return a*b
    },
    divide: function divide(a = 0, b = 1){
        return a/b
    }
}

function actionApplyer(start_point, array_of_functions = []){
    if (array_of_functions === []){
        return start_point
    }
}