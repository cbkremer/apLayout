/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
//alert("voce esta no formulario de contato");
function mascaraTel(i){
    const tel = i.value;
    //verifica se nao é numero
    //meio desnecessário trabalhar com vetor
    if(isNaN(tel[tel.length-1])){
        i.value = tel.substring(0,tel.length-1);
        return;
    }
    i.setAttribute("maxlength","16");
}
