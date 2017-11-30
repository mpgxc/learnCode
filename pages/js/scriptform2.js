

function ValidarDados(){

	var Nome  	      =  formGeral.nome.value; 
	var Email 	      =  formGeral.email.value;
	var Mensagem      =  formGeral.mensagem.value;
	var Arquivo       =  formGeral.arquivo.value;
	var Titulo        =  formGeral.titulo.value;
	var FlagEmail     =  false;	

	if(Nome == ""){
		alert('Preencha o campo "Nome"! ');
		return false;
	}else
	if(Nome.length < 5){
		alert('Preencha o seu "Nome" completo! ');
		return false;
	}

	if(Email == ""){
		alert('Preencha o campo "Email"! ');
		return false;
	}else{
		for(var Percorre = 0; Percorre < Email.length; Percorre++){
			if('@' == Email[Percorre]){
				FlagEmail = true;
			}
		}
		if(FlagEmail == false){
			alert('Formato de "Email" errado! "@". ');
			return false;
		}
	}
	if(Mensagem == ""){
		alert('Preencha o campo  de "Mensagem"! ');
		return false;
	}
	if(Titulo == ""){
		alert('Preencha o campo  de Título!');
		return false;	
	}
	if(Arquivo == false){
		alert("Selecione um arquivo para envio!");
		return false;
	}
	alert("Dados Enviados!");
	return "artigos.html";
}