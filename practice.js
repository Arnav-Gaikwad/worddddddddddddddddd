
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCvGGQoRJPk0OvNYXS6dWgxg-GGx8qfadk",
    authDomain: "kwitter-d2aa6.firebaseapp.com",
    databaseURL: "https://kwitter-d2aa6-default-rtdb.firebaseio.com",
    projectId: "kwitter-d2aa6",
    storageBucket: "kwitter-d2aa6.appspot.com",
    messagingSenderId: "768235530123",
    appId: "1:768235530123:web:9e9efa810060fdc998718e",
    measurementId: "G-4ME3H4QNVF"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  function addUser() {

    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        prupose:"adding user"
    });
    
  }