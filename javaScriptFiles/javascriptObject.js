const users=[
    { 
        'name':'Preeti',
        'Age':21,
        'Birth-Year':1999
    },
    { 
        'name':'Pooja',
        'Age':21,
        'Birth-Year':1997
    },
]
const sum=0;
Object.keys(users).forEach(function(key){
    console.log(key,users[key]);
});
const person1=[
    {
    'name':'Pathik',
    'Age':25,

    },
    {
        'name':'Pathik',
        'Age':27,
    
    }

] 
Object.keys(person1).forEach(function(item){
    console.log(item);
    console.log(person1[item]);
});
document.body.innerHTML="<h1> Hello This Tag is written through JavaScripts</h1>";
