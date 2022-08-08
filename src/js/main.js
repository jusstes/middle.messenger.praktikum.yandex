import render from '../utils/render';

const chatForm = document.querySelector('.js-form');
const chatContent = document.querySelector('.app-section__content');

const handleSubmit = (evt) => evt.preventDefault();
const scrollToBottom = () => chatContent.scrollTo(0, chatContent.scrollHeight);

chatForm?.addEventListener('submit', handleSubmit);
if (chatContent) window.onload = scrollToBottom;

import SignInForm from '../pages/signInForm';
import SignUpForm from '../pages/signUpForm';
import Profile from '../pages/profile';
import ChangePassword from '../pages/changePassword';
import ChangeUserData from '../pages/changeUserData';
import ClientError from '../pages/clientError';
import ServerError from '../pages/serverError';
import Chat from '../pages/chat';

render('#js-content', new SignInForm());
render('#js-content', new SignUpForm());
render('#js-content', new Profile());
render('#js-content', new ChangePassword());
render('#js-content', new ChangeUserData());
render('#js-content', new ClientError());
render('#js-content', new ServerError());
render('#js-content', new Chat());
