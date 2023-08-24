let boxA = document.getElementById("box1");
let boxAmod = document.getElementById("changeBox1");

boxAmod.addEventListener("click", function () {
    boxA.style.backgroundColor = "black"
    boxA.style.border = "5px solid blue"
});



let boxB = document.getElementById("box2");
let boxBmod = document.getElementById("changeBox2");
    
    boxBmod.addEventListener("click", function () {
    boxB.style.backgroundColor = "yellow"
    boxB.style.border = "5px solid blue"
});

let boxC = document.getElementById("box3");
let boxCmod = document.getElementById("changeBox3")

boxCmod.addEventListener("click", function () {
    boxC.style.background ="green"
    boxC.style.border =" 5px dashed black"
})

let changeAll = document.getElementById("changeAllBox");

changeAll.addEventListener("click", function () {
    
    boxA.style.backgroundColor = "purple"
    boxA.style.border = "5px dotted blue"


    boxB.style.backgroundColor = "pink"
    boxB.style.border = "5px solid black"

    boxC.style.background ="#B65FCF"
    boxC.style.border =" 5px dotted orange"

})

let resetColor = document.getElementById("resetColors");

resetColor.addEventListener("click", function () {
    boxA.style.backgroundColor = "red"
    boxA.style.border = "5px solid black"

    boxB.style.backgroundColor = "white"
    boxB.style.border = "5px dashed blue"

    boxC.style.backgroundColor = "blue"
    boxC.style.border = "5px solid red"
    
})


let hideAllButton = document.getElementById("hideAllButton");

hideAllButton.addEventListener("click", seeTheMagic);

function seeTheMagic() {
    boxC.style.visibility = "hidden"
    boxB.style.visibility = "hidden"
    boxA.style.visibility ="hidden"
}

let showAll = document.getElementById("showAll");
showAll.addEventListener("click", showMeTheMoney);

function showMeTheMoney() {
    boxC.style.visibility = "visible"
    boxB.style.visibility = "visible"
    boxA.style.visibility ="visible"
    
}

let hidebox1 = document.getElementById("hideBox1");
hidebox1.addEventListener("click", function () {
    boxA.style.visibility ="hidden"
});


let hidebox2 = document.getElementById("hideBox2");
hidebox2.addEventListener("click", function () {
    boxB.style.visibility ="hidden"
});

let hidebox3 = document.getElementById("hideBox3");
hidebox3.addEventListener("click", function () {
    boxC.style.visibility ="hidden"
});

















