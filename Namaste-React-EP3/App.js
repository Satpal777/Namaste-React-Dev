import React from 'react'
import ReactDOM from 'react-dom/client';

const Head2 = <h1>Hello World 🍧</h1>

const Head1 = () => (
    <h1>Hello World 😎</h1>
);

const Container = () => (
    <>
        <Head1 />
        <Head1></Head1>
        {Head1()}
        {Head2}
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);