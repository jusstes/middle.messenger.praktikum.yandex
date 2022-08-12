import template from './template';
import Component from '../../utils/Component';
import Button from '../../components/button';
import Message from '../../components/message';
import UserField from '../../components/userField';
import { handleSubmit } from '../../utils/events';

class Chat extends Component {
  constructor(props: Record<string, any> = {}) {
    const message1 = new Message({
      text: 'Привет! Смотри, тут всплыл интересный кусок ',
      time: '14:48',
      isMedia: false,
      isRead: false,
      isYourMessage: false,
    });

    const message2 = new Message({
      text: 'НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. ',
      time: '14:48',
      isMedia: false,
      isRead: false,
      isYourMessage: false,
    });

    const message3 = new Message({
      text: 'Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
      time: '14:48',
      isMedia: false,
      isRead: false,
      isYourMessage: true,
    });

    const message4 = new Message({
      isMedia: true,
      time: '14:48',
      isYourMessage: false,
      src: '../../static/images/archi.jpg',
      isRead: false,
    });

    const message5 = new Message({
      isMedia: true,
      time: '14:48',
      isYourMessage: true,
      src: '../../static/images/sailing.jpeg',
      isRead: true,
    });

    const attachBtn = new Button({
      type: 'button',
      className: 'chat__attach',
      href: '#',
    });

    const submitBtn = new Button({
      type: 'submit',
      className: 'chat__submit',
      tagName: 'link',
      href: '#',
      events: {
        click: handleSubmit,
      },
    });

    const profileField = new UserField({
      userName: 'Alex',
      src: '../../static/images/photo.jpg',
    });

    const chatFields1 = new UserField({
      userName: 'Alex',
      src: '../../static/images/photo.jpg',
      time: 'Пн',
      message: 'Вы: стикер',
      unreadMessageCount: '3',
    });

    const chatFields2 = new UserField({
      userName: 'Dmitry',
      src: '../../static/images/photo.jpg',
      time: '12 апр 2022',
      message: 'Изображение',
    });

    const chatFields3 = new UserField({
      userName: 'Matthew',
      src: '../../static/images/photo.jpg',
      time: 'Вчера',
      message: 'И Human Interface Guidelines и Material Design рекомендуют...',
      unreadMessageCount: '3',
    });

    const chatFields4 = new UserField({
      userName: 'Noel',
      src: '../../static/images/photo.jpg',
      time: 'Вт',
      message:
        'И Human Interface Guidelines и Material Design рекомендуют И Human Interface Guidelines и Material Design рекомендуют...',
      unreadMessageCount: '33',
    });

    super('div', {
      profileField,
      message1,
      message2,
      message3,
      message4,
      message5,
      chatFields1,
      chatFields2,
      chatFields3,
      chatFields4,
      submitBtn,
      attachBtn,
      ...props,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Chat;
