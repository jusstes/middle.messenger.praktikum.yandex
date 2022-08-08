import ejs from 'ejs';

const string = `
<main>
    <div class="auth _profile">
        <form class="auth__form">
            <div class="auth__photo">
                <%- avatar %>
            </div>
            <h1 class="auth__title">Иван</h1>
            <%- email %>
            <%- login %>
            <%- firstname %>
            <%- lastname %>
            <%- tel %>
            <%- password %>
            <%- passwordRepeat %>
            <%- changeDataBtn %>
            <%- changeUserPassword %>
            <a class="auth__link _logout" href="sign-in.ejs">Выйти</a>
        </form>
    </div>
</main>
`;

const template = ejs.compile(string);

export default template;
