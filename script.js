$(document).ready(function() {
    // Smooth scrolling for anchor links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Collapse Navbar when a link is clicked
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // Scroll Reveal Animation
    ScrollReveal().reveal('.main-content', { delay: 300 });

    // Form Validation
    $("form").submit(function(event){
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        if(name === '' || email === '' || message === '') {
            alert("Please fill in all fields.");
            return false;
        }
        // Add AJAX request here to submit the form data
    });

    // Smooth Scroll to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
    $('.scroll-to-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    // Control Carousel Autoplay
    $('.carousel').carousel({
        interval: 5000 // Set to false to disable autoplay
    });

    // Toggle Dark Mode
    $('.dark-mode-toggle').click(function() {
        $('body').toggleClass('dark-mode');
    });

    // Add fadeIn animation to elements with class .animated-popup
    $('.animated-popup').fadeIn(1000); // Adjust duration as needed
});

let startX, startY, endX, endY;

document.addEventListener('touchstart', function (e) {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
}, false);

document.addEventListener('touchend', function (e) {
  endX = e.changedTouches[0].clientX;
  endY = e.changedTouches[0].clientY;

  let diffX = startX - endX;
  let diffY = startY - endY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
      // Swipe left
      console.log('Swiped left');
    } else {
      // Swipe right
      console.log('Swiped right');
    }
  } else {
    if (diffY > 0) {
      // Swipe up
      console.log('Swiped up');
    } else {
      // Swipe down
      console.log('Swiped down');
    }
  }
}, false);
