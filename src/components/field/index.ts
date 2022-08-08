import template from './template';
import Component from '../../utils/Component';

interface IField {
  id: string;
  label: string;
  type: string;
  error: string;
  inputName: string;
  required: boolean;
  className: string;
  events?: { click: (e: Event) => void };
}

class Field extends Component {
  constructor(props: IField) {
    super('div', props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Field;
