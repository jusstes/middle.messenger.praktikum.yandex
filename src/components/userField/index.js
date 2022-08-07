import ejs from 'ejs';
import template from './template';

const data = {
  userName: 'Alex',
  src: '../../static/images/photo.jpg',
  className: '',
  time: 'Пн',
  message: 'Вы: стикер',
  unreadMessageCount: '3',
};

const userField = ejs.render(template, { data });

export default userField;
