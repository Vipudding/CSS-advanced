window.addEventListener("scroll", function() {
    var positionInfoElements = document.getElementsByClassName("position-info");
    
    for (var i = 0; i < positionInfoElements.length; i++) {
      var element = positionInfoElements[i];
      var position = element.getBoundingClientRect();
      
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add("visible");
      }
    }
  });
  window.addEventListener("scroll", function() {
    var positionInfoElements = document.getElementsByClassName("position-info2");
    
    for (var i = 0; i < positionInfoElements.length; i++) {
      var element = positionInfoElements[i];
      var position = element.getBoundingClientRect();
      
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add("visible");
      }
    }
  });
  
  
  
  
  
  