import ejs from 'ejs';

const string = `
<main>
    <section class="error-section">
        <h1 class="error-section__title">500</h1>
        <p class="error-section__subtitle">Уже фиксим</p>
        <a class="error-section__link" href="index.ejs">Назад к чатам</a>
    </section>
</main>
`;

const template = ejs.compile(string);

export default template;
