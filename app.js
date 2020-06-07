const celsiusInput = document.querySelector('#Celsius > input');
const fahrenheitInput = document.querySelector('#Fahrenheit > input');
const reamurInput = document.querySelector('#Reamur > input');


// fungsi untuk merubah angka di belakang koma agar tidak terlalu panjang
function roundNum(num) {
    return Math.round(num*100)/100;
}

// fungsi untuk merubah celsius ke reamur dan fahrenheit
function CTRF() {
    const CTemp = parseFloat(celsiusInput.value);
    const FTemp = (CTemp * (9/5)) + 32;
    const RTemp = (CTemp * (4/5));
    fahrenheitInput.value = roundNum(FTemp);
    reamurInput.value = roundNum(RTemp);
}

// fungsi untuk merubah fahrenheit ke celsius dan reamur
function FTCR() {
    const FTemp = parseFloat(fahrenheitInput.value);
    const CTemp = (FTemp - 32) * (5/9);
    const RTemp = (FTemp - 32) * (4/9);
    celsiusInput.value = roundNum(CTemp);
    reamurInput.value = roundNum(RTemp);
}

// fungsi untuk merubah reamur ke fahrenheit dan celsius
function RTFC() {
    const RTemp = parseFloat(reamurInput.value);
    const FTemp = (RTemp * (9/4)) + 32;
    const CTemp = (RTemp * (5/4));
    fahrenheitInput.value = roundNum(FTemp);
    celsiusInput.value = roundNum(CTemp);
}

// agar rapi saja
function mainApp(){
    celsiusInput.addEventListener('input', CTRF);
    fahrenheitInput.addEventListener('input', FTCR);
    reamurInput.addEventListener('input', RTFC);
}

mainApp();