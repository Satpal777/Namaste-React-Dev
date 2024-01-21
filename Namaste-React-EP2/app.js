import React from 'react'
import ReactDOM from 'react-dom/client';


// React.createElement(type, props, ...children)
const heading = React.createElement('div', { id: 'title-container', className: 'blue' }, [
    React.createElement('h1', { key: 'h1', className: 'saffron' }, "Hello World from h1"),
    React.createElement('h2', { key: 'h2', className: 'blue' }, "Hello World from h2"),
    React.createElement('h3', { key: 'h3', className: 'green' }, "Hello World from h3")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);