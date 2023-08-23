window.onload = function(){
    let swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        clickable: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

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