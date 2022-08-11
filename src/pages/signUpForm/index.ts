import template from './template';
import Component from '../../utils/Component';
import Field from '../../components/field';
import Button from '../../components/button';
import { handleSubmit } from '../../utils/events';

class SignUpForm extends Component {
  constructor(props: Record<string, any> = {}) {
    const email = new Field({
      id: 'email',
      type: 'email',
      label: 'Почта',
      error: 'Введите почту',
      inputName: 'email',
      required: true,
      className: '',
    });

    const login = new Field({
      id: 'login',
      type: 'text',
      label: 'Логин',
      error: 'Введите логин',
      inputName: 'login',
      required: true,
      className: '',
    });

    const firstname = new Field({
      id: 'firstname',
      type: 'text',
      label: 'Имя',
      error: 'Введите имя',
      inputName: 'first_name',
      required: true,
      className: '',
    });

    const lastname = new Field({
      id: 'lastname',
      type: 'text',
      label: 'Фамилия',
      error: 'Введите фамилию',
      inputName: 'second_name',
      required: true,
      className: '',
    });

    const tel = new Field({
      id: 'tel',
      type: 'tel',
      label: 'Телефон',
      error: 'Введите телефон',
      inputName: 'phone',
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

    const passwordRepeat = new Field({
      id: 'password-repeat',
      type: 'password',
      label: 'Повторите пароль',
      error: 'Пароли не совпадают',
      inputName: 'password-repeat',
      required: true,
      className: '',
    });

    const submitBtn = new Button({
      tagName: 'link',
      href: '#',
      title: 'Зарегистрироваться',
      type: 'submit',
      className: 'btn default _low-margin',
      events: {
        click: handleSubmit,
      },
    });

    super('div', {
      email,
      login,
      firstname,
      lastname,
      tel,
      password,
      passwordRepeat,
      submitBtn,
      ...props,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default SignUpForm;
