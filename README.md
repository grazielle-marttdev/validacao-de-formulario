# 📝 Validação de Formulário com Yup.js

Validação de Formulário é uma aplicação web focada em validar formulários de maneira eficiente e moderna, utilizando a biblioteca [Yup.js](https://github.com/jquense/yup) para criar um esquema de validação robusto e declarativo. O projeto demonstra como fornecer feedback em tempo real para o usuário, melhorando a experiência de preenchimento e garantindo a integridade dos dados enviados.

## 🚀 Funcionalidades & Interatividades

✅ **1. Validação de Esquema (Schema Validation)**

- Utiliza a biblioteca `Yup.js` para definir regras claras e concisas para cada campo do formulário.
- Garante que os dados como nome, e-mail e telefone estejam no formato correto antes do envio.


-   A validação ocorre em tempo real enquanto o usuário digita.
-   Um `debounce` de 500ms é aplicado para evitar validações excessivas durante a digitação, disparando a checagem apenas quando o usuário faz uma pausa.
-   O feedback (mensagens de erro) é exibido instantaneamente abaixo de cada campo.


-   O formulário implementa uma regra onde o usuário deve preencher **ou** o e-mail **ou** o telefone, demonstrando a capacidade do `Yup.js` de lidar com validações condicionais.
-   Se um campo é inválido, o `span` de erro correspondente exibe a mensagem de erro específica.


-   Ao clicar em "Enviar", o formulário realiza uma validação final em todos os campos.
-   Se todos os dados estiverem corretos, uma mensagem de sucesso é exibida.
-   Caso contrário, todas as mensagens de erro relevantes são mostradas e o envio é bloqueado.

## 🧠 Fluxo de Dados da Validação

```
Usuário → Digita no campo do formulário
    ↓
JavaScript → Evento 'input' é disparado
    ↓
Função com debounce → Aguarda 500ms após a última tecla pressionada
    ↓
Validação com Yup.js → O valor do campo é testado contra o esquema de regras
    ↓
Interface → Exibe ou remove a mensagem de erro com base no resultado
```

## 🛠️ Tecnologias Utilizadas

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50" height="50" alt="HTML5 logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" height="50" alt="CSS3 logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="50" alt="JavaScript logo" />

### 🔗 Biblioteca Principal

-   **[Yup.js](https://github.com/jquense/yup)**: Para validação de esquemas de objetos JavaScript.

## 💻 Como Rodar o Projeto Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# 2. Acesse a pasta do projeto
cd validacao-de-formulario

# 3. Abra o arquivo principal no navegador
# Você pode simplesmente abrir o arquivo 'index.html' diretamente no seu navegador
# ou usar uma extensão como o 'Live Server' no VS Code.

```

---

### ✨ Autora

**Grazielle A. M.** — ``Desenvolvedora Frontend``

### 📬 Contato

<div align="center">

> Ficarei feliz em conversar sobre o projeto ou tecnologia:

  <a href="https://github.com/grazielle-marttdev" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=white" alt="Icone do github" />
  </a>
  <a href="https://www.linkedin.com/in/grazielle-martins-557b61334/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Icone do linkedin"/>
  </a>
</div>

---

## 🤝 Contribuições

Contribuições são sempre bem‑vindas! ✨
