function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // this method involves in setting attributes multiple times which is not very efficient. so let use create a for in loop to address this.
    

    for(const prop in reactElement.props)
    {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit Google!'
};

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer); 
