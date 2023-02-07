/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
//alert("voce esta no formulario de contato");
function mascaraTel(i){
    let tel = i.value;
    
    //funciona sem usar vetor
    if(isNaN(tel[tel.length-1])){
        i.value = tel.substring(0,tel.length-1);
        return;
    }
    i.setAttribute("maxlength","16");
    //mascara do telefone
    if(tel.length == 1){
        i.value = "("+i.value;
    }
    if(tel.length == 3){
        i.value = i.value+") ";
    }
    if(tel.length == 6){
        i.value = i.value+" ";
    }
    if(tel.length == 11){
        i.value = i.value+"-";
    }
}
function mascaraCPF(i){
    let cpf = i.value;

    //975.456.111-04
    if(isNaN(cpf[cpf.length-1])){
        i.value = cpf.substring(0,cpf.length-1);
        return;
    }
    i.setAttribute("maxlength","14");
    if(cpf.length == 3){
        i.value = i.value+".";
    }
    if(cpf.length == 7){
        i.value = i.value+".";
    }
    if(cpf.length == 11){
        i.value = i.value+"-";
    }
}
function mascaraCNPJ(i){
    //XX.XXX.XXX/0001-XX
    let cnpj = i.value;

    if(isNaN(cnpj[cnpj.length-1])){
        i.value = cnpj.substring(0,cnpj.length-1);
        return;
    }
    i.setAttribute("maxlength","18");
    if(cnpj.length == 2){
        i.value = i.value+".";
    }
    if(cnpj.length == 6){
        i.value = i.value+".";
    }
    if(cnpj.length == 10){
        i.value = i.value+"/";
    }
    if(cnpj.length == 15){
        i.value = i.value+"-";
    }
}
function validar(){
    var nome = formUser.nome.value;
    var email = formUser.email.value;
    var fone = formUser.fone.value;
    var cpf = formUser.cpf.value;
    var cnpj = formUser.cnpj.value;
    var endereco = formUser.end.value;
    var senha = formUser.senha.value;
    var conf_senha = formUser.confSenha.value;
    

    if(nome.length <= 3){
        alert("Informe o nome completo")
        formUser.nome.focus();
        return false;
    }
    if(email.length <= 10){
        alert("Informe um email válido");
        formUser.focus.email;
        return false;
    }
    if(fone.length < 16){
        alert("Telefone inválido");
        formUser.focus.fone;
        return false;
    }
    if(cpf == "" && cnpj == ""){
        alert("informe cpf ou cnpj");
        return false;
    }
    else{
        if(cpf.length < 14 && cnpj == ""){
            alert("Informe um cpf válido");
            formUser.focus.cpf;
            return false;
        }
        else if(cnpj.length < 18 && cpf == ""){
            alert("Informe um cnpj válido");
            formUser.focus.cnpj;
            return false;
        }
    }
    if(endereco.length < 3){
        alert("Informe um endereço válido");
        formUser.focus.endereco;
        return false;
    }
    if(senha.length < 8){
        alert(" Senha inválida");
        formUser.focus.senha;
        return false;
    }
    else if(conf_senha != senha){
        alert(" As duas senhas devem ser iguais");
        formUser.focus.confSenha;
        return false;
    }

}
