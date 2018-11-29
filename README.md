# Projet ASI  
  
  * Hamza Mourik
  * Emile Bex
  * Pierre Dautrey

## GitHub
https://github.com/Vycen/ASI-project

## Vidéo

https://youtu.be/Su05DxTu8K4

## Avancement

### JEE
TP terminé entièrement.

**Mais problème de décalage de la queue. 
Nous récupérons à chaque fois la réponse de la requête précédente. 
Il faut donc effectuer l'authentification 2 fois.**

Nom du schéma de la base : `asi`

3 users dans la base :
  * **ebex**/azerty, *admin*
  * **hmourik**/azerty, *user*
  * **pdautrey**/azerty, *user*
  
  
### ReactJS

TP terminé entièrement.

2 sous-projets :
  * Partie **admin** (création de présentation, slide, ajout de contenu, etc...)
  * Partie **watch** (visualisation de la présentation)
  


### NodeJS
  
TP terminé sauf le point de validation n°9.
  
Sur la route `/`, renvoi de l'écran de **login**
  * Si login réussi et utilisateur est un *admin*, renvoi vers la route `/admin`, ou est servi le bundle ReactJS **admin**
  * Si login réussi et utilisateur est un *user*, renvoi vers la route `/watch`, ou est servi le bundle ReactJS **watch**

Afin de bypasser le login, il suffit de se rendre sur la route `/admin` ou `/watch` (vive la sécurité)


