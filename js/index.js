const API = '1ca1726301773f02a2fe357a72b037cd';
const URL = 'https://api.openweathermap.org/data/3.0/onecall?lat=';
// https://api.openweathermap.org/data/3.0/onecall?lat=50.4333&lon=30.5167&exclude=hourly&appid={API key}
const exampl = 'https://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&lang=ua&appid=';
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
        $.ajax({
            url: exampl + API,
            dataType: "json"
        }).done(function(data) {    
            weather(data);
        }).fail(function(data) {
            $('#content').load('404.html');    
        });
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
        $.ajax({
            url: exampl + API,
            dataType: "json"
        }).done(function(data) {    
            weather(data);
        }).fail(function(data) {
            $('#content').load('404.html');    
        });
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
function weather(data) {
    weather = data;
    let sun_set = new Date(data.sys.sunset * 1000);
    let sun_rise = new Date(data.sys.sunrise * 1000);
    let sun_day = new Date((data.sys.sunset - data.sys.sunrise) * 1000);
    let today_date = new Date();
    console.log(today_date);
    $('#city__name').text(data.name);
    $('#date').text(today_date);
    $('#left__weather-icon').attr('src', './img/' + data.weather[0].icon + '.png');
    $('#left__weather-description').text(data.weather[0].description);
    $('#left__weather-feels').html('Відчувається температура як: ' + Math.round(data.main.feels_like) + '&deg;');
    $('#pressure').html('Тиск ' + data.main.pressure);
    $('#wind').html('Швидкість вітру: ' + data.wind.speed + '<br>пориви вітру: ' + data.wind.gust);
    $('#left__weather-temp').html('Температура ' + Math.round(data.main.temp) + '&deg;');    
    $('#sun').html('Світанок починається о ' + sun_rise.getHours() + ':' + sun_rise.getMinutes() + '<br>день триває ' + sun_day.getHours() + ':' + sun_day.getMinutes() + '<br>сонце заходить о ' + sun_set.getHours() + ':' + sun_set.getMinutes());
    $('#humidity').html('Вологість повітря: ' + data.main.humidity + '%');
    $('#visibility').html('Видимість: ' + (data.visibility / 1000) + 'км.');
};
$(".nav-item").click(function () {
   $(this).closest(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
 });


