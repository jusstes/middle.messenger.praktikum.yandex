import ejs from 'ejs';

const string = `
<div class="field">
      <% if (label) { %>
          <label class="field__label" for="<%- id %>"><%- label %></label>
      <% } %>
      <%- inputElement %>
      <% if (error) { %>
          <span class="field__error"><%- error %></span>
      <% } %>
  </div>
`;
const template = ejs.compile(string);

export default template;
