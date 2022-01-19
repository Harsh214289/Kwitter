
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCov1TOgAT8ZavtRyss2Ojh4miY7Ygwl1I",
      authDomain: "kwitter-app-602e1.firebaseapp.com",
      databaseURL: "https://kwitter-app-602e1-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-602e1",
      storageBucket: "kwitter-app-602e1.appspot.com",
      messagingSenderId: "605914413178", 
      appId: "1:605914413178:web:5ff0d00e4c8e5565c8e3c3" };
     // Initialize Firebase firebase.initializeApp(firebaseConfig);
     firebase.initializeApp(firebaseConfig);

     var welcome_user = localStorage.getItem("Name_of_user");
     document.getElementById("welcome_name").innerHTML = "Welcome " + welcome_user + " !";

     function addroom(){
     var name_folder = document.getElementById("room_name_kwitter").value;
     firebase.database().ref("/").child(name_folder).update({
           purpose : "adding room name"
     });
     localStorage.setItem("Room_name",name_folder);

     window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("trending_room_output").innerHTML += row;
 
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room_Name" , name);

      window.location = "kwitter_page.html";
}
