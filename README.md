# Pixabay App

Simple app for searching and downloading images from different creators.

## Prerequisites

For React Native environment setup please follow [steps in official documentation](https://reactnative.dev/docs/environment-setup)

## Installation and Setup

- Download or clone the repository
- Navigate to that repository direction
- Run `npm install` or `yarn install` (I prefer to use this one)
- Create `.env` file in root and copy there data from `env.example`

For **Android Platform** you need to 
- create `local.properties` file in `android` directory root
- add there your `android sdk location` (something like this for mac users `sdk.dir=/Users/USERNAME/Library/Android/sdk`) 
- run `npm react-native run-android` 
  or if you're using yarn `yarn android` in your terminal

For **iOS Platform** you need to do one more step
- Navigate to `/ios` directory
- Run `pod install`
- Go back to the root of you project (most commonly `cd ../`)
- `npm react-native run-ios` or `yarn ios` if you're using yarn

In some reasons time by time metro bundler server maybe not to start, 
  so you can open new terminakl tab or window at the project directory and run
  `npm start` command

## App Structure
```
    ├── assets                    
        ├── index.js
        ├── icons
    ├── src
        ├── actions                
        ├── components (Reusable ui components)
            ├── index.js
            ├── component
                ├── index.js
                ├── styles.js
        ├── helpers 
        ├── navigation (Responsible for the navigation structure and integrates all screens)
        ├── providers (Responsible for different context providers)                           
        ├── reducers (Redux reducers)                           
        ├── screens
            ├── index.js
            ├── screen
                    ├── index.js
                    ├── styles.js
        ├── services
        ├── store (Responsible for data structure and business logic)                  
        ├── utils                    
    ├── App.js                                     
``` 

## Credits

List of contriubutors:
- [Karen Hakobyan](https://www.github.com/khakobyan)
