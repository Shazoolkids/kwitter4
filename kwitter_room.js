



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
user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome"  +  user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";      
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();



function logout() 
{
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  window.location= "index.html";
}
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update ({
            purpose : " adding room name "
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) 
 {
    console.log(name);
    localStorage.setItem( "room_name", name);
    window.location = "kwitter_page.html";
 }