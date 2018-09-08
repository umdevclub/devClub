
//add new js functions here

//js for particle effect
window.onload = function() {
    Particles.init({
        selector: '.backgroundpar',
        color: ['#5856d6','#ffcc00','#5856d5','#5856d4','#4cd964'],
        connectParticles: true,
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 75,
                }
            }, {
                breakpoint: 620,
                options: {maxParticles: 25,
                    color: '#5856d6'
                }
            }, {
                breakpoint: 500,
                options: {maxParticles: 10,
                    color: '#5856d6'
                }
            }, {
                breakpoint: 320,
                options: {
                    maxParticles: 0 // disables particles.js
                }
            }
        ]
    });
};


//navbar - collapse on click fix
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

//navbar - collapse when clicking outside menu
jQuery('html').bind('click', function(e) {
    if(jQuery(e.target).closest('.navbar').length == 0) {
        // click happened outside of .navbar, so hide
        var opened = jQuery('.navbar-collapse').hasClass('collapse in');
        if ( opened === true ) {
            jQuery('.navbar-collapse').collapse('hide');
        }
    }
});

//navbar - collapse when clicking outside menu
jQuery('html').bind('touchstart', function(e) {
    if(jQuery(e.target).closest('.navbar').length == 0) {
        // click happened outside of .navbar, so hide
        var opened = jQuery('.navbar-collapse').hasClass('collapse in');
        if ( opened === true ) {
            jQuery('.navbar-collapse').collapse('hide');
        }
    }
});

//Enable smooth scrolling when user click a #hash link
$('a[href*=#]:not([href=#])').click(function() {
    //get height of navbar
    var navheight = parseInt($(".navbar").css("margin-bottom"));

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        //if we need to scroll to # index
        if (this.hash.slice(1) == 'index'){
            $('html,body').animate({
                //scroll to top
                scrollTop: 0
            }, 1000);
            return false;
        }

        //scrolling for any other #
        else if (target.length) {
            $('html,body').animate({
                //scroll to target (+navbar height and 20px for spacing)
                scrollTop: (target.offset().top)-(navheight +20)
            }, 1000);
            return false;
        }


    }
});
