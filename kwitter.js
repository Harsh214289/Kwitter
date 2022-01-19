
function navigate(){
    user_name = document.getElementById("name_kwitter").value;
    localStorage.setItem("Name_of_user" , user_name );

    window.location = "kwitter_room.html";
}