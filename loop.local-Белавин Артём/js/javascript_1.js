const btn = document.getElementById("navbar-toggler");
        const menus = document.querySelectorAll(".menu");
        btn.addEventListener('click',() => {
            for (let el of menus) {
                el.classList.toggle("show");
            }
        })