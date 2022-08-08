import ejs from 'ejs';

const string = `
    <div class="app-section chat">
        <div class="app-section__side">
            <a href="profile.html" class="chat__link">Профиль</a>
            <input type="text" placeholder="Поиск" class="chat__search">
            <%- chatFields1 %>
            <%- chatFields2 %>
            <%- chatFields3 %>
            <%- chatFields4 %>
        </div>
        <div class="app-section__main">
            <div class="app-section__heading">
                <%- profileField %>
                <button type="button" class="dots">
                    <i></i>
                    <i></i>
                    <i></i>
                </button>
            </div>
            <div class="app-section__content">
                <%- message1 %>
                <%- message2 %>
                <%- message3 %>
                <%- message4 %>
                <%- message5 %>
            </div>

            <form class="app-section__controls | js-form">
                <%- attachBtn %>
                <input type="text" class="chat__message-input" placeholder="Сообщение">
                <%- submitBtn %>
            </form>
        </div>
    </div>
`;

const template = ejs.compile(string);

export default template;
