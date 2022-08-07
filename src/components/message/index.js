import ejs from 'ejs';
import template from './template';

const data = {
  text: 'Проверим?',
  time: '19:48',
  isYourMessage: true,
  isRead: true,
};

const message = ejs.render(template, { data });

export default message;
