/* global document, $, window */
$(document).ready(function () {
    'use strict';
    $('#bbtn-ajax').on('click', function () {
        $.ajax({
            url: "http://content.guardianapis.com/search?q=travel&api-key=2c895f09-7c48-4063-9224-6605a35fa745",
            dataType: 'json',
            type : 'GET',
            success: function (data) {
                var i = 0;
                do {
                    $('.ajaxdata .text' + i).html("<p> - sectionName is: " + data.response.results[i].sectionName + "</p>");
                    $('.ajaxdata .text' + i).append("<h> - webPublicationDate  is: " + data.response.results[i].webPublicationDate + "</h>");
                    $('.ajaxdata .text' + i).append("<header> - pillarName  is: " + data.response.results[i].pillarName + "</header>");
                    i =  i + 1;
                } while (i < 10);
            },
            error: function () {
                window.alert("error");
            }
        });
    });
});