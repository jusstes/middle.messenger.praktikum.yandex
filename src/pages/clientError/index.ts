import template from './template';
import Component from '../../utils/Component';
import ErrorSection from '../../components/errorSection';

class ServerError extends Component {
  constructor(props: Record<string, any> = {}) {
    const errorSection = new ErrorSection({
      errorCode: '404',
      errorMessage: 'Не туда попали',
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
