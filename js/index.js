const API = "1ca1726301773f02a2fe357a72b037cd";
const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const URL2 = "&units=metric&lang=ua&appid=";
let city = "Sumy";

//Функції
//Функція отримання даних по API
function open_api() {
  $.ajax({
    url: URL + city + URL2 + API,
    dataType: "json",
  }).done(function (data) {
      weather(data);
      console.log(city);
    }).fail(function (data) {
      $("#content").load("404.html");
    });
};

//Функція відкриття сторінки погоди за сьогодні
function open_today() {
  $.ajax({
    url: "today.html",
    dataType: "html",
  }).done(function (data) {
      $("#content").empty();
      $("#content").html(data);
      open_api();
      console.log(city);
    }).fail(function () {
      $("#content").empty();
      $("#content").html("<h1>404 Error</h1>");
    })
}

//Функція відкриття сторінки погоди за 5 днів
function open_five() {
  $.ajax({
    url: "five-day.html",
    dataType: "html",
  }).done(function (data) {
      $("#content").empty();
      $("#content").html(data);
      open_api();
      console.log(city);
    }).fail(function () {
      $("#content").empty();
      $("#content").html("<h1>404 Error</h1>");
    });
};

//Функція відкриття сторінки з помилкою
function open_error() {
  $.ajax({
    url: "404.html",
    dataType: "html",
  }).done(function (data) {
      $("#content").empty();
      $("#content").html(data);
    }).fail(function () {
      $("#content").empty();
      $("#content").html("<h1>404 Error</h1>");
    });
};

//Функція зміни даних на сторінці today.html
function weather(data) {
  let sun_set = new Date(data.sys.sunset * 1000);
  let sun_rise = new Date(data.sys.sunrise * 1000);
  let sun_day = new Date((data.sys.sunset - data.sys.sunrise) * 1000);
  let today_date = new Date();
  let getMonth = today_date.getMonth() + 1;
  let getDate = today_date.getDate();
  let getFullYear = today_date.getFullYear();
  getDate < 10 ? (getDate = `0${getDate}`) : getDate;
  let general_date = `${getDate}.${getMonth}.${getFullYear} р.`;
  $("#city__name").text(data.name);
  $("#date").text(general_date);
  $("#left__weather-icon").attr("src", "./img/" + data.weather[0].icon + ".png");
  $("#left__weather-description").text(data.weather[0].description);
  $("#left__weather-feels").html("Відчувається температура як: " + Math.round(data.main.feels_like) + "&deg;");
  $("#pressure").html("Тиск " + data.main.pressure);
  $("#wind").html("Швидкість вітру: " + data.wind.speed + "<br>пориви вітру: " + data.wind.gust);
  $("#left__weather-temp").html("Температура: " + Math.round(data.main.temp) + "&deg;");
  $("#sun").html("Світанок починається о " + sun_rise.getHours() + ":" + sun_rise.getMinutes() + "<br>день триває " + sun_day.getHours() + ":" + sun_day.getMinutes() + "<br>сонце заходить о " + sun_set.getHours() + ":" + sun_set.getMinutes());
  $("#humidity").html("Вологість повітря: " + data.main.humidity + "%");
  $("#visibility").html("Видимість: " + data.visibility / 1000 + "км.");
  console.log(city);
};

//Пошук погоди у введеному місті
$("#button-addon2").click(function (e) {
  e.preventDefault();
  city = $(".form-control").val();
  open_today();
});

//Автозагрузка при заході на сторінку
$().ready(open_today);
//Відкриття сторінки погоди на сьогодні
$("#today").click(open_today);
//Віткриття сторінки погоди за 5 днів
$("#five_day").click(open_five);
//Відкриття сторінки з помилкою
$("#error").click(open_error);

//Зміна класу в меню
$(".nav-item").click(function () {
  $(this).closest(".nav").find(".active").removeClass("active");
  $(this).addClass("active");
  console.log(city);
});
