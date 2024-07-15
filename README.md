<!-- PROJECT SHIELDS -->
<!--
*** This template uses markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

# Argent Bank: login/logout react project

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url]

<!-- ABOUT THE PROJECT -->

## About The Project

[![Argent Bank app screenshot][product-screenshot]](#)

This project was realized during my training as a javascript/react developer for a fictitious company wanting to create a bank application.

This web application had to respect [a given mock up](https://github.com/csimon-web/argent-bank-backend/tree/main/designs).

It had to be developed with React and Redux, and use the data about the bank user from an API.

### Built With

- HTML, CSS, Javascript
- React
- Git
- VS Code

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Git
- Npm
- Node
- Mongodb

### Installation

1. Open a terminal and launch Mongodb

2. Clone the repo of the back end project

```sh
git clone https://github.com/csimon-web/argent-bank-backend.git
```

3. Go to this back end project directory

```sh
cd argent-bank-backend
```

4. Install the dependencies of this project

```sh
npm install
```

5. Launch this back end project

```sh
npm run dev:server
```

6. At first use, populate the database with 2 users

```sh
npm run populate-db
```

7. Open a new terminal

8. Clone this repo

```sh
git clone https://github.com/csimon-web/argent-bank.git
```

9. Go to this project directory

```sh
cd argent-bank
```

10. Install the dependencies of this project

```sh
npm install
```

11. Launch this project

```sh
npm run start
```

12. Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

<!-- USAGE EXAMPLES -->

## Usage

This project enables you to log in / log out to a securised interface.
You can log in as "Tony Stark" or as "Steve Rogers".
These 2 users are registered in the Mongodb database.
If you want to log in as "Tony Stark", please type in these credentials: email: "tony@stark.com" / password: "password123".
If you want to log in as "Steve Rogers", please type in these credentials: email: "steve@rogers.com" / password: "password456".
You'll be able then to access the private user's profile.

<!-- CONTACT -->

## Contact

Christophe Simon: [personnal website](https://www.csimon.info)

Project Link: [https://github.com/csimon-web/argent-bank](https://github.com/csimon-web/argent-bank)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- This readme version is a customized version of this [github repository](https://github.com/NicolasBrondin/basic-readme-template) by NicolasBrondin

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/csimon-web/argent-bank.svg?style=flat-square
[contributors-url]: https://github.com/csimon-web/argent-bank/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/csimon-web/argent-bank.svg?style=flat-square
[forks-url]: https://github.com/csimon-web/argent-bank/network/members
[stars-shield]: https://img.shields.io/github/stars/csimon-web/argent-bank.svg?style=flat-square
[stars-url]: https://github.com/csimon-web/argent-bank/stargazers
[issues-shield]: https://img.shields.io/github/issues/csimon-web/argent-bank.svg?style=flat-square
[issues-url]: https://github.com/csimon-web/argent-bank/issues
[license-shield]: https://img.shields.io/github/license/csimon-web/argent-bank.svg?style=flat-square
[license-url]: https://github.com/csimon-web/argent-bank/blob/master/LICENSE.txt
[product-screenshot]: docs/screenshot.jpg
