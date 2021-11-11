jQuery(document).ready(function($) {


    //FIXANDO NAVBAR
    window.onscroll = function() {
        if (window.pageYOffset > 140) {
            $("#navbar").addClass("active")
        } else {
            $("#navbar").removeClass("active")
        }
    };
})