$(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
  });

  $(".rslides_portfolio").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,            // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: true,           // Boolean: Show pager, true or false
  });

  Visibility.onVisible (function() {
    setTimeout(function () {
      $(".introducao h1").addClass("animate__animated animate__fadeInDown");
    }, 400);
    setTimeout(function () {
      $(".introducao blockquote").addClass("animate__animated animate__fadeInDown");
    }, 800);
    setTimeout(function () {
      $(".introducao .btn").addClass("animate__animated animate__fadeInDown");
    }, 1200);
    setTimeout(function () {
      $(".animar").addClass("animate__animated animate__fadeInDown");
    }, 1600);

    setTimeout(function () {
      $(".introducao_interna h1").addClass("animate__animated animate__fadeInDown");
    }, 400);
    setTimeout(function () {
      $(".introducao_interna p").addClass("animate__animated animate__fadeInDown");
    }, 800);
    setTimeout(function () {
      $(".animar-interno").addClass("animate__animated animate__fadeInDown");
    }, 1200);
  });