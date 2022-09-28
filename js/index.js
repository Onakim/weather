const API = '1ca1726301773f02a2fe357a72b037cd';
const URL = 'https://api.openweathermap.org/data/3.0/onecall?lat=';
// https://api.openweathermap.org/data/3.0/onecall?lat=50.4333&lon=30.5167&exclude=hourly&appid={API key}
const exampl = 'https://api.openweathermap.org/data/2.5/weather?q=Kyiv-&lang=ua&appid=';
// const exampl = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=';


$().ready(function() {
    // if(document.location.pathname != '/index.html') {
        
    // }
    // console.log(document.location.pathname)
    $.ajax({
        url: 'today.html',
        dataType: 'html'
    }).done(function(data) {
        $('#content').empty();
        $('#content').html(data);
    }).fail(function(data) {
        $('#content').empty();
        $('#content').html(`<h1>404 Error ${data.responseJSON.message} </h1>`);
    });
})
$('#today').click(function() {
    $.ajax({
        url: 'today.html',
        dataType: 'html'
    }).done(function(data) {
        $('#content').empty();
        $('#content').html(data);
    }).fail(function() {
        $('#content').empty();
        $('#content').html('<h1>404 Error</h1>');
    });
});

$('#five_day').click(function() {
    $.ajax({
        url: 'five-day.html',
        dataType: 'html'
    }).done(function(data) {
        $('#content').empty();
        $('#content').html(data);
    }).fail(function() {
        $('#content').empty();
        $('#content').html('<h1>404 Error</h1>');
    });
});

$('#error').click(function() {
    $.ajax({
        url: '404.html',
        dataType: 'html'
    }).done(function(data) {
        $('#content').empty();
        $('#content').html(data);
    }).fail(function() {
        $('#content').empty();
        $('#content').html('<h1>404 Error</h1>');
    });
});

$.ajax({
    url: exampl + API,
    dataType: "json"
}).done(function(data) {
    console.log(data);
}).fail(function(data) {
    $('#content').load('404.html');
    $().ready(function() {
        $('#err').html(`<h1>${data.responseJSON.message}</h1>`);
    })
});

