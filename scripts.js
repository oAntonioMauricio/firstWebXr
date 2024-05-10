console.log("Hello");

let arButton = document.getElementById("arbutton");
let mainContainer = document.getElementById("mainContainer");

//
let arLoaded = false;

arButton.addEventListener("click", e => {
    console.log("clicked");

    let script = document.createElement("script");
    script.type = "module";
    script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js";

    script.onload = function () {
        arLoaded = true;
        createModelViewer();
    }

    script.onerror = function () {
        console.error("Failed to load Google Model Viewer CDN.");
        alert("Não é possível carregar a RA. Tente mais tarde.")
    };

    document.head.appendChild(script);
})

function createModelViewer() {
    let newAr = document.createElement("model-viewer");
    newAr.setAttribute("src", "assets/models/Tree.glb");
    newAr.setAttribute("ar", "");
    newAr.setAttribute("camera-controls", "");
    newAr.setAttribute("touch-action", "pan-y");
    mainContainer.append(newAr);

    arButton.classList.add("display-none");

    checkIfUserCanRunAr(newAr);
}

function checkIfUserCanRunAr(ar) {
    console.log("Can use AR? " + ar.canActivateAR);
    if (!ar.canActivateAR) {
        alert("Infelizmente o seu dispositivo não permite a visualização do equipamento em Realidade Aumentada");
    }
}

