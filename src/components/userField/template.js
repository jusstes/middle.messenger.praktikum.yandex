const template = `
<div class="user <%- data.className %>">
    <img src="<%- data.src %>" alt="<%- data.userName %>" class="user__image">
    <div class="user__text-content">
        <div class="user__heading">
            <p class="user__nickname"><%- data.userName %></p>
            <% if (data.time) { %>
                <time class="user__time"><%- data.time %></time>
            <% } %>
        </div>
        <% if (data.message) { %>
            <div class="user__message-content">
                <p class="user__message"><%- data.message %></p>
                <% if (data.unreadMessageCount) { %>
                    <span class="user__message-count"><%- data.unreadMessageCount %></span>
                <% } %>
            </div>
        <% } %>
    </div>
</div>
`;

export default template;
