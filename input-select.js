(function() {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
    </style>
    <div>
      <ul id="selected-items">

      </ul>
      <input type="text">
    </div>
  `;

  class InputSelect extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.selectedItems = [];
    }

    get input() {
      return this.shadowRoot.querySelector('input');
    }

    static get observedAttributes() {
      return ['selected-items'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if(name === 'selected-items') {
        let html = '';

        this.selectedItems = items;

      }
    }

    initShadowDom() {
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.innerHTML = this.template;
    }

  }

  window.customElements.define('input-select', InputSelect);

})();
