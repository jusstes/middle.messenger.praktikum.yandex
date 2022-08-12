import template from './template';
import Component from '../../utils/Component';

interface IInput {
  id: string;
  type: string;
  inputName: string;
  required: boolean;
  className?: string;
  events?: { focus: (e: Event) => void; blur: (e: Event) => void };
}

class Input extends Component {
  constructor(props: IInput) {
    super('div', props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Input;
