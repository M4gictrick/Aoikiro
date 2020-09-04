    var myVar;

    //// onloads function

    function start()
    {
    loads();
    closeNav();
    openNoti();
    }


    function loads()
    {
        myVar = setTimeout(showPage,2500);
        pro = setTimeout(pros,1000);
        var i = 0;
        if (i == 0) {
            i = 1;
            var elem = document.getElementById("greenload");
            var width = 10;
            var id = setInterval(frame, 10);
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                i = 0;
              } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
              }
            }
         }
    }
    function showPage()
    {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
    }

    function pros()
    {
        document.getElementById("loadbar").style.display = "none";
    }

    ////// charbox selection

    var header = document.getElementById("char");
    var characters = header.getElementsByClassName("character");
    for (var i = 0; i < characters.length; i++) {
      characters[i].addEventListener("click", function() {
      var current = document.querySelectorAll("#char .active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      var currentb = document.querySelectorAll("#charb .active");
      currentb[0].className = currentb[0].className.replace(" active", "");
      document.querySelector("#charb .character").className += " active";
      });
    }

    var header = document.getElementById("char");
    var characters = header.getElementsByClassName("pto");
    for (var i = 0; i < characters.length; i++) {
      characters[i].addEventListener("click", function() {
      var current = document.querySelectorAll("#char .active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      var currentb = document.querySelectorAll("#charb .active");
      currentb[0].className = currentb[0].className.replace(" active", "");
      document.querySelector("#charb .pto").className += " active";
      });
    }

    var header = document.getElementById("char");
    var characters = header.getElementsByClassName("rick");
    for (var i = 0; i < characters.length; i++) {
      characters[i].addEventListener("click", function() {
      var current = document.querySelectorAll("#char .active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      var currentb = document.querySelectorAll("#charb .active");
      currentb[0].className = currentb[0].className.replace(" active", "");
      document.querySelector("#charb .rick").className += " active";
      });
    }
    var header = document.getElementById("char");
    var characters = header.getElementsByClassName("em");
    for (var i = 0; i < characters.length; i++) {
      characters[i].addEventListener("click", function() {
      var current = document.querySelectorAll("#char .active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      var currentb = document.querySelectorAll("#charb .active");
      currentb[0].className = currentb[0].className.replace(" active", "");
      document.querySelector("#charb .em").className += " active";
      });
    }

    var header = document.getElementById("char");
    var characters = header.getElementsByClassName("plam");
    for (var i = 0; i < characters.length; i++) {
      characters[i].addEventListener("click", function() {
      var current = document.querySelectorAll("#char .active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      var currentb = document.querySelectorAll("#charb .active");
      currentb[0].className = currentb[0].className.replace(" active", "");
      document.querySelector("#charb .plam").className += " active";
      });
    }




    //// on-hover audio transition
    function openNav() {
      document.getElementById("nav-audio").style.height = "60px";
      document.getElementById("myDiv").style.marginBottom = "60px";
    }

    function closeNav() {
      document.getElementById("nav-audio").style.height = "25px";
      document.getElementById("myDiv").style.marginBottom= "25px";
    }

    function openNoti() {
      document.getElementById("myOverlay").style.display = "block";
    }

    // Close the full screen search box
    function closeNoti() {
      document.getElementById("myOverlay").style.display = "none";
    }
