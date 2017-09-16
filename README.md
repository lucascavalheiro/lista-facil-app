[![GitHub tag](https://img.shields.io/github/tag/mcnamee/react-native-starter-app.svg?style=flat-square)](https://github.com/mcnamee/react-native-starter-app/tags)
[![GitHub contributors](https://img.shields.io/github/contributors/mcnamee/react-native-starter-app.svg?style=flat-square)](https://github.com/mcnamee/react-native-starter-app/contributors)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/mcnamee/react-native-starter-app/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/mcnamee/react-native-starter-app.svg?style=flat-square)](https://github.com/mcnamee/react-native-starter-app/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/mcnamee/react-native-starter-app.svg?style=flat-square)](https://github.com/mcnamee/react-native-starter-app/issues-closed)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/mcnamee/react-native-starter-app.svg?style=flat-square)](https://github.com/mcnamee/react-native-starter-app/issues-pr)

![alt text](/docs/rnsk-logo.jpg "React Native Starter Kit")

# React Native Starter Kit

React Native Starter Kit helps you get started with React Native. It contains a bunch of helpful components, building blocks and basic structure to allow you to jump straight into building an app.

What's more, it's now integrated with [Firebase](https://firebase.google.com/), to help you kick start your next full-stack product.

![alt text](/docs/rnsk-screens.jpg "React Native Starter App")

---

## Docs

1. [Features](#features)
1. **Before you start**
   1. [Getting Started with React Native](/docs/react-native.md)
   1. [React Native Quick Tips](/docs/quick-tips.md)
   1. [Understanding the File Structure](#understanding-the-file-structure)
   1. [Opinions Guiding this Project](/docs/opinions.md)
1. **Using RNSK**
   1. [Getting Up and Running with RNSK](#getting-started)
   1. [Renaming the App from StarterKit](/docs/renaming.md)
   1. [Routing / Navigating](/src/navigation/README.md)
   1. [Using Google Analytics](/docs/google-analytics.md)
   1. [Interacting with the Firebase API](https://firebase.google.com/docs/database/web/start)
   1. [Testing](/docs/testing.md)
1. [Contributing](/docs/contributing.md)
1. [Licence](LICENSE)

---

## Features

| Feature | Summary |
| --- | --- |
| [Redux](https://github.com/reactjs/react-redux) | A predictable state container - Helping you write applications that behave consistently and run in different environments. |
| [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) | Router for React Native based on new React Native Navigation API. <br><br>['How to' Guide &rarr;](/src/navigation/README.md)|
| [Firebase](https://firebase.google.com) | Most apps needs some sort of data. RNSK is setup and ready to go with 'data from the cloud'. |
| [Sidebar / Hamburger Menu](https://github.com/react-native-community/react-native-side-menu) | ... |
| [React Native Elements](https://github.com/react-native-community/react-native-elements) | Cross Platform React Native UI Toolkit. |
| [Google Analytics](https://github.com/idehub/react-native-google-analytics-bridge) | Shows how to track screen views (includes both a 'debug' mode tracker as well as 'release' mode so that data doesn't get obfuscated). <br><br>[Setup Guide &rarr;](/docs/google-analytics.md) |
| [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) | Easily use icons from a wide range of icon libraries, it's as simple as importing the icon font and then `<Icon name={'ios-alert-outline'} size={50} color={"#CCC"} />`. |
| [Tcomb Form Validation](https://github.com/gcanti/tcomb-form-native) | An example on how to create forms with validation. |
| Component Style Guide | A bunch of elements and components to get you started - styled headings, buttons, list rows, alerts etc. |
| Code Linting / Code Style Guide | We're using [Airbnb's](https://github.com/airbnb/javascript) JS/React Style Guide with ESLint linting. <br><br>[Get started with linting for React Native &rarr;](https://medium.com/pvtl/linting-for-react-native-bdbb586ff694) |
| Boilerplate | An example directory/file structure I've found useful for scaling apps <br><br>[Learn more &rarr;](#understanding-the-file-structure) |

---

## Getting Started

1. Ensure you've followed the [React Native - Get Started Guide](https://facebook.github.io/react-native/docs/getting-started.html) for the platform/s of choice
1. Clone this project `git clone https://github.com/mcnamee/react-native-starter-app.git`
1. Run `npm install` from root directory
1. Create your own .env file (to store any app secrets) - simply run `cp .env.sample .env`
1. [Setup your own Firebase API to get the full experience](#the-api--testing-out-authentication) (optional)
1. Start the app in [an emulator](/docs/quick-tips.md#running-in-an-emulator)

---

## The API & testing out authentication
We've created a quick little "API server" on [Google's Firebase Platform](https://firebase.google.com/). You can get your own API up and running within minutes too:

1. Signup for a [Firebase account](https://firebase.google.com/)
1. Create a new project - eg. "React Native Starter App"
1. Turn on email/password __Authentication__
1. Enable the __Database__ feature, and import the `firebase-sample-data.json` file found in this repo
1. Get the Firebase project's API credentials, and add them to the respective variables in your `/.env` file (eg. `APIKEY=d8f72k10s39djk29js`). You can get your projects details from Firebase, by clicking on the cog icon, next to overview > 'Add Firebase to your web app'.
1. Add the following __rules__ to the Database

```json
{
  "rules": {
    ".read": false,
    ".write": false,

    "meals": {
      ".read": true
    },

    "recipes": {
      ".read": true,
    	".indexOn": ["category"]
    },

    "users": {
      "$uid": {
        ".read": "auth != null && auth.uid == $uid",
        ".write": "auth != null && auth.uid == $uid",

        "firstName": { ".validate": "newData.isString() && newData.val().length > 0" },
        "lastName": { ".validate": "newData.isString() && newData.val().length > 0" },
        "lastLoggedIn": { ".validate": "newData.val() <= now" },
        "signedUp": { ".validate": "newData.val() <= now" },
        "role": {
          ".validate": "(root.child('users/'+auth.uid+'/role').val() === 'admin' && newData.val() === 'admin') || newData.val() === 'user'"
        }
      }
    },

    "favourites": {
    	"$uid": {
      	".read": "auth != null && auth.uid == $uid",
      	".write": "auth != null && auth.uid == $uid"
    	}
  	}
  }
}
```

Want to experiment even more with Firebase? Check out the [Firebase Cloud Functions](/docs/README.md)

---

## Understanding the File Structure

- `/android` - The native Android stuff
- `/ios` - The native iOS stuff
- `/src` - Contains the full React Native App codebase
  - `/components` - 'Dumb-components' / presentational. [Read More &rarr;](/src/components/README.md)
  - `/constants` - App-wide variables and config
  - `/containers` - 'Smart-components' / the business logic. [Read More &rarr;](/src/containers/README.md)
  - `/images` - Self explanatory right?
  - `/lib` - Utils, custom libraries, functions
  - `/navigation`- Routes - wire up the router with any & all screens. [Read More &rarr;](/src/navigation/README.md)
  - `/redux` - Redux Reducers & Actions grouped by type. [Read More &rarr;](/src/redux/README.md)
  - `/theme` - Theme specific styles and variables
