const firebaseConfig = {
  apiKey: "AIzaSyAhQ1jwxjRTAbm3sA_UrisMpM5h_bSPaMs",
  authDomain: "paginacion-firebase.firebaseapp.com",
  projectId: "paginacion-firebase",
  storageBucket: "paginacion-firebase.appspot.com",
  messagingSenderId: "1053588225498",
  appId: "1:1053588225498:web:1bdf848bf60a9c5de1d4e3",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
