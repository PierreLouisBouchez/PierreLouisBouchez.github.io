var tab=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
var tabbool;
var time=120;
var end=false;

document.addEventListener("DOMContentLoaded",main);


function change(){
    document.getElementById("game").hidden=false;
    document.getElementById("start").hidden=true;
    tabbool=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    tab.sort(
        function() {
        return .5 - Math.random();
    });
    for (let i = 0; i < tab.length; i++) {
        document.getElementById(i).src="img/mem_back.jpg";
        document.getElementById(i).addEventListener("click",click(i));
    }
    setTimeout(chrono,1000);
}
function chrono() {
    document.getElementById("chrono").innerHTML=time--;
    if(time>=0){
        setTimeout(chrono,1000);
    }else{
        time=120;
        end=true;
        console.log(end);
    verif();
    }
    
    

    
}
function main(){
    document.getElementById("game").hidden=true;
    document.getElementById("start").addEventListener("click",change);
}

function endgame() {
    if(end){
        end=false;
        return 1;
    }
    for (let i = 0; i < tabbool.length; i++) {
        if(tabbool[i]==0){
            return 0;
        }
    }
    return 1;
}
function verif() {
    if(tab[carte1]!=tab[carte2]){
        tabbool[carte1]=0;
        tabbool[carte2]=0;
        document.getElementById(carte1).src="img/mem_back.jpg";
        document.getElementById(carte2).src="img/mem_back.jpg";
    }else{
        if(endgame()){
            document.getElementById("game").hidden=true;
            document.getElementById("start").hidden=false;
        }
        if(carte1!=-1 && carte2!=-2){
            document.getElementById(carte1).style="border-color:green;";
            document.getElementById(carte2).style="border-color:green;";
        }
        
    }
    carte1=-1;
    carte2=-2;
    
}

var carte1=-1;
var carte2=-2;

function click(img) {
    return function(){
    console.log(img);
    if(tabbool[img]==0 && carte1==-1){
        tabbool[img]=1;
        carte1=img;
        document.getElementById(img).src="img/mem"+tab[img]+".jpg";

    }else if(tabbool[img]==0 && carte2==-2){
        tabbool[img]=1;
        carte2=img;
        document.getElementById(img).src="img/mem"+tab[img]+".jpg";
        if(carte1!=-1 && carte2!=-2){
        setTimeout(verif,500);
        }
    }
}
}
document.addEventListener("click",click);
