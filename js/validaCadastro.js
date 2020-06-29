function validar(){
    var nome = document.getElementById("nome");
    var pf = document.getElementById("cpf");
    var end = document.getElementById("end");
    var cep = document.getElementById("cep");
    var uf = document.getElementById("uf");
    var telefone = document.getElementById("telefone");
    var email = document.getElementById("email");
    var login = document.getElementById("login");
    var senha = document.getElementById("senha");

    if((nome.value == '') || '') {
        alert('Nome Invalido!');
        nome.focus();
        return;
    }

    if(pf.value == '' || ''){
      alert('CPF ou CNPJ Invalido!');
      pf.focus();
      return;
    }

    if(end.value == '' || ''){
        alert('Endereço Invalido!');
        end.focus();
        return;
    }

    if(cep.value == '' || ''){
        alert('Cep Invalido!');
        cep.focus();
        return;
    }

    if(uf.value == '' || ''){
        alert('Uf Invalido!');
        uf.focus();
        return;
    }

    if(telefone.value == '' || ''){
        alert('Telefone Invalido!');
        telefone.focus();
        return;
    }

    if(email.value == '' || ''){
        alert('Email Invalido!');
        email.focus();
        return;
    }

    if(login.value == '' || ''){
        alert('Login Invalido!');
        login.focus();
        return;
    }
    if(senha.value == '' || ''){
        alert('Senha Invalido!');
        senha.focus();
        return;
    }

    alert('Formulario Enviado com Sucesso!');
}