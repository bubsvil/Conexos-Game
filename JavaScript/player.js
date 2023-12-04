function redirecionarUsuario() {
    var authToken = obterTokenDeAutenticacao(); 

    var config = {
        headers: {
            Authorization: 'Bearer ' + authToken
        }
    };

    axios.get('URL_DO_SEU_BACKEND/dados-do-usuario', config)
        .then(function (response) {
            var dadosDoUsuario = response.data;
            exibirDadosDoUsuario(dadosDoUsuario);
        })
        .catch(function (error) {
            console.error('Erro ao obter dados do usuário', error);
        });
}

function exibirDadosDoUsuario(dadosDoUsuario) {
    var nomeUsuarioElement = document.getElementById('nomeUsuario');
    var emailUsuarioElement = document.getElementById('emailUsuario');

    nomeUsuarioElement.textContent = 'Nome de Usuário: ' + dadosDoUsuario.nomeUsuario;
    emailUsuarioElement.textContent = 'E-mail: ' + dadosDoUsuario.email;
}
