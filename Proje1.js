function factorial(number) {

    if (number == null) {
        console.log("Argument can not be null!");
        return null;
    }

    if (typeof(number) == "string") {
        console.log("Argument can not be a string!");
        return null;
    }

    if (typeof(number) == "boolean") {
        console.log("Argument can not be a boolean!");
        return null;
    }

    if (number < 0) {
        console.log("Number can not be less than zero!");
        return null;
    }

    var result = 1;
    for (let i = number; i > 1; i--) {
        result *= i;
    }
    return result;
}

console.log(factorial(3));