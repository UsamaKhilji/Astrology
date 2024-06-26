
    // Auto-moving slider functionality
    // const carousel = document.querySelector('.carousel');
    // let currentIndex = 0;

    // function nextSlide() {
    //     currentIndex = (currentIndex + 1) % document.querySelectorAll('.slide').length;
    //     updateSlider();
    // }

    // function updateSlider() {
    //     const translateValue = -currentIndex * 100 + '%';
    //     carousel.style.transform = 'translateX(' + translateValue + ')';
    // }

    // // Automatically move to the next slide every 5 seconds (adjust as needed)
    // setInterval(nextSlide, 5000);

    // // Optionally, you can pause the slider on hover
    // // carousel.addEventListener('mouseenter', () => clearInterval(sliderInterval));
    // // carousel.addEventListener('mouseleave', () => setInterval(nextSlide, 5000));

 

        function showSidebar() {
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'flex'

        }

        function closeSidebar() {
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'none'
        }




        // -------Active Link -------

        function activateLink(linkId) {
            var links = document.querySelectorAll('ul li a');
            links.forEach(function(link) {
              if (link.hash === '#' + linkId) {                 
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
