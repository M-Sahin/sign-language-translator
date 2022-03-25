# Sign Language Translator

![GitHub repo size](https://img.shields.io/github/repo-size/M-sahin/sign-language-translator)


[Live Demo](https://mm-sign-language-translator.herokuapp.com/) (Hosted on _Heroku_)

[REST API](https://mm-assignment-api.herokuapp.com/translations) (Hosted on _Heroku_)

[Assignment PDF](https://lms.noroff.no/pluginfile.php/184846/mod_assign/introattachment/0/Assignment_React_Lost%20in%20Translation.pdf?forcedownload=1)

## Table of Contents

- [General Information](#general-information)

- [Technologies and Resources](#technologies-and-resources)

- [Installation and Usage](#installation-and-usage)

- [Contributors](#contributors)

## General Information

**Login/Register view**

NOTE: User cannot see these views if _logged in_

The user starts in the log in view and has to enter his username. If the username does not exist, an error is shown and the user is asked to register a new username using the provided button.

**Translate view**

NOTE: User cannot see this view if _not logged in_

In this screen, the user can input various words which will then be translated in to sign language. Aditionally, these translations will be added to the user's profile page and also uploaded to the API.

**Profile view**

NOTE: User cannot see this view if _not logged in_

In the profile screen, the user is shown a history of translations. Here, there are two buttons, one for clearing the translation history (will also be deleted from the API), and one button for logging out, which will take the user back to the home screen.

## Technologies and Resources

The project is implemented using the following technologies and resources:

- React
- Redux (with devtools extension)
- React Router
- Bootstrap
- Material Icons

**NB!** The code used for the redux setup along with the templates for basic login, register and session related actions, reducers and middleware were replicated from the [example project](https://gitlab.com/sumodevelopment/react-txt-forum-client) created by Dewald Els.

## Installation and Usage

**NOTE:** You will need _node_ and _npm_ installed on your machine

1. Clone the project repository:

```sh
git clone https://github.com/M-sahin/sign-language-translator.git
```

2. Install the dependencies while inside the project directory:

```sh
npm install
```

3. Start the server:

```sh
npm start
```

After starting the server, your browser should automatically lauch the application but you can also access it manually by navigating to `localhost:3000` on your browser.

## Contributors

[Murat Sahin (@M-sahin)](https://github.com/m-sahin)

[Mehmet Balci (@mehmet70)](https://github.com/mehmet70)
