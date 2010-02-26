(function($) {
  $(function() {
    (function() {
      // fetch and insert projects from github json api
      if ($("#projects").length == 1) {
        $.getJSON("http://github.com/api/v2/json/repos/show/robertsosinski?callback=?", function(json) {
          new EJS({url: "/js/projects.ejs"}).update("projects", json);
        });
      }
      
      // obfuscate email address
      var a = "mail";
      var b = "to:"
      var c = "email";
      var d = document.location.hostname.replace("github.", "");
      var e = (a+b+c+"@"+d);
            
      $("a.email").attr("href", e);
    })();
    
    // set category event handlers
    $(".category").each(function() {
      var $this = $(this);

      $this.click(function() {
        $("#categories h3, #categories a").css({"font-weight": null});
        $("#categories " + $this.attr("href") + " h3, #categories " + $this.attr("href") + " a").css({"font-weight": "bolder"});
      });
    });
  });  
})(jQuery);
