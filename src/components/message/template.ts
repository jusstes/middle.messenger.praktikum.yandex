import ejs from 'ejs';

const string = `
<% if (isMedia) { %>
    <img src="<%- src %>" alt="" class="message _image <%- isYourMessage ? '_your-message' : '' %>">
<% } else { %>
    <div class="message <%- isYourMessage ? '_your-message' : '' %>">
        <p class="message__text"><%- text %></p>
        <time class="message__time <%- isRead ? '_is-read' : '' %>"><%- time %></time>
    </div>
<% } %>
`;

const template = ejs.compile(string);

export default template;
