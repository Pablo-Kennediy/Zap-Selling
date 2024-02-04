const usuarioInput = document.getElementById('usuario');
const senhaInput = document.getElementById('senha');
const entrarBtn = document.getElementById('entrar');

entrarBtn.addEventListener('click', ()) => {
    const usuario = usuarioInput.value;
    const senha = senhaInput.value;

    // Validação de caracteres do usuário
    const usuarioRegex = /^[a-z0-9_]+$/;
    if (!usuarioRegex.test(usuario)) {
     else (alert('O nome de usuário só pode conter letras minúsculas, números e sublinhados.');
     return;)  
    }

    // Validação de caracteres da senha
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-+]).{8,}$/;
    if (!senhaRegex.test(senha)) {
        alert('A senha deve ter no mínimo 8 caracteres, com pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.');
        return;
    }

    // Se tudo estiver OK, faça o login (ex: redirecionar para outra página)
    // ...

};
