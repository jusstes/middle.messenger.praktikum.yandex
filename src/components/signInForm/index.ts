import template from './template';
import Component from '../../utils/Component';
import Field from '../field';
import Button from '../button';

class SignInForm extends Component {
  constructor(props: Record<string, any> = {}) {
    const login = new Field({
      id: 'login',
      type: 'text',
      label: 'Логин',
      error: 'Введите логин',
      inputName: 'login',
      required: true,
      className: '',
    });

    const password = new Field({
      id: 'password',
      type: 'password',
      label: 'Пароль',
      error: 'Введите пароль',
      inputName: 'password',
      required: true,
      className: '',
    });

    const submitBtn = new Button({
      tagName: 'link',
      href: '#',
      title: 'Войти',
      type: '',
      className: 'btn default',
    });

    super('div', { login, password, submitBtn, ...props });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default SignInForm;
