   function getElem(elem) {
    console.log(elem);
    return document.getElementById(elem);
   }

   function loadContent(btn) {
    console.log(btn);
      getElem("mycontent").innerHTML = "This section is content about " + btn.innerHTML +".";

   }