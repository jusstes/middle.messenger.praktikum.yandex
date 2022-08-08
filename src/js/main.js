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

render('main', new SignInForm());
render('main', new SignUpForm());
render('main', new Profile());
render('main', new ChangePassword());
render('main', new ChangeUserData());
render('main', new ClientError());
render('main', new ServerError());
