"use strict";

let four, six, eight, ten, twelve, twenty, hundred;
let result = 0, four2 = 0, four3 = 0, six2 = 0, six3 = 0;
let eight2 = 0, eight3 = 0, ten2 = 0, ten3 = 0, twelve2 = 0;
let twelve3 = 0, twenty2 = 0, twenty3 = 0, hundred2 = 0, hundred3 = 0;

document.getElementById("d4").addEventListener("click", () => {
    four2++;
    document.getElementById("d4").innerHTML = "D4: " + four2 + "";
});

document.getElementById("d6").addEventListener("click", () => {
    six2++;
    document.getElementById("d6").innerHTML = "D6: " + six2 + "";
});

document.getElementById("d8").addEventListener("click", () => {
    eight2++;
    document.getElementById("d8").innerHTML = "D8: " + eight2 + "";
});

document.getElementById("d10").addEventListener("click", () => {
   ten2++;
   document.getElementById("d10").innerHTML = "D10: " + ten2 + "";
});

document.getElementById("d12").addEventListener("click", () => {
   twelve2++;
   document.getElementById("d12").innerHTML = "D12: " + twelve2 + "";
});

document.getElementById("d20").addEventListener("click", () => {
   twenty2++;
   document.getElementById("d20").innerHTML = "D20: " + twenty2 + "";
});

document.getElementById("d100").addEventListener("click", () => {
   hundred2++;
   document.getElementById("d100").innerHTML = "D100: " + hundred2 + "";
});

document.getElementById("rollButton").addEventListener("click", () => {
    endRoll();
    document.getElementById("answer").innerHTML = "Result: " + result + "";
    result = 0;
    four3 = 0;
    six3 = 0;
    eight3 = 0;
    ten3 = 0;
    twelve3 = 0;
    twenty3 = 0;
    hundred3 = 0;
});

document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("answer").innerHTML = "Result: ";
    document.getElementById("d4").innerHTML = "D4: ";
    document.getElementById("d6").innerHTML = "D6: ";
    document.getElementById("d8").innerHTML = "D8: ";
    document.getElementById("d10").innerHTML = "D10: ";
    document.getElementById("d12").innerHTML = "D12: ";
    document.getElementById("d20").innerHTML = "D20: ";
    document.getElementById("d100").innerHTML = "D100: ";
   four = 0;
   six = 0;
   four2 = 0;
   six2 = 0;
   eight2 = 0;
   ten2 = 0;
   twelve2 = 0;
   twenty2 = 0;
   hundred2 = 0;
});

function endRoll() {
    while (four3 !== four2) {
        four = Math.floor(Math.random() * 4) + 1;
        result = result + four;
        four3++;
    }
    while (six3 !== six2) {
        six = Math.floor(Math.random() * 6) + 1;
        result = result + six;
        six3++;
    }
    while (eight3 !== eight2) {
        eight = Math.floor(Math.random() * 8) + 1;
        result = result + eight;
        eight3++;
    }
    while (ten3 !== ten2) {
        ten = Math.floor(Math.random() * 10) + 1;
        result = result + ten;
        ten3++;
    }
    while (twelve3 !== twelve2) {
        twelve = Math.floor(Math.random() * 12) + 1;
        result = result + twelve;
        twelve3++;
    }
    while (twenty3 !== twenty2) {
        twenty = Math.floor(Math.random() * 20) + 1;
        result = result + twenty;
        twenty3++;
    }
    while (hundred3 !== hundred2) {
        hundred = Math.floor(Math.random() * 100) + 1;
        result = result + hundred;
        hundred3++;
    }
}