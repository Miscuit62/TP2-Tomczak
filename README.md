# Projet Messagerie

Ce projet de messagerie simple permet à un utilisateur d'ajouter des messages dans une interface dynamique. 
Les messages peuvent être ajoutés et sont affichés dans des boîtes de texte alignées à droite ou à gauche en fonction de leur ordre d'ajout. 
Le champ de saisie est redimensionnable et permet une interaction fluide.

## Fonctionnalités
- Ajout de messages via un champ de saisie (textarea).
- Messages alignés à gauche ou à droite selon l'ordre d'ajout.
- Interface dynamique qui affiche les messages ajoutés.
- Le champ de saisie peut être redimensionné verticalement.
- Code JavaScript pour la gestion des événements (ajouter des messages, modifier l'aspect du champ de saisie).

## Technologies utilisées
- **HTML** : Structure de la page et éléments d'interface.
- **CSS** : Mise en forme et style de l'application.
- **JavaScript** : Logique de l'application (ajout de messages et gestion des événements).

## Installation
1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone https://github.com/votre-utilisateur/messagerie.git
2. Ouvrez le dossier du projet dans votre éditeur de code préféré (par exemple, VS Code).
3. Vous pouvez ouvrir directement le fichier index.html dans votre navigateur pour voir le projet en action.

Voici l'organisation des fichiers du projet :
/messagerie
├── index.html        # Fichier principal HTML
├── style.css         # Fichier CSS pour le style de la page
├── script.js         # Fichier JavaScript pour la logique
└── README.md         # Ce fichier README

Fonctionnement :
Le projet est basé sur une interface simple avec un champ de texte (textarea) pour saisir des messages.
Les messages sont ajoutés en cliquant sur le bouton "Ajouter". Chaque message est affiché dans une nouvelle boîte avec un style différent, en fonction de son ordre d'ajout (à gauche ou à droite).
Le champ de saisie peut être redimensionné pour une meilleure expérience utilisateur.

Exemple d'interaction :
L'utilisateur tape un message dans le champ de saisie.
En cliquant sur "Ajouter", le message est ajouté à la liste et affiché dans la zone d'affichage avec un alignement différent en fonction de l'ordre d'ajout.
Les messages sont bien visibles et l'interface reste fluide.

Améliorations possibles :
Ajouter une fonctionnalité de suppression des messages.
Sauvegarder les messages dans un stockage local ou sur un serveur.
Améliorer l'interface en ajoutant des animations pour l'ajout des messages.
Tester le projet sur différents appareils et navigateurs pour garantir sa compatibilité.
