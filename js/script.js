var ad=prompt("Adinizi yazin")
if(ad.length>10 || ad.length==0){
    ad="Qonaq"

}
switch(ad){
    case "samir":
        ad="Nidavoynu";
        break;
    case "nurusbala":
        ad="Balam";
        break;
    
    
}
let bal=0
document.getElementById("greet").innerHTML="Salam "+ad+"!";
function vur(){
    bal++;
    document.getElementById("point").innerHTML=bal;
    if(bal>10){
        bal++
        document.getElementById("point").innerHTML=bal;

    }
}