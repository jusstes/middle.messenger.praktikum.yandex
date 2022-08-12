import Component from './Component';

function render(query: string, component: Component) {
  const root = document.querySelector(query) as HTMLElement;
  root.appendChild(component.getElement());

  component.dispatchMountComponent();
}

export default render;
