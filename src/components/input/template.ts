import ejs from 'ejs';

const string = `
<input class="field__input <%- className ? className : '' %>" <%- required ? 'required' : '' %> name="<%- inputName %>" type="<%- type %>"
             id="<%- id %>" autocomplete="off">
`;
const template = ejs.compile(string);

export default template;
