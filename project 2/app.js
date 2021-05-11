// create an array of objects
let data = [ {
    name:'Niksung',
    age: "20"
},
{
    name:"Nokyu",
    age: "21"
},
{
    name:"Maong",
    age: "19"
},
{
    name:"Denis",
    age: "22"
},
{
    name:"Eying",
    age: "21"
},
{
    name:"Marji",
    age: "19"
}
];

//select info id
const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name +' '+'is '+ item.age +' years old' + '</div>';
});

info.innerHTML = details.join('\n');
