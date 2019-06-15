var vet = [];
function inicio(){
  var Vpesquisa = document.getElementById("pesquisa").value
  let dados = document.getElementById("dados").value; 
  dados = dados.split(";"); // isso separa os dados atraves de "-" 
          for(let i = 0 ; i < dados.length ; i++){ // esse for a para passar não somente os dados mais tambem o length para o vetor
            (vet[i] = Number(dados[i])); // isso adiciona os dados NUMERICOS ja separados e contados ao vetor 
          }

tabela(vet, Vpesquisa)
















function tabela(colunas,dados) { //constroi a tabela, totalcent = total dos elementos
  var conteudo = ""
  var cabecalho = "<tr>"
  for (var i = 0; i < colunas.length; i++) {
    cabecalho += '<th>' + colunas[i] + '</th>';
  }
  cabecalho += "</tr>"

  $('#tabela table thead').html(cabecalho);
  for (var i = 0; i < dados[0].length; i++){ //modificação
  conteudo+= "<tr>"}            //modificação
  for (var j = 0; j < colunas.length; j++){//modificação
    conteudo+= "<td>" + dados[i][j]}//modificação
  }
  conteudo +="<tr>" //modificação
  if (colunas.length == 6) {
    for (var classe = 1, i = pareInt(pontas(vet)[0]); i <= parseInt(pontas(vet)[1]); classe++ , i += parseInt(intervalo)) {
      var fi2 = fiCont(vet, i + intervalo, i);
      var percent = fi2 / totalcent * 100;
      //facs, fac pega o fi, se o fac existir soma com fac, se nao soma com 0, a mesma coisa com o percfac
      var fac = fi2 + (fac || 0);
      var percfac = percent + (percfac || 0);
      conteudo += "<tr><td>" + classe + "</td><td>" + i + " |---- " + (i + intervalo) + "</td><td>" + fi2 + "</td><td>" + percent.toFixed(2) + "</td><td>" + fac + "</td><td>" + percfac.toFixed(2) + "</td></tr>"
    }

  }
  else {
    for (i = 0; i < vet.length; i++) {
      var fi2 = fi(vet, vet[i][0]);;
      var percent = fi2 / totalcent * 100;
      //facs, fac pega o fi, se o fac existir soma com fac, se nao soma com 0, a mesma coisa com o percfac
      var fac = fi2 + (fac || 0);
      var percfac = percent + (percfac || 0);
      conteudo += "<tr><td>" + vet[i][0] + "</td><td>" + fi2 + "</td><td>" + percent.toFixed(2) + "</td><td>" + fac + "</td><td>" + percfac.toFixed(2) + "</td></tr>"

    }
  }
  $('#tabela table tbody').html(conteudo);