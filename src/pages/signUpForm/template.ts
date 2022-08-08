import ejs from 'ejs';

const string = `
<main>
    <div class="auth">
        <form class="auth__form">
            <h1 class="auth__title">Регистрация</h1>
            <%- email %>
            <%- login %>
            <%- firstname %>
            <%- lastname %>
            <%- tel %>
            <%- password %>
            <%- passwordRepeat %>
            <%- submitBtn %>
            <a class="auth__link" href="sign-in.ejs">Войти</a>
        </form>
    </div>
</main>
`;

const template = ejs.compile(string);

export default template;
