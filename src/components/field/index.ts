import template from './template';
import Component from '../../utils/Component';
import Input from '../input';
import { blur, focus } from '../../utils/events';

interface IField {
  id: string;
  label: string;
  type: string;
  error: string;
  inputName: string;
  required: boolean;
  className?: string;
  events?: { focus: (e: Event) => void; blur: (e: Event) => void };
}

class Field extends Component {
  constructor(props: IField) {
    const inputElement = new Input({
      id: props.id,
      type: props.type,
      inputName: props.inputName,
      required: props.required,
      className: props.className,
      events: {
        focus: focus,
        blur: blur,
      },
    });

    super('div', { inputElement, ...props });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default Field;
