$(document).ready(function(){

    // for hogan templates
    $('.hogan-nav-default').html(templates.nav_default.render());
    $('.hogan-portfolio').html(templates.portfolio.render());
    $('.hogan-home').html(templates.home.render());
    $('.hogan-modals').html(templates.modals.render());
    $('.hogan-footer').html(templates.footer.render());
   
});