var navButton;
var navContainer;
var navClicked = false;

document.addEventListener('DOMContentLoaded', function(){
    
    navButton = document.getElementById('nav-button');
    navContainer = document.getElementById('nav-container');
    navButton.addEventListener('click', navButtonClicked);
});

function navButtonClicked(){
    setNavigationButtonText();
    navContainer.classList.toggle('show');
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