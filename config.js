import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJzyOgllyxHz-XVd5UJPWBCBolC1zdMZs",
    authDomain: "projeto-60-f08e7.firebaseapp.com",
    databaseURL: "https://projeto-60-f08e7-default-rtdb.firebaseio.com",
    projectId: "projeto-60-f08e7",
    storageBucket: "projeto-60-f08e7.appspot.com",
    messagingSenderId: "448976325979",
    appId: "1:448976325979:web:988a0ffae2eb69f2101e7e"
  };

firebase.initializeApp(firebaseConfig);
export default firebaseConfig.database();