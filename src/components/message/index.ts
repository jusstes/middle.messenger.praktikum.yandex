import template from './template';
import Component from '../../utils/Component';

interface IMessage {
  text: string;
  time: string;
  isYourMessage: boolean;
  isRead: boolean;
  isMedia: boolean;
}

class Message extends Component {
  constructor(props: IMessage) {
    super('div', props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Message;
