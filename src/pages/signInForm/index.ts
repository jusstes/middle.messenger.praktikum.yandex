import template from './template';
import Component from '../../utils/Component';
import Field from '../../components/field';
import Button from '../../components/button';
import { handleSubmit } from '../../utils/events';

class SignInForm extends Component {
  constructor(props: Record<string, any> = {}) {
    const login = new Field({
      id: 'login',
      type: 'text',
      label: 'Логин',
      error: 'Введите логин',
      inputName: 'login',
      required: true,
    });

    const password = new Field({
      id: 'password',
      type: 'password',
      label: 'Пароль',
      error: 'Введите пароль',
      inputName: 'password',
      required: true,
    });

    const submitBtn = new Button({
      tagName: 'link',
      href: '#',
      title: 'Войти',
      type: 'submit',
      className: 'btn default',
      events: {
        click: handleSubmit,
      },
    });

    super('div', { login, password, submitBtn, ...props });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default SignInForm;
