import template from './template';
import Component from '../../utils/Component';
import Button from '../../components/button';
import Field from '../../components/field';
import DefaultAvatar from '../../components/defaultAvatar';

class Profile extends Component {
  constructor(props: Record<string, any> = {}) {
    const email = new Field({
      id: 'email',
      type: 'email',
      label: 'Почта',
      error: 'Введите почту',
      inputName: 'email',
      required: false,
      className: '',
    });

    const login = new Field({
      id: 'login',
      type: 'text',
      label: 'Логин',
      error: 'Введите логин',
      inputName: 'login',
      required: false,
      className: '',
    });

    const firstname = new Field({
      id: 'firstname',
      type: 'text',
      label: 'Имя',
      error: 'Введите имя',
      inputName: 'first_name',
      required: false,
      className: '',
    });

    const lastname = new Field({
      id: 'lastname',
      type: 'text',
      label: 'Фамилия',
      error: 'Введите фамилию',
      inputName: 'second_name',
      required: false,
      className: '',
    });

    const tel = new Field({
      id: 'tel',
      type: 'tel',
      label: 'Телефон',
      error: 'Введите телефон',
      inputName: 'phone',
      required: false,
      className: '',
    });

    const password = new Field({
      id: 'password',
      type: 'password',
      label: 'Пароль',
      error: 'Введите пароль',
      inputName: 'password',
      required: false,
      className: '',
    });

    const passwordRepeat = new Field({
      id: 'password-repeat',
      type: 'password',
      label: 'Повторите пароль',
      error: 'Пароли не совпадают',
      inputName: 'password-repeat',
      required: false,
      className: '',
    });

    const avatar = new DefaultAvatar({});

    const changeDataBtn = new Button({
      title: 'Изменить данные',
      className: 'btn default _low-margin',
      tagName: 'link',
      href: 'change-user-data.ejs',
      type: '',
    });

    const changeUserPassword = new Button({
      title: 'Изменить пароль',
      className: 'btn default _low-margin',
      tagName: 'link',
      href: 'change-password.ejs',
      type: '',
    });

    super('div', {
      email,
      login,
      firstname,
      lastname,
      tel,
      password,
      passwordRepeat,
      changeDataBtn,
      changeUserPassword,
      avatar,
      ...props,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Profile;
