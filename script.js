let compteur = 0;

function Deplacer() {
    const clavier = document.getElementById('clavier');
    const affichage = document.querySelector('.affichage');
    const nouveauDiv = document.createElement('div');

    const texteAvecRetourALaLigne = clavier.value.replace(/\n/g, '<br>');

    nouveauDiv.innerHTML = texteAvecRetourALaLigne;
    nouveauDiv.classList.add('texte');
    
    if (compteur % 2 === 0) {
        nouveauDiv.classList.add('droite');
    } else {
        nouveauDiv.classList.add('gauche');
    }

    affichage.appendChild(nouveauDiv);
    clavier.value = '';
    compteur++;
}


function ModifierAspectClavier() {
    const clavier = document.getElementById('clavier');
    clavier.style.resize = 'vertical';
    clavier.style.overflow = 'auto';
    clavier.style.width = '50%';
    clavier.style.minWidth = '400px';
}

function Demarre() {
    ModifierAspectClavier();
}

window.addEventListener('load', Demarre);

const boutonAjouter = document.getElementById('ajouter');
boutonAjouter.addEventListener('click', Deplacer);
