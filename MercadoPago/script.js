// Páginas - Alterna entre as telas de front, login e cadastro

// Adiciona evento de clique ao logo para voltar à página inicial
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', () => {
        document.querySelector('.front-pagina').style.display = 'block'; // Exibe a página inicial
        document.querySelector('.login-pagina').style.display = 'none'; // Esconde a página de login
        document.querySelector('.cadastrar-pagina').style.display = 'none'; // Esconde a página de cadastro
    });
});

// Adiciona evento de clique ao botão de login para exibir a página de login
document.querySelectorAll('.login').forEach(loginBtn => {
    loginBtn.addEventListener('click', () => {
        document.querySelector('.front-pagina').style.display = 'none'; // Esconde a página inicial
        document.querySelector('.login-pagina').style.display = 'block'; // Exibe a página de login
        document.querySelector('.cadastrar-pagina').style.display = 'none'; // Esconde a página de cadastro
    });
});

// Adiciona evento de clique ao botão de cadastro para exibir a página de cadastro
document.querySelectorAll('.cadastrar').forEach(cadastrarBtn => {
    cadastrarBtn.addEventListener('click', () => {
        document.querySelector('.front-pagina').style.display = 'none'; // Esconde a página inicial
        document.querySelector('.login-pagina').style.display = 'none'; // Esconde a página de login
        document.querySelector('.cadastrar-pagina').style.display = 'flex'; // Exibe a página de cadastro
    });
});
// Fim das páginas

// Navegação - Controla o menu responsivo e dropdowns

const dropdownItems = document.querySelectorAll('.dropdown-hover');

if (window.innerWidth < 1000) {
    // Para telas menores que 1000px, ativa o menu responsivo
    const menuIcon = document.querySelector('.menu');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change'); // Alterna a classe do menu para abrir/fechar

        // Fecha os dropdowns caso o menu seja fechado
        if (!navbar.classList.contains('change')) {
            document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                dropdown.style.left = '-20rem'; // Esconde os dropdowns
            });
        }
    });

    // Abre os submenus quando um link é clicado
    document.querySelectorAll('.show-dropdown').forEach(link => {
        link.addEventListener('click', () => {
            link.nextElementSibling.style.left = '0'; // Mostra o dropdown correspondente
        });
    });

    // Fecha os submenus quando o título do dropdown é clicado
    document.querySelectorAll('.dropdown-heading-link').forEach(headingLink => {
        headingLink.addEventListener('click', () => {
            headingLink.parentElement.parentElement.style.left = '-20rem'; // Esconde o dropdown
        });
    });
} else {
    // Para telas maiores, exibe os dropdowns ao passar o mouse
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener('mouseover', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible';
            document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right, #066399, #2f8fdf, #066399)';
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'; // Rotaciona a seta para baixo
        });

        dropdownItem.addEventListener('mouseout', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden';
            document.querySelector('.navbar-wrapper').style.background = 'none';
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'; // Volta a seta para cima
        });
    });
}

// Recarrega a página quando a janela for redimensionada
window.addEventListener('resize', () => {
    window.location.reload();
});

// Fim da navegação

// Validação do formulário de login

function validateForm(event) {
    let isValid = true; // Variável que armazena se o formulário é válido ou não
    let email = document.getElementById('email').value; // Obtém o valor do campo de e-mail
    let password = document.getElementById('password').value; // Obtém o valor do campo de senha
    let emailError = document.getElementById('email-error'); // Obtém o elemento da mensagem de erro do e-mail
    let passwordError = document.getElementById('password-error'); // Obtém o elemento da mensagem de erro da senha

    // Limpa mensagens de erro anteriores
    emailError.textContent = '';
    passwordError.textContent = '';

    // Validação do e-mail: verifica se está vazio ou não contém '@'
    if (email === '' || !email.includes('@')) {
        emailError.textContent = 'Por favor, insira um e-mail válido'; // Exibe mensagem de erro
        isValid = false; // Define o formulário como inválido
    }

    // Validação da senha: deve ter pelo menos 6 caracteres
    if (password.length < 6) {
        passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres'; // Exibe mensagem de erro
        isValid = false; // Define o formulário como inválido
    }

    // Se o formulário for inválido, impede o envio
    if (!isValid) {
        event.preventDefault();
    }
    return isValid; // Retorna se o formulário é válido ou não
}

// Fim da validação do formulário
