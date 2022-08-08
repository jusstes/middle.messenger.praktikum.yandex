import ejs from 'ejs';

const string = `
<div class="field">
      <% if (label) { %>
          <label class="field__label" for="<%- id %>"><%- label %></label>
      <% } %>
      <input class="field__input <%- className ? className : '' %>" <%- required ? 'required' : '' %> name="<%- inputName %>" type="<%- type %>"
             id="<%- id %>" autocomplete="off">
      <% if (error) { %>
          <span class="field__error"><%- error %></span>
      <% } %>
  </div>
`;
const template = ejs.compile(string);

export default template;
