
var firebaseConfig = {
      apiKey: "AIzaSyD0WB9KOaVqSgGXfcgakhAZIaKTyjjxntg",
      authDomain: "kwitter-v1.firebaseapp.com",
      databaseURL: "https://kwitter-v1-default-rtdb.firebaseio.com",
      projectId: "kwitter-v1",
      storageBucket: "kwitter-v1.appspot.com",
      messagingSenderId: "735420322627",
      appId: "1:735420322627:web:b8b682dc3ab693706495f6"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name- "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout (){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}