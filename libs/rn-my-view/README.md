
# react-native-rn-my-view

## Getting started

`$ npm install react-native-rn-my-view --save`

### Mostly automatic installation

`$ react-native link react-native-rn-my-view`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-rn-my-view` and add `RNRnMyView.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNRnMyView.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNRnMyViewPackage;` to the imports at the top of the file
  - Add `new RNRnMyViewPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-rn-my-view'
  	project(':react-native-rn-my-view').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-rn-my-view/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-rn-my-view')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNRnMyView.sln` in `node_modules/react-native-rn-my-view/windows/RNRnMyView.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Rn.My.View.RNRnMyView;` to the usings at the top of the file
  - Add `new RNRnMyViewPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNRnMyView from 'react-native-rn-my-view';

// TODO: What to do with the module?
RNRnMyView;
```
  