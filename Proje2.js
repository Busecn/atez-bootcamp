function multiply(...args) {

    if (args.length == 0) {
        console.log("At least one argument must be given!");
        return null;
    }

    var result = 1;

    for (var i = 0; i < args.length; i++) {
        const arg = args[i];

        if (arg == null) {
            console.log("Argument (" + arg + ") can not be null!");
            return null;
        }

        if (typeof(arg) == "string") {
            console.log("Argument (" + arg + ") can not be a string!");
            return null;
        }

        if (typeof(arg) == "boolean") {
            console.log("Argument (" + arg + ") can not be a boolean!");
            return null;
        }

        if (typeof(arg) != "number") {
            console.log("Argument (" + arg + ") must be a number!");
            return null;
        }
        result *= arg;
    }
    return result;
}

console.log(multiply(3,5,-2));