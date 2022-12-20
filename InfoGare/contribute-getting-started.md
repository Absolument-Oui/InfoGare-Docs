# Bien démarrer

## Prérequis

Avant de commencer, vous devez : 

  * Avoir un compte GitHub
  * Avoir un compte InfoGare Béta (effectuez la demande par mail à [contact@infogare.fr](mailto:contact@infogare.fr))
  * Avoir un éditeur de texte (nous recommandons [Visual Studio Code](https://code.visualstudio.com/))
  * Avoir [Node.js](https://nodejs.org/en/) installé sur votre ordinateur
  * Avoir [Git](https://git-scm.com/) installé sur votre ordinateur

Une fois que vous avez installé les prérequis, vous pouvez passer à l'étape suivante.

# Cloner le projet

Pour commencer, vous devez cloner le projet sur votre ordinateur. Pour ce faire, ouvrez un terminal dans le dossier où vous souhaitez cloner le projet et exécutez la commande suivante :
```bash
git clone https://github.com/Absolument-Oui/InfoGare-Beta.git
```

# Installer les dépendances

Une fois le projet cloné, vous devez installer les dépendances du projet. Pour ce faire, ouvrez un terminal Node.JS dans le dossier du projet et exécutez la commande suivante :
```bash
npm ci
```

# Lancer le projet

Une fois les dépendances installées, vous pouvez lancer le projet. Pour ce faire, ouvrez un terminal Node.JS dans le dossier du projet et exécutez la commande suivante :
```bash
npm start
```

# Modifier le code

Une fois le projet lancé, vous pouvez commencer à modifier le code. Pour ce faire, ouvrez le dossier du projet dans votre éditeur de texte et modifiez les fichiers que vous souhaitez. Une fois que vous avez terminé, vous pouvez envoyer vos modifications en créant un pull request sur GitHub.

# Envoyer vos modifications

Pour envoyer vos modifications, vous devez d'abord créer une branche. Pour ce faire, ouvrez un terminal dans le dossier du projet et exécutez la commande suivante :
```bash
git checkout -b <nom-de-la-branche>
```

Une fois la branche créée, vous pouvez commencer à modifier le code. Une fois que vous avez terminé, vous pouvez envoyer vos modifications en créant un pull request sur GitHub. Pour ce faire, ouvrez un terminal dans le dossier du projet et exécutez la commande suivante :
```bash
git add .
git commit -m "<message>"
git push origin <nom-de-la-branche>
```

Une fois que vous avez envoyé vos modifications, vous pouvez créer un pull request sur GitHub.

# Créer un pull request

Pour créer un pull request, rendez-vous sur la page du projet sur GitHub et cliquez sur le bouton "Compare & pull request". Une fois que vous avez créé le pull request, vous pouvez attendre que nous l'acceptions.

Pour plus d'informations sur les pull requests, consultez la [documentation officielle de GitHub](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request?tool=webui)