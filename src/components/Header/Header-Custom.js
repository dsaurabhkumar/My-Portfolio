import $ from 'jquery';

$(document).ready(function () {
    $(".navbar-nav li ").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});