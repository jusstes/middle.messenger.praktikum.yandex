import ejs from 'ejs';

const string = `
<% tagName = typeof tagName === 'string' ? tagName : '' %>
<% title = typeof title === 'string' ? title : '' %>

<% if (tagName === 'link') { %>
  <a href="<%- href %>" class="<%- className %>">
    <%- title %>
  </a>
<% } else { %>
  <button type="<%- type %>" class="<%- className %>">
    <%- title %>
  </button>
<% } %>
`;
const template = ejs.compile(string);

export default template;
