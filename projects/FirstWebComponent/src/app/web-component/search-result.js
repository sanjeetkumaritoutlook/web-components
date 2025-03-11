/* https://academind.com/tutorials/web-components-introduction/*/
/*vanilla javascript ES6-ECMAScript 2015*/
/*https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements */

const template = document.createElement('template'); // API provided by the browser 
template.innerHTML = `
  <style>
    div {
      margin-top: 20px;
      color: green;
    }
  </style>
  <div>
    <p>The Google search result of your name is <a target="_blank" rel="noopener">here</a></p>
  </div>
`;

class SearchResult extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });  //attach the shadow DOM to an element-set the encapsulation mode

    this.shadowRoot.appendChild(template.content.cloneNode(true)); //deep clones all the content of the template

    this.shadowRoot.querySelector('a').href = '';  //initialize 
  }

  static get observedAttributes() {
    return ['name-attribute'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'name-attribute') {
      this.shadowRoot.querySelector(
        'a'
      ).href = `https://www.google.com/search?q=${newValue}`;
    }
  }
}

window.customElements.define('search-result', SearchResult);  //register the custom component with browser