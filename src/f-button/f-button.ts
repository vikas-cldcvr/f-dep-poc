import { LitElement, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import buttonStyle from "./f-button.scss";
import core from "f-core-poc";

@customElement("f-button")
export class FButton extends LitElement {
  static styles = [unsafeCSS(buttonStyle)];

  render() {
    return html` <button><slot></slot></button> ${core.getCurrentDateTime()} `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "f-button": FButton;
  }
}
