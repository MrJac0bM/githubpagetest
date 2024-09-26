document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");
    var video = document.getElementById("loader-video");
    var loaderImg = document.getElementById("loader-img");

    // Espera a que el video termine
    video.addEventListener('ended', function() {
        // Aplica la clase fade-out al video
        video.classList.add("fade-out-video");

        // Espera un momento antes de ocultar el video y mostrar el logo
        setTimeout(function() {
            // Oculta el video y muestra el logo girando
            video.style.display = "none";
            loaderImg.style.display = "flex"; // Muestra el logo girando

            // Después de 2 segundos, aplica el fade-out al loader
            setTimeout(function() {
                loader.classList.add("fade-out");

                var content = document.getElementById("content");
                if (content) {
                    content.style.display = "block"; // Muestra el contenido de la página
                }

                setTimeout(function() {
                    if (loader) {
                        loader.style.display = "none"; // Oculta el loader
                    }
                }, 500); // Duración del fade-out
            }, 2000); // Duración del logo girando
        }, 500); // Tiempo para permitir el fade-out del video
    });
});


    // Manejo del carrusel
    var currentIndex = 0;
    var items = document.querySelectorAll(".carousel-item");
    var totalItems = items.length;

    function showSlide(index) {
        var newIndex = (index + totalItems) % totalItems;
        var offset = -100 * newIndex;
        document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
        currentIndex = newIndex;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    document.querySelector(".carousel-next").addEventListener("click", nextSlide);
    document.querySelector(".carousel-prev").addEventListener("click", prevSlide);

    // Mostrar la primera imagen al cargar
    showSlide(currentIndex);

    // Mostrar el footer cuando el usuario esté cerca del final de la página
    function checkFooterVisibility() {
        var footer = document.querySelector('.footer');
        if (footer) {
            var scrollPosition = window.scrollY + window.innerHeight;
            var pageHeight = document.documentElement.scrollHeight;

            if (scrollPosition >= pageHeight - 100) { // Ajusta el valor según tus necesidades
                footer.classList.add('show-footer');
            } else {
                footer.classList.remove('show-footer');
            }
        }
    }

    window.addEventListener('scroll', checkFooterVisibility);
    // Llama a la función al cargar la página por si ya estamos al final
    checkFooterVisibility();
;
