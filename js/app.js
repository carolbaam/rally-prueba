
var config = {
    apiKey: "AIzaSyB-PNTVuADClpdqZcSCb_hjSspoWdIUMpo",
    authDomain: "rally-prueba.firebaseapp.com",
    databaseURL: "https://rally-prueba.firebaseio.com",
    projectId: "rally-prueba",
    storageBucket: "",
    messagingSenderId: "43278050775"
  };
  firebase.initializeApp(config);

  $("#buttonGoogle").click(function(){
    authGoogle();
  })
  
  function authGoogle (){
    var provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider);
  }
  
  function authentication(provider){
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(result);
      // ...
    }).catch(function(error) {
      
      var errorCode = error.code;
      console.log(error);
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }