const firebaseConfig = {
    apiKey: "AIzaSyAL-oIDNvF85aq73ioPiDNrHZpwn8sfvhI",
    authDomain: "kwitter-fad13.firebaseapp.com",
    databaseURL: "https://kwitter-fad13-default-rtdb.firebaseio.com",
    projectId: "kwitter-fad13",
    storageBucket: "kwitter-fad13.firebasestorage.app",
    messagingSenderId: "352257938739",
    appId: "1:352257938739:web:7dc37f8042d31f1ef25a46"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML="¡Hola  "+user_name+"!";

function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
      localStorage.setItem8("room_name",room_name);

window.location="Kwitter_page.html";

}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room_Names"+ Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});

}
getData();
function redirectToRoomName(name){
    console.log (name);
    localStorage.setItem("room_name", name);
    window.location="Kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location= "index.html";
}
