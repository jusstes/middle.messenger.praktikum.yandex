import template from './template';
import Component from '../../utils/Component';
import Field from '../../components/field';
import Button from '../../components/button';
import DefaultAvatar from '../../components/defaultAvatar';
import { handleSubmit } from '../../utils/events';

class ChangeUserData extends Component {
  constructor(props: Record<string, any> = {}) {
    const avatar = new DefaultAvatar({});

    const submitBtn = new Button({
      title: 'Сохранить',
      type: 'submit',
      className: 'btn default _low-margin',
      href: '#',
      tagName: '',
      events: {
        click: handleSubmit,
      },
    });

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

    super('div', {
      email,
      login,
      firstname,
      lastname,
      tel,
      submitBtn,
      avatar,
      ...props,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default ChangeUserData;
