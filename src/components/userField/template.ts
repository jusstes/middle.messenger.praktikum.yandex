import ejs from 'ejs';

const string = `
<div class="user <%- className %>">
    <img src="<%- src %>" alt="<%- userName %>" class="user__image">
    <div class="user__text-content">
        <div class="user__heading">
            <p class="user__nickname"><%- userName %></p>
            <% if (time) { %>
                <time class="user__time"><%- time %></time>
            <% } %>
        </div>
        <% if (message) { %>
            <div class="user__message-content">
                <p class="user__message"><%- message %></p>
                <% if (unreadMessageCount) { %>
                    <span class="user__message-count"><%- unreadMessageCount %></span>
                <% } %>
            </div>
        <% } %>
    </div>
</div>
`;

const template = ejs.compile(string);

export default template;
