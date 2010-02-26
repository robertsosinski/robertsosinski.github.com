(function($) {
  $(function() {
    (function() {
      // fetch projects from github, sort by number of watchers and insert them into the homepage
      if (document.location.pathname === "/") {
        $.getJSON("http://github.com/api/v2/json/repos/show/robertsosinski?callback=?", function(json) {
          json.repositories = json.repositories.sort(function(x, y) {
            return ((x.watchers > y.watchers) ? -1 : ((x.watchers < y.watchers) ? 1 : 0));
          });
          
          new EJS({url: "/js/projects.ejs"}).update("projects", json);
        });
      }
      
      // obfuscate email address
      var a = "mail";
      var b = "to:";
      var c = "email";
      var d = document.location.hostname.replace("github.", "");
      var e = (a+b+c+"@"+d);
            
      $("a.email").attr("href", e);
    })();
    
    // highlight category and tutorials when they are clicked from the homepage
    $(".category").each(function() {
      var $this = $(this);
      
      $this.click(function() {
        $("#categories h3, #categories a").css({"font-weight": null});
        $("#categories " + $this.attr("href") + " h3, #categories " + $this.attr("href") + " a").css({"font-weight": "bolder"});
      });
    });
  });  
})(jQuery);
