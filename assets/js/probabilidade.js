function calcula(){
	var valorMinimo = document.getElementById("valorMinimo").value;
	var valorMaximo = document.getElementById("valorMaximo").value;
	if(valorMinimo > valorMaximo){
		alert("O valor minimo informado ultrapassa o valor maximo")
	}
	else if( valorMaximo == valorMinimo){
		alert("Não tem intervalor")
	}
	else{
		var media = (((Number(valorMaximo)) +(Number(valorMinimo))) / 2)
		var DP = (((valorMaximo - valorMinimo) **2)/12)
		DP = Math.sqrt(DP)
		DP = DP.toFixed(1)
		console.log("media = " + media , "DP = " + DP)

		var maisQue = document.getElementById("maisQue").value;
		var menosQue = document.getElementById("menosQue").value;
		var primeiroEntre = document.getElementById("primeiroEntre").value;
		var segundoEntre = document.getElementById("segundoEntre").value;
		var intervaloMaisQue = (valorMaximo - maisQue);
		var intervaloMenosQue = (menosQue - valorMinimo);
		var saidaMaisQue =(   (   (  1/(valorMaximo - valorMinimo )  ) * intervaloMaisQue)*100 + "%"  );
		var saidaMenosQue = (((1/(valorMaximo - valorMinimo)) * intervaloMenosQue) * 100 + "%");
		var saidaEntre = (((1/(valorMaximo - valorMinimo)) * (segundoEntre - primeiroEntre )) * 100 + "%");
		//console.log("maisQue = " + saidaMaisQue , "menosQue = " + saidaMenosQue ,"entre = " + saidaEntre);
		document.getElementById("media").innerHTML = ("A média é " + media);
		document.getElementById("DP").innerHTML = ("O desvio padrão é " + DP);
		document.getElementById("porcentagemMaisQue").innerHTML = ("Mais que = " + saidaMaisQue);
		document.getElementById("porcentagemMenosQue").innerHTML = ("Menos que = " + saidaMenosQue);
		document.getElementById("porcentagemEntre").innerHTML = ("Entre " + saidaEntre);
	}
}

function voltar(link){
	window.location.href=link
}