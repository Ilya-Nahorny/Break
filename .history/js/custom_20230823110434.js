
  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });    
  });




window.onload = function(){
  var modalswiper = new Swiper(".modalSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    let name = document.getElementById("cf-name").value.trim();
    let email = document.getElementById("cf-email").value.trim();
    let message = document.getElementById("cf-message").value.trim();
  
    // Очищаем предыдущие сообщения об ошибках
    let errorElements = document.getElementsByClassName("error-message");
    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = "";
    }
  
    name.addEventListener("focusout", (event)=>{
        if (event.target() === "") {
            document.getElementById("error-name").textContent = "Пожалуйста, введите ваше имя.";
        }
    });
    // Производим валидацию полей и выводим сообщения об ошибках
  
  
    if (email === "") {
        document.getElementById("error-email").textContent = "Пожалуйста, введите ваш email.";
        return;
    }
  
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("error-email").textContent = "Пожалуйста, введите корректный email.";
        return;
    }
  
    if (message === "") {
        document.getElementById("error-message").textContent = "Пожалуйста, введите ваше сообщение.";
        return;
    }
  
    // Если все данные прошли валидацию, отправляем форму
    // document.querySelector(".send-contact-form").submit();
  });
};


  // const swiper = new Swiper('.partners_swiper', {
  //   // Default parameters
  //   slidesPerView: 1,
  //   spaceBetween: 10,
  //   // Responsive breakpoints
  //   breakpoints: {
  //     // when window width is >= 320px
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 20
  //     },
  //     // when window width is >= 480px
  //     480: {
  //       slidesPerView: 3,
  //       spaceBetween: 30
  //     },
  //     // when window width is >= 640px
  //     640: {
  //       slidesPerView: 4,
  //       spaceBetween: 40
  //     }
  //   }
  // })
