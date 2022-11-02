document.getElementById("lisää").addEventListener("click", lisääTeksti);

function lisääTeksti(){
    //luodaan muuttuja tekstikenttään syötetystä arvosta
    var arvo = document.getElementById("teksti").value;

    if (tarkistaSisältö(arvo) != true) {
        return;
    }

    var tehtävät = document.getElementById("todo");

    var uusiTehtävä = document.createElement("li");
    tehtävät.appendChild(uusiTehtävä);
    

    var checkBox = document.createElement("input");
    checkBox.className = "checkbox";
    checkBox.type = "checkbox";
    checkBox.addEventListener("click", merkkaa);
    uusiTehtävä.appendChild(checkBox);

    var sisältö = document.createTextNode(arvo);
    uusiTehtävä.appendChild(sisältö);

    var poista = document.createElement("input");
    poista.type = "image";
    poista.src = "images/xnappi5.png";
    poista.style.height = "40px";
    poista.className="poistaNappi"; 
    poista.addEventListener("click", poistaTehtävä);
    uusiTehtävä.appendChild(poista);

    var poistaKaikki = document.getElementsByClassName("poistaKaikki")
    poistaKaikki.addEventListener('click', function(){
        tehtävät = [];
        getList(tehtävät);
    })
}

function tarkistaSisältö(x){
    var virheArvo = document.getElementById("teksti");

    if (x == '') {
        alert("Et antanut mitään arvoa!");
        virheArvo.style.border = "2px solid red";
        return false;
    }

    virheArvo.style.border = "1px solid grey";
    return true;
}

function merkkaa(){

    let uusiTehtävä = this.parentElement;
    let tila = this.checked;
    
    console.log(tila);
    if (tila == false) {
        uusiTehtävä.style.color = "black";
        uusiTehtävä.style.textDecoration = "none";
        
        return;
    }

    uusiTehtävä.style.color = "grey";
    uusiTehtävä.style.textDecoration = "line-through";
}

function poistaTehtävä(){
    let poistettava = this.parentElement;
    poistettava.remove();
}

