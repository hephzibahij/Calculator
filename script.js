function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteChar() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
}

function appendValue(value) {
    document.getElementById("result").value += value;
}

function calculateResult() {
    try {
        let result = document.getElementById("result").value;
        document.getElementById("result").value = eval(result);
    } catch {
        document.getElementById("result").value = "Error";
    }
}