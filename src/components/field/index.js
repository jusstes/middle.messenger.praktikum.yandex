import ejs from 'ejs';
import template from './template';

const data = {
  id: 'oldPassword',
  type: 'password',
  label: 'Старый пароль',
  error: 'Введите пароль',
  inputName: 'oldPassword',
  required: true,
};

const field = ejs.render(template, { data });

export default field;
