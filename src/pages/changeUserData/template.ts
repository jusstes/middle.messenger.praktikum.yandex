import ejs from 'ejs';

const string = `
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
            <%- submitBtn %>
        </form>
    </div>
`;

const template = ejs.compile(string);

export default template;
