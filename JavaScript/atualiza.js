function atualizarUsuario() {
    const novoNomeUsuario = document.getElementById('username').value;
    const novoEmail = document.getElementById('email').value;
    const novaSenha = document.getElementById('password').value;

    const dadosAtualizados = {
        username: novoNomeUsuario,
        email: novoEmail,
        password: novaSenha
    };

    
    const urlAtualizacao = 'https://seuservidor.com/api/atualizar-usuario';

    axios.put(urlAtualizacao, dadosAtualizados)
        .then(function (response) {
            console.log('Usuário atualizado com sucesso:', response.data);
        })
        .catch(function (error) {
            console.error('Erro ao atualizar usuário:', error);
        });
}