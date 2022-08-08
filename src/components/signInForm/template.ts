import ejs from 'ejs';

const string = `<main>
  <div class="auth">
    <form class="auth__form">
      <h1 class="auth__title">Вход</h1>
      <%- login %>
      <%- password %>
      <%- submitBtn %>
      <a class="auth__link" href="sign-up.ejs">Нет аккаунта?</a>
    </form>
  </div>
</main>
`;

const template = ejs.compile(string);

export default template;
