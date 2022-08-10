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

switch (currentPathname) {
  case '/sign-in':
    render('#js-content', new SignInForm());
    break;
  case '/sign-up':
    render('#js-content', new SignUpForm());
    break;
  case '/profile':
    render('#js-content', new Profile());
    break;
  case '/change-password':
    render('#js-content', new ChangePassword());
    break;
  case '/change-user-data':
    render('#js-content', new ChangeUserData());
    break;
  case '/client-error':
    render('#js-content', new ClientError());
    break;
  case '/server-error':
    render('#js-content', new ServerError());
    break;
  default:
    render('#js-content', new Chat());
}
