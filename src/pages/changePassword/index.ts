import template from './template';
import Component from '../../utils/Component';
import Field from '../../components/field';
import Button from '../../components/button';
import DefaultAvatar from '../../components/defaultAvatar';

class ChangePassword extends Component {
  constructor(props: Record<string, any> = {}) {
    const oldPassword = new Field({
      id: 'oldPassword',
      type: 'password',
      label: 'Старый пароль',
      error: 'Введите пароль',
      inputName: 'oldPassword',
      required: true,
      className: '',
    });

    const newPassword = new Field({
      id: 'newPassword',
      type: 'password',
      label: 'Новый пароль',
      error: 'Введите пароль',
      inputName: 'newPassword',
      required: true,
      className: '',
    });

    const newPasswordRepeat = new Field({
      id: 'password-repeat',
      type: 'password',
      label: 'Повторите пароль',
      error: 'Пароли не совпадают',
      inputName: 'password-repeat',
      required: true,
      className: '',
    });

    const submitBtn = new Button({
      title: 'Сохранить',
      type: 'submit',
      className: 'btn default _low-margin',
      href: '#',
      tagName: '',
    });

    const avatar = new DefaultAvatar({});

    super('div', {
      oldPassword,
      newPassword,
      newPasswordRepeat,
      submitBtn,
      avatar,
      ...props,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default ChangePassword;
