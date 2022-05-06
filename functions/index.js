const functions = require("firebase-functions");
const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    res.send('This is actually working! ');
});

exports.app = functions.https.onRequest(app); // replaces our app.listen .... the app from exports.app is the cloud function called app. we're creating a cloud function and running express through it. 

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
