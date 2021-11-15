
// function oddEve(){
//     num=prompt("Enter the number");
    
//     if(num%2==0){
//         window.alert('The'+num+' number is even');
//     }
//     else{
//         window.alert('The'+ num+'number is odd');
//     }
// };

// Javascript Navigator Object
document.writeln(' <br/> navigator.getAppName:'+navigator.appName);
document.writeln(' <br/> navigator.checkCookieEnabled:'+navigator.cookieEnabled);
document.writeln(' <br/> navigator.javaEnabled:'+navigator.javaEnabled()); 
//Javascript screen Object
document.writeln("<br/><br/><h5>The Javascript Screen Object!!</h5>");
document.writeln(' <br/> screen.getWidth of screen:'+screen.width);
document.writeln(' <br/> screen.get height of screen:'+screen.height);
document.writeln(' <br/> screen.get colorDepth  of screen:'+screen.colorDepth);

//Document Object Model 
function Cube(){
    let number=document.getElementById('number').value;
    alert(number*number*number);

} 
function getCount(){
    var allGender=document.getElementsByName('gender');
    alert("Total Genders:"+allGender.length);
}
function getTag(){
    var tag=document.getElementsByTagName('p');
    alert('total length of all p tag:'+tag.length);
} 


// Innertext Property 
var msg;
function passValidate(){
    if(document.InformationForm.userpass.value.length>5){
        msg="Strong";
    }
    else{
        msg="Poor";
    } 
    document.getElementById('mypassword').innerText=msg;
} 

