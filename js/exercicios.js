

var texto1

function calcularComb (a,b){
    var alc=parseFloat(a);
    var gas=parseFloat(b);
    var somagas=alc/gas;


    //window.alert("O Resultado é" + somagas);

    if(somagas>0.7){

        texto1= "Gasolina";

    }

    else{
        texto1="Alcool";
    }

    document.getElementById('txtComb').value=texto1;


}



