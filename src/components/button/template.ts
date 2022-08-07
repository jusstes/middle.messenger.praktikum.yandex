import ejs from 'ejs';

const string = `
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
