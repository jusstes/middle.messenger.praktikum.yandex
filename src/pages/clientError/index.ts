import template from './template';
import Component from '../../utils/Component';

class ClientError extends Component {
  constructor(props: Record<string, any> = {}) {
    super('div', { ...props });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default ClientError;
