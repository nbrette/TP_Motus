# NICOLAS BRETTTE & MUSTAFA HARBUTOGLU

## Fonctionnalités implémentées

- Le mot à deviner s'affiche dans la console au chargement de la page
- Le mot doit être saisi dans l'input prévu à cet effet
- Le mot doit être de la bonne taille sinon un message d'erreur s'affiche pour préciser le nombre de lettre nécessaire
- Si le mot n'est jamais trouvé un message affiche 'Perdu' avec le mot qui devait être deviné
- Les lettres au bon emplacement s'affichent en vert une fois trouvée
- Les lettres non présentes dans le mot s'affichent en rouge
- Les lettres présentes dans le mot mais mal placées s'affichent en jaune

Une seules fonctionnalité n'est pas totalement implémentées, lorsqu'une lettre est présente dans le mot, le nombre d'occurence n'est pas compté. Ainsi toutes les occurences de cette lettre seront colorée en jaune.
Par exemple pour le mot 'ARBRE' si l'on saisit 'ARRRR' tous les R seront en jaune.