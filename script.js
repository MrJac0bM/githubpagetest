document.addEventListener("DOMContentLoaded", function() {
    // Manejo del loader
    setTimeout(function() {
        var loader = document.getElementById("loader");
        if (loader) {
            loader.classList.add("fade-out");

            var content = document.getElementById("content");
            if (content) {
                content.style.display = "block";
            }

            setTimeout(function() {
                if (loader) {
                    loader.style.display = "none";
                }
            }, 500);
        }
    }, 1000);

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
});
