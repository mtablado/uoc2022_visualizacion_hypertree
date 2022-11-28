import _ from 'lodash';
const d3 = await import("d3");
import d3hyt from './d3-hypertree.js'
import './d3-hypertree-light.css';


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
            dataloader: ok => ok({
                name:'Satelites Network',
                numLeafs: 3,
                children:[
                    {
                        name: '85 Medium Earth Orbit (MEO)',
                        numLeafs: 85,
                        children: [
                            { 
                                name: '67 Mixed',
                                children: [
                                    { name: '33 RU' },
                                    { name: '34 US'}
                                ]
                            },
                            { 
                                name: 'Civil',
                                children: [
                                    { 
                                        name: 'RU',
                                    }
                                ]
                            },
                            { 
                                name: 'Military',
                                children: [
                                    { 
                                        name: 'CH',
                                    }
                                ]
                            },
                            { 
                                name: 'Commercial',
                                children: [
                                    { 
                                        name: 'The Rest',
                                    }
                                ]
                            },                        ]
                    },
                    {
                        name: '654 Low Earth Orbit (LEO)',
                        numLeafs: 654,
                        children: [
                            { 
                                name: '67 Mixed',
                                children: [
                                    { name: '33 RU' },
                                    { name: '34 US'}
                                ]
                            },
                            { 
                                name: 'Civil',
                                children: [
                                    { 
                                        name: 'RU',
                                    }
                                ]
                            },
                            { 
                                name: 'Military',
                                children: [
                                    { 
                                        name: 'CH',
                                    }
                                ]
                            },
                            { 
                                name: '135 Commercial',
                                children: [
                                    { name: '37 The Rest' },
                                    { name: '94 US' },
                                    { name: '2 RU' },
                                    { name: '2 JP' },
                                ]
                            },
                            { 
                                name: '176 Government',
                                children: [
                                    { name: '73 The Rest' },
                                    { name: '21 US' },
                                    { name: '6 RU' },
                                    { name: '13 JP' },
                                    { name: '53 CN' },
                                    { name: '7 IN' },
                                    { name: '3 MN' },
                                ]
                            },                        
                            { 
                                name: '143 Military',
                                children: [
                                    { name: '19 The Rest' },
                                    { name: '60 US' },
                                    { name: '42 RU' },
                                    { name: '19 CN' },
                                    { name: '3 IN' },
                                ]
                            },
                            { 
                                name: '77 Civil',
                                children: [
                                    { name: '1 MN' },
                                    { name: '37 The Rest' },
                                    { name: '12 US' },
                                    { name: '5 RU' },
                                    { name: '14 JP' },                                    
                                    { name: '5 CN' },
                                    { name: '3 IN' },
                                ]
                            },
                            { 
                                name: '123 Mixed',
                                children: [
                                    { name: '2 MN' },
                                    { name: '20 The Rest' },
                                    { name: '85 US' },
                                    { name: '5 CN' },
                                    { name: '1 IN' },
                                ]
                            },
                        ]                        
                    },
                    {
                        name: '37 Elliptical Orbit',
                        numLeafs: 37,
                        children: [
                            { 
                                name: '3 Mixed',
                                children: [
                                    { name: '3 MN' },
                                ]
                            },
                            { 
                                name: '2 Civil',
                                children: [
                                    { name: '1 The Rest' },
                                    { name: '1 JP' },
                                ]
                            },
                            { 
                                name: '14 Military',
                                children: [
                                    { name: '2 The Rest' },
                                    { name: '7 US' },
                                    { name: '5 RU' },
                                ]
                            },
                            { 
                                name: '15 Government',
                                children: [
                                    { name: '7 The Rest' },
                                    { name: '4 US' },
                                    { name: '3 MN' },
                                    { name: '1 JP' },
                                ]
                            },
                            { 
                                name: '3 Commercial',
                                children: [
                                    { name: '3 US' },
                                ]
                            },                        
                        ]                        
                    },                    
                    {
                        name: '458 Geosynchronous Orbit (GEO)',
                        numLeafs: 458,
                        children: [
                            { 
                                name: '26 Mixed',
                                children: [
                                    { name: '2 US' },
                                    { name: '2 CN' },
                                    { name: '4 MN' },
                                    { name: '18 The Rest' },
                                ]
                            },
                            { 
                                name: '1 Civil',
                                children: [
                                    { name: '1 US' },
                                ]
                            },
                            { 
                                name: '87 Military',
                                children: [
                                    { name: '15 The Rest' },
                                    { name: '54 US' },
                                    { name: '4 RU' },
                                    { name: '13 MN' },
                                    { name: '1 IN' },
                                ]
                            },
                            { 
                                name: '58 Government',
                                children: [
                                    { name: '4 RU' },
                                    { name: '11 US' },
                                    { name: '10 CN' },
                                    { name: '8 The Rest' },
                                    { name: '14 IN' },
                                    { name: '5 MN' },
                                    { name: '6 JP' },
                                ]
                            },
                            { 
                                name: '286 Commercial',
                                children: [
                                    { name: '107 US' },
                                    { name: '15 RU' },
                                    { name: '9 CN' },
                                    { name: '106 The Rest' },
                                    { name: '34 MN' },
                                    { name: '15 JP' },
                                ]
                            },                        
                        ]                        
                    },                    
                ]
            }),
            interaction: {
                λbounds: [ .4, .8 ],
            }                 
        }
    );
}

document.body.appendChild(component());
d3f();
createTree();
