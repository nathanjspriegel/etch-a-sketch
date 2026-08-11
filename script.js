const container = document.querySelector(".container");
const btn = document.createElement("button");
btn.textContent = "New Grid";
btn.classList.add("btn");
document.body.insertBefore(btn, container);

btn.addEventListener("click", () => {
    let size = prompt("Enter number of squares per side (max 100):");
    size = Number(size);
    if (size > 0 && size <= 100) {
        newGrid(size);
    }
});

function newGrid(size) {
    container.innerHTML = "";

    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        const squareSize = 960 / size;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", (e) => {
            let count = Number(e.target.dataset.count) || 0;

            if (count === 0) {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);

                e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
            count++;
            e.target.dataset.count = count;

            let opacity = 1 - ((count - 1) / 9);
            e.target.style.opacity = Math.max(opacity, 0);
        });
        container.appendChild(square);
    }
}

newGrid(16);