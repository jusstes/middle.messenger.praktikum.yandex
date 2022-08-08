const chatForm = document.querySelector('.js-form');
const chatContent = document.querySelector('.app-section__content');

const handleSubmit = (evt) => evt.preventDefault();
const scrollToBottom = () => chatContent.scrollTo(0, chatContent.scrollHeight);

chatForm?.addEventListener('submit', handleSubmit);
if (chatContent) window.onload = scrollToBottom;

import render from '../utils/render';
import Button from '../components/button';
render(
  'main',
  new Button({
    tagName: 'link',
    href: '#',
    title: 'Войти',
    type: '',
    className: 'btn default',
  }),
);

import Field from '../components/field';

render(
  'main',
  new Field({
    id: 'oldPassword',
    type: 'password',
    label: 'Старый пароль',
    error: 'Введите пароль',
    inputName: 'oldPassword',
    required: true,
    className: '',
  }),
);

import Message from '../components/message';

render(
  'main',
  new Message({
    text: 'Проверим?',
    time: '19:48',
    isYourMessage: true,
    isRead: true,
    isMedia: false,
  }),
);

import UserField from '../components/userField';

render(
  'main',
  new UserField({
    userName: 'Alex',
    src: '../../static/images/photo.jpg',
    className: '',
    time: 'Пн',
    message: 'Вы: стикер',
    unreadMessageCount: '3',
  }),
);

import SignInForm from '../components/signInForm';

render('main', new SignInForm());
