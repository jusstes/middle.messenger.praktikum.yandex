import { nanoid } from 'nanoid';
import EventBus from './EventBus';

abstract class Component {
  private EVENTS: Record<string, string> = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private element: HTMLElement | undefined;
  private readonly tagName: string;

  protected eventBus: EventBus;
  protected props: Record<string, any>;
  protected children: Record<string, Component>;
  protected id: string;

  protected constructor(
    tagName: string = 'div',
    propsAndChildren: Record<string, any> = {},
  ) {
    this.tagName = tagName;
    this.id = nanoid();

    const { children, props } = this.getChildren(propsAndChildren);
    this.children = children;
    this.props = this.makePropsProxy({ ...props, id: this.id });

    this.eventBus = new EventBus();
    this.registerEvent();
    this.eventBus.emit(this.EVENTS.INIT);
  }

  private registerEvent(): void {
    this.eventBus.on(this.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(this.EVENTS.FLOW_CDM, this.mountComponent.bind(this));
    this.eventBus.on(this.EVENTS.FLOW_CDU, this.updateComponent.bind(this));
    this.eventBus.on(this.EVENTS.FLOW_RENDER, this.renderComponent.bind(this));
  }

  private init(): void {
    this.createResources();
    this.eventBus.emit(this.EVENTS.FLOW_RENDER);
  }

  private createResources(): void {
    this.element = this.createDocumentElement(this.tagName);
  }

  private createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  private mountComponent(): void {
    Object.values(this.children).forEach((child) => {
      child.dispatchMountComponent();
    });
  }

  public dispatchMountComponent(): void {
    this.eventBus.emit(this.EVENTS.FLOW_CDM);
  }

  private updateComponent(
    oldProps: Record<string, any>,
    newProps: Record<string, any>,
  ): void {
    const isComponentShouldUpdate = oldProps !== newProps;

    if (isComponentShouldUpdate) {
      this.removeEvents();
      this.eventBus.emit(this.EVENTS.FLOW_RENDER);
    }
  }

  private renderComponent(): void {
    const fragment = this.render();
    const element = fragment.firstElementChild as HTMLElement;

    if (this.element) {
      this.element.replaceWith(element);
      this.element = element;
    }

    this.addEvents();
  }

  private addEvents(): void {
    const { events } = this.props;

    if (events) {
      Object.keys(events).forEach((eventName) => {
        if (this.element) {
          this.element.addEventListener(eventName, events[eventName]);
        }
      });
    }
  }

  private removeEvents(): void {
    const { events } = this.props;

    if (events) {
      Object.keys(events).forEach((eventName) => {
        if (this.element) {
          this.element.addEventListener(eventName, events[eventName]);
        }
      });
    }
  }

  public abstract render(): DocumentFragment;

  public setProps(newProps: Record<string, any>): void {
    if (!newProps) {
      return;
    }

    Object.assign(this.props, newProps);
  }

  public getElement(): HTMLElement {
    return <HTMLElement>this.element;
  }

  private makePropsProxy(props: Record<string, any>): Record<string, any> {
    const proxySetting = {
      get: (target: Record<string, any>, prop: string): unknown => {
        return target[prop];
      },

      set: (
        target: Record<string, any>,
        prop: string,
        value: unknown,
      ): boolean => {
        const oldProps = target[prop];
        target[prop] = value;

        this.eventBus.emit(this.EVENTS.FLOW_CDU, oldProps, target[prop]);
        return true;
      },

      deleteProperty: (target: Record<string, any>, prop: string): boolean => {
        const oldProps = target[prop];
        delete target[prop];

        this.eventBus.emit(this.EVENTS.FLOW_CDU, oldProps, target[prop]);
        return true;
      },
    };

    return new Proxy(props, proxySetting);
  }

  private getChildren(propsAndChildren: Record<string, any>) {
    const children: Record<string, Component> | any = {};
    const props: Record<string, any> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      value instanceof Component
        ? (children[key] = value)
        : (props[key] = value);
    });

    return { children, props };
  }

  protected setTemplate(template: Function, props: Record<string, any>) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
    });

    const fragment = this.createDocumentElement(
      'template',
    ) as HTMLTemplateElement;
    fragment.innerHTML = template(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
      (stub as HTMLElement).replaceWith(child.getElement());
    });

    return fragment.content;
  }
}

export default Component;
