
//add new js functions here

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
