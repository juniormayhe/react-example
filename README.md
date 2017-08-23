This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Goals

- create a simple react app following this guide [here](https://medium.com/@diamondgfx/learning-react-with-create-react-app-part-3-322447d14192)
- Allow user to add messages to a list of messages
- After each message added, an alert will show total of added messages

## Components

- App: root node to be rendered, which contains list of messages
- MessageList: set of messages
- Message: single message, can be reused for rendering a set of messages
- AddMessage: add a message into outer component MessageList

## Folder Structure

After creation, your project should look like this:

```
react-example/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
	AddMessage.css
	AddMessage.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
	Message.css
	Message.js
	MessageList.css
	MessageList.js
	registerServiceWorker.js
```
where `src/index.js` is the JavaScript entry point.

## Available Scripts

To start the project, you must have installed npm, than run:

### `npm start`

which runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.