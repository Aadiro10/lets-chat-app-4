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
room_name=localStorage.getItem("room_name");
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
