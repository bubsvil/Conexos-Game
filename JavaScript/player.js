function redirecionarUsuario() {
    // Obter o token de autenticação do seu backend (pode ser armazenado em um cookie ou local storage)
    var authToken = obterTokenDeAutenticacao(); // Implemente esta função de acordo com sua lógica

    // Se você estiver usando um token, inclua-o no cabeçalho da requisição
    var config = {
        headers: {
            Authorization: 'Bearer ' + authToken
        }
    };

    // Fazer a requisição GET para obter os dados do usuário
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

    // Atualizar o conteúdo dos elementos com os dados do usuário
    nomeUsuarioElement.textContent = 'Nome de Usuário: ' + dadosDoUsuario.nomeUsuario;
    emailUsuarioElement.textContent = 'E-mail: ' + dadosDoUsuario.email;
}
