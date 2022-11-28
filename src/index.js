import _ from 'lodash';
const d3 = await import("d3");
import d3hyt from './d3-hypertree.js';
import './d3-hypertree-light.css';
import satellites from './assets/satellites.json';


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

function createTree() {
    var hyt = d3hyt();
    var ht = new hyt.Hypertree(
        { parent: document.body },
        { 
            langInitBFS: (ht, n)=> {                
                n.precalc.label = n.data.name                        
            },
            //dataloader: hyt.loaders.fromFile('data/LDA128-ward.d3.json'),
            //dataloader: ok=> ok(d3.hierarchy(...)),
            //dataloader: ok=> ok(d3.stratify()...(table)),        
            dataloader: ok => ok(satellites),
            interaction: {
                λbounds: [ .4, .8 ],
            }                 
        }
    );
}

document.body.appendChild(component());
console.log(satellites);
d3f();
createTree();
