const template = `
<div class="field">
      <% if (data.label) { %>
          <label class="field__label" for="<%- data.id %>"><%- data.label %></label>
      <% } %>
      <input class="field__input <%- data.className ? data.className : '' %>" <%- data.required ? 'required' : '' %> name="<%- data.inputName %>" type="<%- data.type %>"
             id="<%- data.id %>" autocomplete="off">
      <% if (data.error) { %>
          <span class="field__error"><%- data.error %></span>
      <% } %>
  </div>
`;

export default template;
