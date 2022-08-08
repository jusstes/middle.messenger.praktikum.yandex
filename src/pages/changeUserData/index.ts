import template from './template';
import Component from '../../utils/Component';
import Field from '../../components/field';
import Button from '../../components/button';

class ChangeUserData extends Component {
  constructor(props: Record<string, any> = {}) {
    super('div', {
      ...props,
    });
  }

  render() {
    return this.setTemplate(template, this.props);
  }
}

export default ChangeUserData;
