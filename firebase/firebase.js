const admin = require("firebase-admin");

//db local
// const serviceAccount = require("../serviceAccountKey.json");

//db deploy hospedagem
const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;