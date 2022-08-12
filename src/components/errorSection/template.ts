import ejs from 'ejs';

const string = `
<section class="error-section">
    <h1 class="error-section__title"><%- errorCode %></h1>
    <p class="error-section__subtitle"><%- errorMessage %> </p>
    <a class="error-section__link" href="<%- errorBackLink %>"><%- errorBackText %></a>
</section>
`;
const template = ejs.compile(string);

export default template;
