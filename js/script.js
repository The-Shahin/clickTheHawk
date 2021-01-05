var ad=prompt("Adinizi yazin")
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