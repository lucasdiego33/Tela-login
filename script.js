



const usuarios = [
    { nome: "lucas diego candido", senha: "303334"},
   
]


function clicar(){
      
      const nome = document.getElementById("inputname").value
      const senha = document.getElementById("inputsenha").value
      const  usuariovalido = usuarios.find(usuarios => usuarios.nome === nome && usuarios.senha === senha);
       

 if(usuariovalido) {
    document.getElementById("mensagem").innerHTML = "Login realizado com sucesso. Parabéns!!!"

 } else {
    document.getElementById("mensagem").innerHTML = "Nome ou Senha incorretos, tente novamente!!!!"
 }












}