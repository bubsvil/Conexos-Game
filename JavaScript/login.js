function autenticarUsuario() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    var url = 'URL_DO_SEU_BACKEND/auth?usuario=' + encodeURIComponent(usuario) + '&senha=' + encodeURIComponent(senha);

    axios.get(url)
        .then(function (response) {
            if (response.data.autenticado) {
                console.log('Usuário autenticado com sucesso!', response.data);
                window.location.href = 'player.html';
                
            } else {
                console.log('Falha na autenticação. Usuário ou senha incorretos.');
                exibirModalErro();
            }
        })
        .catch(function (error) {
            console.error('Erro na requisição', error);
            exibirModalErro();
        });
}

function exibirModalErro() {
    alert('Usuário/e-mail ou senha incorretos');
}
