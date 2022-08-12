import template from './template';
import Component from '../../utils/Component';
import Field from '../../components/field';
import Button from '../../components/button';
import DefaultAvatar from '../../components/defaultAvatar';
import { handleSubmit } from '../../utils/events';

class ChangePassword extends Component {
  constructor(props: Record<string, any> = {}) {
    const oldPassword = new Field({
      id: 'oldPassword',
      type: 'password',
      label: 'Старый пароль',
      error: 'Введите пароль',
      inputName: 'oldPassword',
      required: true,
    });

    const newPassword = new Field({
      id: 'newPassword',
      type: 'password',
      label: 'Новый пароль',
      error: 'Введите пароль',
      inputName: 'newPassword',
      required: true,
    });

    const newPasswordRepeat = new Field({
      id: 'password-repeat',
      type: 'password',
      label: 'Повторите пароль',
      error: 'Пароли не совпадают',
      inputName: 'password-repeat',
      required: true,
    });

    const submitBtn = new Button({
      title: 'Сохранить',
      type: 'submit',
      className: 'btn default _low-margin',
      href: '#',
      events: {
        click: handleSubmit,
      },
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
