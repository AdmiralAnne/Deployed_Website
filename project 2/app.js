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
    age: "20"
},
{
    name:"Denis",
    age: "20"
},
{
    name:"Eying",
    age: "20"
},
{
    name:"Marji",
    age: "20"
}
];

//select info id
const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name +' '+'is '+ item.age +' years old' + '</div>';
});

