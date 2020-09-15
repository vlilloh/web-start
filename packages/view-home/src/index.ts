import { customElement } from 'lit-element';
import { html } from 'lit-html';
import { View } from '@vlilloh/web-view';
import '@vlilloh/web-list';
import '@vlilloh/web-list/list-item.js';

@customElement('view-home')
export class ViewHome extends View {

  title = 'Home';
  description = 'Home';

  protected render() {
    return html`
      <div class="mdc-layout-grid">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
            <h1 class="mdc-typography--headline5">Home</h1>
            <web-list>
              <web-list-item tab-index href="hello-world">
                <web-icon slot="leading">public</web-icon>
                <span slot="text">Hello World</span>
              </web-list-item>
            </web-list>
          </div>
        </div>
      </div>
    `;
  }

}