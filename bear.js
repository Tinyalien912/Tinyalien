
document.addEventListener("DOMContentLoaded", function () {
    const bear = document.createElement("img");
    bear.src = "bear.png.png";
    bear.alt = "熊熊先生";
    bear.style.position = "fixed";
    bear.style.width = "100px";
    bear.style.bottom = Math.random() > 0.5 ? "10px" : "auto";
    bear.style.top = bear.style.bottom === "10px" ? "auto" : "10px";
    bear.style.left = Math.random() > 0.5 ? "10px" : "auto";
    bear.style.right = bear.style.left === "10px" ? "auto" : "10px";
    bear.style.zIndex = 9999;
    bear.style.transition = "transform 0.3s ease";
    bear.addEventListener("mouseover", () => {
        bear.style.transform = "rotate(-10deg) scale(1.1)";
    });
    bear.addEventListener("mouseout", () => {
        bear.style.transform = "none";
    });
    document.body.appendChild(bear);
});
