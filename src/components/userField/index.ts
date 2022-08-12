import template from './template';
import Component from '../../utils/Component';

interface IUserField {
  userName: string;
  src: string;
  className?: string;
  time?: string;
  message?: string;
  unreadMessageCount?: string;
}

class UserField extends Component {
  constructor(props: IUserField) {
    super('div', props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default UserField;
