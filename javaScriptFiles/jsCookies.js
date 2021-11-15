function setCookies(){
    document.cookie="username=unnati;expires= Saturday 20Sept 2021 1:00:00 PM UTC";
}
function getCookies(){
    if(document.cookie.length!=0){
        var array=document.cookie.split("=");
        alert("name = "+array[0]+" value = "+array[1]);
    }
    else{
        alert('No Cookie available');
    }
} 
