window.onload = function () {
    const containerP = document.querySelector("#sideToolbarContainerP");
    const fechar = document.querySelector("#part_header");

    fechar.addEventListener("click", function () {
        containerP.style.display = "none";
    });
};
