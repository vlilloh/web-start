import { customElement, PropertyValues, query } from 'lit-element';
import { html } from 'lit-html';
import { App } from '@vlilloh/web-app';
import { TabBar } from '@vlilloh/web-tab-bar';
import { View } from '@vlilloh/web-view';
import '@vlilloh/web-icon';
import '@vlilloh/web-tab-bar';
import '@vlilloh/web-top-app-bar';
import { styles } from './styles.js';

@customElement('view-app')
export class ViewApp extends App {

  static get styles() {
    return [
      ...super.styles,
      styles,
    ];
  }

  @query('web-tab-bar')
  protected tabBar!: TabBar;

  @query('view-home')
  protected viewHome!: View;

  @query('view-404')
  protected view404!: View;

  @query('view-hello-world')
  protected viewHelloWorld!: View;

  protected async onNavigate(page: string) {
    switch(page) {
      case '':
        // @ts-ignore
        await import('../view-home');
        this.view = this.viewHome;
        break;
      case 'hello-world':
        // @ts-ignore
        await import('../view-hello-world');
        this.view = this.viewHelloWorld;
        break;
      default:
        page = '404';
        // @ts-ignore
        await import('../view-404');
        this.view = this.view404;
    }
    this.page = page;
  }

  protected render() {
    return html`
      <web-top-app-bar tab-bar elevation>
        <a slot="app-icon" href="/">
          <web-icon>school</web-icon>
        </a>
        <a slot="title" href="/">${this.appTitle}</a>
        <web-tab-bar slot="tab-bar">
          <web-tab minWidth label="Home" icon="home" href="/"></web-tab>
          <web-tab minWidth label="Hello World" icon="public" href="/hello-world"></web-tab>
        </web-tab-bar>
      </web-top-app-bar>
      <main class="mdc-typography mdc-top-app-bar--fixed-adjust" role="main">
        <view-404 class="page" ?active="${this.page === '404'}"></view-404>
        <view-home class="page" ?active="${this.page === ''}"></view-home>
        <view-hello-world class="page" ?active="${this.page === 'hello-world'}"></view-hello-world>
      </main>
      <footer>
        <p>Made with &hearts;</p>
      </footer>
    `;
  }

  protected updated(changedProps: PropertyValues) {
    super.updated(changedProps);
    if (changedProps.has(`page`)) {
      switch(this.page) {
        case '':
          this.tabBar.activeIndex = 0;
          break;
        case 'hello-world':
          this.tabBar.activeIndex = 1;
          break;
        default:
          this.tabBar.activeIndex = -1;
      }
    }
  }

}