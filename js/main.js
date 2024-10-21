document.getElementById("btn").onclick = function () {
    var num1 = parseInt(document.getElementById("num1").value);
    var op = document.getElementById("op").value;
    var num2 = parseInt(document.getElementById("num2").value);

    if (num1 == NaN || num2 == NaN || op == "") {
        document.getElementById("result").innerHTML = "";
        document.getElementById("error").innerHTML = "Sorry, all fields are required!";
    } else {

        switch (op) {

            case "+":
                document.getElementById("error").innerHTML = "";
                document.getElementById("result").innerHTML = num1 + num2;
                break;

            case "-":
                if (num1 >= num2) {
                    document.getElementById("error").innerHTML = "";
                    document.getElementById("result").innerHTML = num1 - num2;
                } else {
                    document.getElementById("result").innerHTML = "";
                    document.getElementById("error").innerHTML = "Sorry, the first number must be greater than the second number!";
                }
                break;

            case "*":
                document.getElementById("error").innerHTML = "";
                document.getElementById("result").innerHTML = num1 * num2;
                break;

            case "/":
                if (num1 >= num2) {
                    if (num2 != 0) {
                        document.getElementById("error").innerHTML = "";
                        document.getElementById("result").innerHTML = num1 / num2;
                    } else {
                        document.getElementById("result").innerHTML = "";
                        document.getElementById("error").innerHTML = "Sorry, the second number can't be 0!";
                    }
                } else {
                    document.getElementById("result").innerHTML = "";
                    document.getElementById("error").innerHTML = "Sorry, the first number must be greater than the second number!";
                }
                break;
        }
    }
}
