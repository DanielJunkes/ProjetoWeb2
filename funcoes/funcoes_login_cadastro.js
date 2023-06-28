function loginUsuario() {
    const email = document.getElementById("emailInputLogin").value;
    const senha = document.getElementById("senhaInputLogin").value;
    
    if(email!="" && senha!="") {
        fetch('http://localhost:8080/login/'+nome, {
            method: "GET",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({"email": email, "senha": senha})
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Response error');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log('Erro com a operação fetch', error);
        });
    }  else {
        alert("Senha e ou email estão vazios")
    }
}

function cadastroUsuario() {
    const email = document.getElementById("emailInputCadastro").value;
    const senha = document.getElementById("senhaInputCadastro").value;

    if(email!="" && senha!="") {
        fetch('http://localhost:8080/createusuario', {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({"email": email, "senha": senha})
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Response error');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log('Erro com a operação fetch', error);
        });
    } else {
        alert("Senha e ou email estão vazios")
    }
}