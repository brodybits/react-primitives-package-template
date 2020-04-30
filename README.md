# react-primitives-package-template

a clean, easily upgradable React Primitives app or library package starter for React Native and react-native-web, with support for testing and deployment through multiple web, Expo, and React Native configurations

Note that additional view components such as [`github:brodybits/react-primitives-input`](https://github.com/brodybits/react-primitives-input) and [`github:brodybits/react-primitives-scrollview`](https://github.com/brodybits/react-primitives-scrollview) can be easily created and used with existing React Primitives components.

## How

The scripts will generate web, Expo, and React Native projects that reference the sources in `index.js` and `src` via relative `..` paths, with help from a symlink in case of the react-native-web demo. Multiple workarounds are applied for issues encountered with symlinks on Metro and Webpack.

## Prerequisites

- Yarn
- expo-cli for expo demo
- create-react-app for react-native-web demo
- react-native-cli for React Native demo
- *recommended:* macOS host
- *highly recommended:* git

## Getting started

- clone this template
- adapt the package name
- start hacking in `src`

## Running a demo

### expo demo

- `yarn create-expo-demo awesome-expo-demo`
- `cd awesome-expo-demo`
- `yarn start`
- open the expo demo on Android or iOS
- *recommended:* add `awesome-expo-demo` to .gitignore

### React Native demo

- `yarn create-react-native-demo awesome-react-native-demo`
- `cd awesome-react-native-demo`
- *recommended:* do `yarn start` in the desired terminal window
- `react-native run-android`
- `react-native run-ios`
- *recommended:* add `awesome-react-native-demo` to .gitignore

### react-native-web demo

- `yarn create-web-demo awesome-web-demo`
- `cd awesome-web-demo`
- `yarn start`
- *recommended:* add `awesome-web-demo` to .gitignore

### specific expo version

for example:

```sh
yarn create-expo-demo awesome-expo-demo expo-template-blank@sdk-36
```

ref:

- <https://github.com/expo/expo-cli/issues/142>
- <https://docs.expo.io/workflow/upgrading-expo-sdk-walkthrough/>

### specific React Native version

for example:

```sh
yarn create-react-native-demo awesome-react-native-demo react-native@0.61
```

## Dependencies

Dependencies should be added as `peerDependencies` which would be automatically added to each of the generated demo packages.

Note that any dependencies installed in the root `node_modules` may cause issues with Metro.

## Upgrades

### Upgrade expo demo version

- add new expo demo version
- remove old expo demo version

### Upgrade React Native demo version

- add new React Native demo version
- remove old React Native demo version
