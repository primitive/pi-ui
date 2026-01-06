const template = document.createElement("template");

template.innerHTML = `
  <button type="button">
    <slot></slot>
  </button>
`;

export class PiButton extends HTMLElement {
  private button!: HTMLButtonElement;

  static get observedAttributes() {
    return ["disabled"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    if (!this.button) {
      this.appendChild(template.content.cloneNode(true));
      this.button = this.querySelector("button")!;
    }

    this.syncDisabled();
  }

  attributeChangedCallback() {
    this.syncDisabled();
  }

  private syncDisabled() {
    const isDisabled = this.hasAttribute("disabled");
    this.button.toggleAttribute("disabled", isDisabled);
    this.setAttribute("aria-disabled", String(isDisabled));
  }
}

customElements.define("pi-button", PiButton);
