init();
    
    function init() {
      if (window.DeviceOrientationEvent) {
        document.getElementById("infoHendelse").innerHTML = "DeviceOrientation fungerer på denne enheten";
        
        window.addEventListener('deviceorientation', function(eventData){
          var VH = eventData.gamma;
          var FB = eventData.beta;
          var retning = eventData.alpha;
          deviceOrientationHandler(VH, FB, retning);
        }, false);
      } else {
        document.getElementById("infoHendelse").innerHTML = "DeviceOrientation fungerer ikke på din enhet/nettleser";
      }
    }
    
    function deviceOrientationHandler(VH, FB, retning) {
      document.getElementById("infoVippVH").innerHTML = Math.round(VH);
      document.getElementById("infoVippFB").innerHTML = Math.round(FB);
      document.getElementById("infoRetning").innerHTML = Math.round(retning);
      document.getElementById("bilde").style.left = Math.round(VH) * 10 + "px";
      document.getElementById("bilde").style.top = Math.round(FB) * 10 + "px";
    }