var fromconversion;
var toconversion;


function FromConv(){
    var i = document.getElementById("currencypicker");
    var value = i.value;

    if(value == "CAD"){fromconversion = document.getElementById("usdfrominput").value * 1.34}
    else if(value == "EUR"){fromconversion = document.getElementById("usdfrominput").value * 0.92}
    else if(value == "AUD"){fromconversion = document.getElementById("usdfrominput").value * 1.44}
    else if(value == "JPY"){fromconversion = document.getElementById("usdfrominput").value * 131.18}

    document.getElementById("usdfromoutput").value = fromconversion.toFixed(2);
}

function ToConv(){
    var i = document.getElementById("currencypicker2");
    var value = i.value;

    if(value == "CAD"){toconversion = document.getElementById("usdtoinput").value / 1.34}
    else if(value == "EUR"){toconversion = document.getElementById("usdtoinput").value / 0.92}
    else if(value == "AUD"){toconversion = document.getElementById("usdtoinput").value / 1.44}
    else if(value == "JPY"){toconversion = document.getElementById("usdtoinput").value / 131.18}

    document.getElementById("usdtooutput").value = toconversion.toFixed(2);

}



document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("fromconvert").addEventListener("click", FromConv);
    document.getElementById("toconvert").addEventListener("click", ToConv);
}); 