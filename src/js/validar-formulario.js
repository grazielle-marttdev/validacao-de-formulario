import * as yup from 'https://cdn.jsdelivr.net/npm/yup@1.7.1/+esm';

const REGEX_NOME = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/;

yup.setLocale({
    mixed: {
        required: 'O campo ${path} é obrigatório',
    },
    string: {
        min: 'Deve ter no mínimo ${min} caracteres',
        max: 'Deve ter no máximo ${max} caracteres',
    }
})

const schemaForm = yup.object().shape({
    nome: yup
        .string()
        .trim()
        .required()
        .min(3)
        .max(100)
        .matches(REGEX_NOME, 'O nome só pode conter letras e espaços'),

    email: yup
        .string()
        .trim()
        .email('Formato de email inválido'),

    telefone: yup
        .string()
        .transform(value => value ? value.replace(/\D/g, '') : value)
        .test('formato-telefone', function(value) {
            if (!value) return true; 

            const { path, createError } = this;

            if (value.startsWith('0')) {
                return createError({ 
                    path, 
                    message: 'O DDD ou o número não podem começar com zero' 
                });
            }

            if (value.length < 10 || value.length > 11) {
                return createError({ 
                    path, 
                    message: 'O telefone deve ter entre 10 e 11 dígitos'
                });
            }

            return true;
        }),
    
    mensagem: yup
        .string()
        .trim()
        .required()
        .min(10)
        .max(500),
}).test('email-ou-telefone', function (values) {
    const { createError } = this;

    if (!values || (!values.email && !values.telefone)) {
        return createError({
            path: 'email',
            message: 'Informe ao menos email ou telefone'
        });
    }

    return true;
}); 

const form = document.getElementById('form-contato');
const inputs = form.querySelectorAll('input, textarea');

document.querySelectorAll('.error').forEach(el => el.textContent = '');

// Função auxiliar para limpar ou exibir o erro de um campo específico
const validarCampo = async (nomeCampo) => {
    const formData = new FormData(form);
    const dados = Object.fromEntries(formData.entries());
    const campoErro = document.getElementById(`erro-${nomeCampo}`);

    try {
        await schemaForm.validateAt(nomeCampo, dados);

        if (campoErro) campoErro.textContent = '';

    } catch (err) {
        if (campoErro) campoErro.textContent = err.message;
    }
};

// Função Debounce para evitar validações excessivas em tempo real
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

// Adiciona o ouvinte de evento em cada campo para validação "on-the-fly"
const debouncedValidarCampo = debounce(validarCampo, 300);

inputs.forEach(input => {
    input.addEventListener('input', (event) => {
        const nomeCampo = event.target.name;
        debouncedValidarCampo(nomeCampo);

        if (nomeCampo === 'email') {
            debouncedValidarCampo('telefone');
        } else if (nomeCampo === 'telefone') {
            debouncedValidarCampo('email');
        }
    });
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const dados = Object.fromEntries(formData.entries());

    try {
        await schemaForm.validate(dados, { abortEarly: false });

        alert('Formulário enviado com sucesso!');
        console.log('Dados válidos:', dados);
        
    } catch (err) {
        if (err instanceof yup.ValidationError) {
            document.querySelectorAll('.error').forEach(el => el.textContent = '');

            err.inner.forEach((error) => {
                const campoErro = document.getElementById(`erro-${error.path}`);
                if (campoErro) campoErro.textContent = error.message;
            });
        }
    }
}); 