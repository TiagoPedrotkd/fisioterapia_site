let firebaseConfig = {
    apiKey: "AIzaSyD3o1Xw3yg8IuAGXjHTM4SQrF3NA0vsgZU",
    authDomain: "fisioterapia-site.firebaseapp.com",
    projectId: "fisioterapia-site",
    storageBucket: "fisioterapia-site.appspot.com",
    messagingSenderId: "1018602570154",
    appId: "1:1018602570154:web:bd2a92d8f7e3d72810abd3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();