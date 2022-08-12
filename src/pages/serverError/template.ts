import ejs from 'ejs';

const string = `<%- errorSection %>`;

const template = ejs.compile(string);

export default template;
