localStorage.getItem("user_name");
localStorage.getItem("room_name");





function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location= "index.html";
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push ({
            name:user_name,
            message:msg,
            like:0
      });
      
document.getElementById("msg").value = "";
    
}

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBQPqUsroDl4QZUiJY99lcQKSOzmlP4hrI",
  authDomain: "kwitter-a281a.firebaseapp.com",
  databaseURL: "https://kwitter-a281a-default-rtdb.firebaseio.com",
  projectId: "kwitter-a281a",
  storageBucket: "kwitter-a281a.appspot.com",
  messagingSenderId: "543673732410",
  appId: "1:543673732410:web:92d73dc0c8968de04fd403"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

