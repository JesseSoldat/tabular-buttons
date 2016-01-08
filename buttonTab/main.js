

   function getElem(elem) {
    return document.getElementById(elem);
   }

   function loadContent(btn) {
      getElem("mycontent").innerHTML = "This section is content about " + btn.innerHTML +".";
   }

  function initMenu() {
    var btnMarker = getElem("btn_marker");
    btnMarker.style.left = getElem("btn1").offsetLeft+"px";
    btnMarker.style.width = getElem("btn1").offsetWidth-2+"px";
    btnMarker.style.display = "block";
   }

   window.addEventListener('load', function(event) { initMenu(); });