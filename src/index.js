import _ from 'lodash';
const d3 = await import("d3");

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!'); 
}

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

function d3f() {
    const square = d3.selectAll("div");
    square.style("color", "orange");
}

document.body.appendChild(component());
d3f();