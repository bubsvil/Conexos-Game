function enviarDados() {

    let nomeCompleto = document.getElementById('nomeCompleto').value;
    let email = document.getElementById('email').value;
    let nickName = document.getElementById('nickName').value;
    let senha = document.getElementById('senha').value;

    let dados = {
        nomeCompleto: nomeCompleto,
        email: email,
        nickName: nickName,
        senha: senha
    };
    
    axios.post('URL_DO_SEU_BACKEND', dados)
        .then(function (response) {
            console.log('Cadastro efetuado com sucesso!', response.data);
        })
        .catch(function (error) {
            console.error('Erro ao efetuar cadastro', error);
        });
}
