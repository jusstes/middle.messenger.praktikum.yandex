import template from './template';
import Component from '../../utils/Component';
import ErrorSection from '../../components/errorSection';

class ServerError extends Component {
  constructor(props: Record<string, any> = {}) {
    const errorSection = new ErrorSection({
      errorCode: '500',
      errorMessage: 'Уже фиксим',
      errorBackLink: '#',
      errorBackText: 'Назад к чатам',
    });
    super('div', { errorSection, ...props });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default ServerError;
