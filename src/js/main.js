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
