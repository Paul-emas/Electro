//  Simple Toggle function
function openSidebar() {
  document.getElementById('mySidebar').style.marginLeft = "0";
  document.getElementById('closeBtn').style.display = "block";
  document.getElementById('closeBtn2').style.display = "block";
  document.getElementById('openBtn').style.display = "none";
  document.getElementById('openBtn2').style.display = "none";
}
function closeSidebar() {
  document.getElementById('mySidebar').style.marginLeft = "-350px";
  document.getElementById('closeBtn').style.display = "none";
  document.getElementById('closeBtn2').style.display = "none";
  document.getElementById('openBtn').style.display = "block";
  document.getElementById('openBtn2').style.display = "block";
}

// Tooltip hover effect
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
