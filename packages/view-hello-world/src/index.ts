import { customElement } from 'lit-element';
import { html } from 'lit-html';
import { View } from '@vlilloh/web-view';
import { helloWorld } from '@vlilloh/hello-world';

@customElement('view-hello-world')
export class ViewHelloWorld extends View {

  title = 'Hello World';
  description = 'Hello World';

  protected render() {
    return html`
      <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
            <h1 class="mdc-typography--headline5">Hello World</h1>
            <p>${helloWorld()}</p>
          </div>
        </div>
      </div>
    `;
  }

}