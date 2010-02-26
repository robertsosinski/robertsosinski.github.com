(function($) {
  $(function() {
    $.getJSON("http://github.com/api/v2/json/repos/show/robertsosinski?callback=?", function(json) {
        new EJS({url:'/js/projects.ejs'}).update('projects_slot', json);
    });
  });
})(jQuery);
