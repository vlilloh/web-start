import { customElement } from 'lit-element';
import { html } from 'lit-html';
import { View } from '@vlilloh/web-view';

@customElement('view-404')
export class View404 extends View {

  title = '404';
  description = '404';

  protected render() {
    return html`
      <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
            <h1 class="mdc-typography--headline5">404</h1>
            <p>Oops! You hit a 404. The page you're looking for doesn't seem to exist. Head back <a href="/">home</a> and try again?</p>
          </div>
        </div>
      </div>
    `
  }

}