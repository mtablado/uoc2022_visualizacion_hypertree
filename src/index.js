import d3hyt from './d3-hypertree.js';
import './d3-hypertree-light.css';
import satellites from './assets/satellites.json';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!'); 
}

function createTree() {
    var hyt = d3hyt();
    var ht = new hyt.Hypertree(
        { parent: document.body },
        { 
            langInitBFS: (ht, n)=> {                
                n.precalc.label = n.data.name                        
            },
            dataloader: ok => ok(satellites),
            interaction: {
                λbounds: [ .4, .8 ],
            }                 
        }
    );
}

createTree();
