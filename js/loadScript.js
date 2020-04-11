loadScript("js/data.js", function() {
    console.log("successfully loaded library js!!!");
    loadScript("js/library.js", function() {
        console.log("successfully loaded datajs file!!!");
        appJs.init();
      
      });
  
  });

  function loadScript(file, callback) {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", file);
    document.getElementsByTagName("head")[0].appendChild(script);
    script.onload = function() {
      callback();
    };
  }