const template = `
<% if (data.isMedia) { %>
    <img src="<%- data.src %>" alt="" class="message _image <%- data.isYourMessage ? '_your-message' : '' %>">
<% } else { %>
    <div class="message <%- data.isYourMessage ? '_your-message' : '' %>">
        <p class="message__text"><%- data.text %></p>
        <time class="message__time <%- data.isRead ? '_is-read' : '' %>"><%- data.time %></time>
    </div>
<% } %>
`;

export default template;
