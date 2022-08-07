import template from './template';
import Component from '../../utils/Component';

interface IButton {
  tagName: string;
  href: string;
  className: string;
  title: string;
  type: string;
  events?: { click: (e: Event) => void };
}

class Button extends Component {
  constructor(props: IButton) {
    super('div', props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Button;
