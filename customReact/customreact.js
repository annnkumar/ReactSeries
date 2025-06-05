function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
  
    // Set attributes (props)
    for (let prop in reactElement.props) {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  
    // Set inner text (children)
    domElement.textContent = reactElement.children;
  
    // Append to the container
    container.appendChild(domElement);
  }
  

const element = {
    type : 'a',
    props: {
       href : "https://google.com",
       target: '_blank'
    },
    children : 'Click me to visit google'
};

const mainContainer = document.querySelector('#root')

customRender(element , mainContainer);
