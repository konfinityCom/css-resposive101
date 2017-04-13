var navButton;
var navContainer;
var navClicked = false;
var navFlavor;
var subNavContainer;
var carrot ;

document.addEventListener('DOMContentLoaded', function(){
    
    navButton = document.getElementById('nav-button');
    navContainer = document.getElementById('nav-container');
    navFlavor = document.getElementById('nav-flavor');
    subNavContainer = document.getElementById('subnav-container');
    carrot = document.getElementById('carrot');
    navFlavorMenu = document.getElementById('')
    navButton.addEventListener('click', navButtonClicked);
    navFlavor.addEventListener('click', navFlavorClicked);
});

function navButtonClicked(){
    setNavigationButtonText();
    navContainer.classList.toggle('show');
}

function navFlavorClicked(){
    subNavContainer.classList.toggle('show');
    subNavContainer.classList.contains('show') ? carrot.innerHTML = ' &#9650;':carrot.innerHTML = ' &#9660;'    
}

function setNavigationButtonText(){
    if(!navClicked){
        navClicked=true;
        navButton.innerText = 'Hide Navigation';
    } 
    else{ 
        navClicked= false;
        navButton.innerText = 'Show Navigation';
        }
}