//jshint esversion:6
$("#contactBtn").click(function (e) {
   activeLink(".contact");
   loadPage("#contactPage");
});

$(".home").click(function (e) {
   activeLink(".home");
   loadPage("#homePage");
});

$(".about").click(function (e) {
   activeLink(".about");
   loadPage("#aboutPage");
});

$(".skill").click(function (e) {
   activeLink(".skill");
   loadPage("#skillPage");
});

$(".project").click(function (e) {
   activeLink(".project");
   loadPage("#projectPage");
});

$(".contact").click(function (e) {
   activeLink(".contact");
   loadPage("#contactPage");
});
$(".ContactLink").click(function (e) {
   activeLink(".contact");
   loadPage("#contactPage");
});
$("#sendMail").click(function (e) {
   clearInput();
   $(".alert").css("display", "block");
   setTimeout(function () {
      $(".alert").css("display", "none");
   }, 3000);
});

activeLink = (page) => {
   deactivateLink();
   $(`${page} i`).css("color", "#11d5b3");
};

deactivateLink = () => {
   $(".links i").css("color", "#909096");
};

loadPage = (page) => {
   $(".page").css("display", "none");

   $(".animation").css("display", "block");

   setTimeout(function () {
      $(".animation").css("display", "none");

      $(`${page}`).css("display", "block");
      $(`${page}`).addClass("slide-in-bck-center");
   }, 2000);
};
clearInput = () => {
   $("#name").val(" ");
   $("#email").val(" ");
   $("#subject").val(" ");
   $("#message").val(" ");
};
