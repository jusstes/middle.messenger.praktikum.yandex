import SignInForm from '../pages/signInForm';
import SignUpForm from '../pages/signUpForm';
import Profile from '../pages/profile';
import ChangePassword from '../pages/changePassword';
import ChangeUserData from '../pages/changeUserData';
import ClientError from '../pages/clientError';
import ServerError from '../pages/serverError';
import Chat from '../pages/chat';
import render from '../utils/render';

const chatForm = document.querySelector('.js-form');
const chatContent: HTMLElement | null = document.querySelector(
  '.app-section__content',
);

if (chatContent) {
  window.onload = () => {
    chatContent.scrollTo(0, chatContent.scrollHeight);
  };
}

const handleSubmit = (evt: { preventDefault: () => any }) => {
  evt.preventDefault();
};

chatForm?.addEventListener('submit', handleSubmit);

const currentPathname: string = window.location.pathname;

switch (true) {
  case currentPathname.includes('sign-in'):
    render('#js-content', new SignInForm());
    break;
  case currentPathname.includes('sign-up'):
    render('#js-content', new SignUpForm());
    break;
  case currentPathname.includes('profile'):
    render('#js-content', new Profile());
    break;
  case currentPathname.includes('change-password'):
    render('#js-content', new ChangePassword());
    break;
  case currentPathname.includes('change-user-data'):
    render('#js-content', new ChangeUserData());
    break;
  case currentPathname.includes('client-error'):
    render('#js-content', new ClientError());
    break;
  case currentPathname.includes('server-error'):
    render('#js-content', new ServerError());
    break;
  default:
    render('#js-content', new Chat());
}
