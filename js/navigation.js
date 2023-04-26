document.addEventListener("DOMContentLoaded", function() { 

    // Allow Users to navigate to buggy.html when pressing the "Enter" button

    $(document).keyup(function(event) {
      if (event.which === 13) {
          window.location.href = 'buggy.html';
      }
    });

    //Using JQuery API to Display Informative Overlays when Hovering Over Checkpoint Markers 
    $('#marker-one').hover(
        function() {
            $('#front-hill-ol').fadeIn( 200 );
            $('#front-hill-ol').css('display', 'flex');
        }, function() {
            $('#front-hill-ol').css('display', 'none');
    });

    $('#marker-two').hover(
      function() {
          $('#free-roll-ol').fadeIn( 200 );
          $('#free-roll-ol').css('display', 'flex');
      }, function() {
          $('#free-roll-ol').css('display', 'none');
     });

    $('#marker-three').hover(
    function() {
        $('#schenley-ol').fadeIn( 200 );
        $('#schenley-ol').css('display', 'flex');
    }, function() {
        $('#schenley-ol').css('display', 'none');
    });

    $('#marker-four').hover(
      function() {
          $('#chute-ol').fadeIn( 200 );
          $('#chute-ol').css('display', 'flex');
      }, function() {
          $('#chute-ol').css('display', 'none');
    });

    $('#marker-five').hover(
      function() {
          $('#back-hill-ol').fadeIn( 200 );
          $('#back-hill-ol').css('display', 'flex');
      }, function() {
          $('#back-hill-ol').css('display', 'none');
    });
});

