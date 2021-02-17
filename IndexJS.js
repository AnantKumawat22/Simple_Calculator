var count = 0;
var con1;
var con2;

// operators :--

function load(){
    document.getElementById("loader").style.display="none";
}

function addition() {
    con1 = num.value;
    document.getElementById('num').value = '+';
}

function minus() {
    con1 = num.value;
    document.getElementById('num').value = '-';
}

function multiply() {
    con1 = num.value;
    document.getElementById('num').value = '*';
}

function divide() {
    con1 = num.value;
    document.getElementById('num').value = '/';
}

function modulo() {
    con1 = num.value;
    document.getElementById('num').value = '%';
}

function equal() {
    let c1 = num.value;
    let ch = c1.charAt(0);
    con2 = c1.substring(1);
    console.log(ch);
    console.log(con2);
    let calculation;
    switch (ch) {
        case '+':
            calculation = Number(con1) + Number(con2);
            document.getElementById('num').value = calculation;
            break;
        case '-':
            calculation = Number(con1) - Number(con2);
            document.getElementById('num').value = calculation;
            break;
        case '*':
            calculation = Number(con1) * Number(con2);
            document.getElementById('num').value = calculation;
            break;
        case '/':
            calculation = Number(con1) / Number(con2);
            document.getElementById('num').value = calculation;
            break;
        case '%':
            calculation = Number(con1) % Number(con2);
            document.getElementById('num').value = calculation;
            break;
    }
}

function clearO() {
    let c2 = num.value;
    let cls = c2.substring(0, c2.length - 1);
    document.getElementById('num').value = cls;
}

function allclear() {
    document.getElementById('num').value = null;
    count = 0;
}

//numbers :--

function zero() {
    if (count == 0) {
        document.getElementById('num').value = 0;
        count++;
    }
    else {
        let con = num.value;
        document.getElementById('num').value = con.concat(0);
    }
}

function one() {
    if (count == 0) {
        document.getElementById('num').value = 1;
        count++;
    }
    else {
        let con = num.value;
        document.getElementById('num').value = con.concat(1);
    }
}

function two() {

    if (count == 0) {
        document.getElementById('num').value = 2;
        count++;
    }
    else {
        let con = num.value;
        document.getElementById('num').value = con.concat(2);
    }
}

function three() {
    if (count == 0) {
        document.getElementById('num').value = 3;
        count++;
    }
    else {
        let con = num.value;
        document.getElementById('num').value = con.concat(3);
    }
}

function four() {
    if (count == 0) {
        document.getElementById('num').value = 4;
        count++;
    }
    else {
        let con = num.value;
        document.getElementById('num').value = con.concat(4);
    }
}

function five() {
    if (count == 0) {
        document.getElementById('num').value = 5;
        count++;
    }
    else {
        let con = num.value;
        document.getElementById('num').value = con.concat(5);
    }
}

function six() {
    if (count == 0) {
        document.getElementById('num').value = 6;
        count++;
    }
    else {
        let con = num.value;
        document.getElementById('num').value = con.concat(6);
    }
}

function seven() {
    if (count == 0) {
        document.getElementById('num').value = 7;
        count++;
    }
    else {
        let con = num.value;
        document.getElementById('num').value = con.concat(7);
    }
}

function eight() {
    if (count == 0) {
        document.getElementById('num').value = 8;
        count++;
    }
    else {
        let con = num.value;
        document.getElementById('num').value = con.concat(8);
    }
}

function nine() {
    if (count == 0) {
        document.getElementById('num').value = 9;
        count++;
    }
    else {
        let con = num.value;
        document.getElementById('num').value = con.concat(9);
    }
}



