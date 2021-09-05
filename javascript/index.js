/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/

  var roundButton = document.querySelector("#roundButton");
  roundButton.addEventListener("click", showMenu, false);
   
  var flyoutMenu = document.querySelector("#flyoutMenu");
  flyoutMenu.addEventListener("click", hideMenu, false);
   
  function showMenu(e) {
      flyoutMenu.classList.add("show");
   
      document.body.style.overflow = "hidden";
  }
   
  function hideMenu(e) {
      flyoutMenu.classList.remove("show");
      e.stopPropagation();
   
      document.body.style.overflow = "auto";
  } 