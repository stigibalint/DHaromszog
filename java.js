function szerkesztheto() {
    egyikbefogo = document.getElementById("szamA").value;
    masikbefogo = document.getElementById("szamB").value;
    atfogo = document.getElementById("atfogo").value;
    if(Math.pow(egyikbefogo,2) + Math.pow(masikbefogo,2) == Math.pow(atfogo,2) ){
        alert("szerkeszthető");
    }
    else{
        alert("nem szerkeszthető");
    }
}
function veletlen(){
    document.getElementById("szamA").value = Math.floor(Math.random()*91+10)
    document.getElementById("szamB").value= Math.floor(Math.random()*91+10)
    document.getElementById("atfogo").value= Math.floor(Math.random()*91+10)
}

function atfogo(){
    egyikbefogo = document.getElementById("szamA").value;
    masikbefogo = document.getElementById("szamB").value;
    document.getElementById("atfogo").value = (Math.sqrt(Math.pow(egyikbefogo,2) + Math.pow(masikbefogo,2))).toFixed(3);
}
