    const slider = document.getElementById('slider');
    let scrollAmount = 0;
    const slideWidth = 420; // Image width + margin

    function slideLeft() {
      scrollAmount = Math.max(scrollAmount - slideWidth, 0);
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }

    function slideRight() {
      const maxScroll = slider.scrollWidth - slider.parentElement.offsetWidth;
      scrollAmount = Math.min(scrollAmount + slideWidth, maxScroll);
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }

    
  const sliderTwo = document.getElementById('sliderTwo');
  let scrollTwo = 0;
  const slideWidthTwo = 420;

  function slideLeftTwo() {
    scrollTwo = Math.max(scrollTwo - slideWidthTwo, 0);
    sliderTwo.style.transform = `translateX(-${scrollTwo}px)`;
  }

  function slideRightTwo() {
    const maxScroll = sliderTwo.scrollWidth - sliderTwo.parentElement.offsetWidth;
    scrollTwo = Math.min(scrollTwo + slideWidthTwo, maxScroll);
    sliderTwo.style.transform = `translateX(-${scrollTwo}px)`;
  }



   let menu_icon = document.querySelector('.mobile-list i');
   let menu_list = document.querySelector('.naver ul');

   menu_icon.onclick = ()  => {
       menu_icon.classList.toggle('fa-xmark');
       menu_list.classList.toggle('open');
   }





     const elements = document.querySelectorAll(".animate-text");

    // Page Load এ প্রথম element animate হবে
    window.addEventListener("load", () => {
      elements[0].classList.add("show");
    });

    // Scroll এ বাকি element animate হবে
    window.addEventListener("scroll", () => {
      elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
          el.classList.add("show");
        }
      });
    });