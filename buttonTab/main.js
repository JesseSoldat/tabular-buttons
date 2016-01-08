  var btnMarker = getElem("btn_marker");

   function getElem(elem) {
    return document.getElementById(elem);
   }

   function loadContent(btn) {
      btnMarker.style.left = btn.offsetLeft+"px";
      btn_marker.style.width = btn.offsetWidth-2+"px"; 

      getElem("mycontent").innerHTML = "This section is content about " + btn.innerHTML +".";
   }

  function initMenu() {
    btnMarker.style.left = getElem("btn1").offsetLeft+"px";
    btnMarker.style.width = getElem("btn1").offsetWidth-2+"px";
    btnMarker.style.display = "block";
   }

   window.addEventListener('load', function(event) { initMenu(); });