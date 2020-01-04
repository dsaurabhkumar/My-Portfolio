import $ from 'jquery';

$(function(){ 
    var navMain = $(".navbar-collapse");

    navMain.on("click", "li", function () {
        navMain.collapse('hide');
    });
});