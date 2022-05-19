const imgs = document.querySelectorAll('.cont-slides img');
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
const cercles = document.querySelectorAll('.cercle');

let index = 0;

//on click a droite la photo sera la suivante slide.
suivant.addEventListener('click', slideSuivante);

// la fonction sera :
function slideSuivante(){

    if(index < 4){
        //ici je supprime la class active et donc l'image va disparaitre.
        imgs[index].classList.remove('active');
        index++;
        imgs[index].classList.add('active');
    }
    else if (index === 4) {
        imgs[index].classList.remove('active');
        index = 0;
        imgs[index].classList.add('active');
    }

console.log("index = "+index);

    for(i = 0; i < cercles.length; i++){
        if(cercles[i].getAttribute('data-clic') -1 === index){
            //ici je lui demande de suivre le cercle class active.
            cercles[i].classList.add('active-cercle');
        } else {
            //sinon on enlève le cercle.
            cercles[i].classList.remove('active-cercle');
        }

    }
}


/*------------------------------------*/



//on click a droite la photo sera la suivante slide.
precedent.addEventListener('click', slidePrecedente);

// la fonction sera :
function slidePrecedente(){

    if(index > 0){
        //ici je supprime la class active et donc l'image va disparaitre.
        imgs[index].classList.remove('active');
        index--;
        imgs[index].classList.add('active');
    }
    else if (index === 0) {
        imgs[index].classList.remove('active');
        index = 4;
        imgs[index].classList.add('active');
    }

    console.log("index = "+index);

    for(i = 0; i < cercles.length; i++){
        if(cercles[i].getAttribute('data-clic') -1 === index){
            //ici je lui demande de suivre le cercle class active.
            cercles[i].classList.add('active-cercle');
        } else {
            //sinon on enlève le cercle.
            cercles[i].classList.remove('active-cercle');
        }

    }  
    
}

document.addEventListener('keydown', keyPressed)

function keyPressed(e) {
// ici je met le bouton clavier pratique pour changer l'image sans toucher au slider.
    if(e.keyCode === 37){
        slidePrecedente();
    }
    else if (e.keyCode === 39){
        slideSuivante();
    }
}

//ici je m'occupe des cercles sous le slider
cercles.forEach(cercle => {

    cercle.addEventListener('click', function(){

        for(i = 0; i < cercles.length; i++) {
            cercles[i].classList.remove('active-cercle');
        }
        this.classList.add('active-cercle');

        imgs[index].classList.remove('active');
        index = this.getAttribute('data-clic') -1;
        imgs[index].classList.add('active');
    })

})