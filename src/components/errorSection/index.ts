import template from './template';
import Component from '../../utils/Component';

interface IErrorSection {
  errorCode: string;
  errorMessage: string;
  errorBackLink: string;
  errorBackText: string;
}

class ErrorSection extends Component {
  constructor(props: IErrorSection) {
    super('div', props);
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default ErrorSection;
