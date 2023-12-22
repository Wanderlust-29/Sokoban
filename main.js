function textures() {
  const grid = document.querySelector(".grid");
  const outlines = document.querySelectorAll(
    ".row-1, .col-1, .row-10, .col-10"
  );
  const woods = document.querySelectorAll(
    ".row-2:not(.col-1, .col-10), .row-3:not(.col-1, .col-10), .row-4:not(.col-1, .col-10), .row-5:not(.col-1, .col-10), .row-6:not(.col-1, .col-10), .row-7:not(.col-1, .col-10), .row-8:not(.col-1, .col-10), .row-9:not(.col-1, .col-10)"
  );
  const player = document.querySelector("div.col.col-2.row-2");

  const box = document.querySelector("div.col.col-4.row-6");
  const goal = document.querySelector("div.col.col-9.row-9");

  outlines.forEach((outline) => {
    outline.style.backgroundImage = "url('src/stone.svg')";
  });

  woods.forEach((wood) => {
    wood.style.backgroundImage = "url('src/wood.svg')";
  });
  player.style.backgroundImage = "url('src/face.svg'),url('src/wood.svg')";
  box.style.backgroundImage = "url('src/box.svg'),url('src/wood.svg')";
  goal.style.backgroundImage = "url('src/goal.svg'),url('src/wood.svg')";
}

function displayGrid() {
  const body = document.querySelector(".container");
  const rows = 10;
  const cols = 10;
  const grid = document.createElement("main");
  grid.classList.add("grid");

  for (let i = 1; i <= rows; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j = 1; j <= cols; j++) {
      let newCol = document.createElement("div");
      newCol.classList.add("col", "col-" + j, "row-" + i);
      newRow.appendChild(newCol);
    }
    grid.appendChild(newRow);
  }
  body.appendChild(grid);
  textures();
}
displayGrid();
