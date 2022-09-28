const API = '1ca1726301773f02a2fe357a72b037cd';
const URL = 'https://api.openweathermap.org/data/3.0/onecall?lat=';
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
const exampl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=';


$().ready(function() {
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

$.ajax({
    url: exampl + API,
    dataType: "json"
}).done(function(data) {
    console.log(data);
}).fail(function() {
    console.log("Error json")
});
// console.log(exampl + API);