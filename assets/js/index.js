function start(){
    document.querySelector('.wrapper img').classList.toggle('move')
   
    if(a===true){
        document.querySelector('.start').style.display="none";
        a=false;

    }
    // else{
    //     document.querySelector('.start').style.display="block";
    //     a=true;

    // }
    setTimeout(function (){
        document.querySelector('.start').style.display="";
        a=true;

    },4000)
    
}
let a=true;
//  Time bound Event Using Java Script
