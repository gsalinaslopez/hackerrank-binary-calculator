var resString = '';

document.addEventListener('DOMContentLoaded', () => {
    function updateRes() {
        document.getElementById('res').innerHTML = resString;
    }

    var appendToRes = function (e) {
        var btn = e.target || e.srcElement;
        resString += String(btn.innerHTML);
        updateRes();
    };
    document.getElementById('btn0').addEventListener('click', appendToRes);
    document.getElementById('btn1').addEventListener('click', appendToRes);
    document.getElementById('btnSum').addEventListener('click', appendToRes);
    document.getElementById('btnSub').addEventListener('click', appendToRes);
    document.getElementById('btnMul').addEventListener('click', appendToRes);
    document.getElementById('btnDiv').addEventListener('click', appendToRes);

    document.getElementById('btnClr').addEventListener('click', () => {
        resString = '';
        updateRes();
    });

    document.getElementById('btnEql').addEventListener('click', () => {
        const re = /[\+\-\*\/]/;
        var operands = resString.split(re);
        operands[0] = parseInt(operands[0], 2);
        operands[1] = parseInt(operands[1], 2);
        console.log(operands);

        var operator = resString.match(re);
        console.log(operator);

        var convertedRes = operands[0] + operator + operands[1];
        var ou = Math.floor(eval(convertedRes));
        resString = ou.toString(2);
        updateRes();
    });
});
