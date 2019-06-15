function calcula(){
	var NF = 0;
	var KF = 0;
	var NMKF = 0 ;// n menos k fatorial
	var N = Number(document.getElementById("N").value);
	var P = Number(document.getElementById("P").value);
	var Q = Number(document.getElementById("Q").value);
	var K = document.getElementById("K").value;
	K = K.split(',');
	var somaSaida = 0 ;
	for(var i = 0 ; i < K.length; i++){
		var NMK = (N - K[i])
		NF = fatora(N)
		KF = fatora(K[i])
		NMKF = fatora(NMK)
		var analiseCombinatoria = (NF/(KF*NMKF))
		var PEK = P ** K[i]
		var QENMK = (Q **(N-K[i])) 
		var saida = (analiseCombinatoria*PEK*QENMK)
		//alert("NF = " + NF)
		//alert("KF = " + KF)
		//alert("NMKF = " + NMKF)
		//alert("analiseCombinatoria = " + analiseCombinatoria)
		//alert("PEK = " + PEK)
		//alert("QENMK = " + QENMK)
		somaSaida += (saida * 100)
		//alert("K = " + K[i])
	}
	//alert(somaSaida.toFixed(2) + "%")
	var media = (N*P)
	var somaDP = (N*P*Q)
	var DP = Math.sqrt(somaDP)

	document.getElementById("porcentagem").innerHTML = ((somaSaida.toFixed(2)) + "%")
	document.getElementById("media").innerHTML = ("media = " + media.toFixed(2))
	document.getElementById("DP").innerHTML = ("DP = " + DP.toFixed(2))
}

function fatora(num){
    
    if (num < 0){
        return -1;
    }
    else if (num == 0){
        return 1;
    }
    else{
       return (num * fatora(num - 1));
    }
}

var logado
logado =  localStorage.getItem("logado")
if(logado == 1){
	setTimeout(nomeLogado, 1);
}

function sair(link){
	localStorage.removeItem("logado")
	window.location.href=link
}

function voltar(link){
	window.location.href=link
}