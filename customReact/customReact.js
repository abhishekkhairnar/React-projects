function customRender(reactElement,mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    // we will not use this because what if there are numerous attributes we cannot assign them individually
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    for(prop in reactElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const dummyElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)