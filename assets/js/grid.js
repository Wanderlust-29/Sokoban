function placeGoal()
{
    let row = Math.floor(Math.random() * (9 - 1) + 1);
    let col = Math.floor(Math.random() * (9 - 1) + 1);

    let box = document.querySelector(`.row-${row}.col-${col}`);
    box.classList.add("goal");
}

function placeCharacter()
{
    let row = Math.floor(Math.random() * (9 - 1) + 1);
    let col = Math.floor(Math.random() * (9 - 1) + 1);

    let box = document.querySelector(`.row-${row}.col-${col}`);
    box.classList.add("face");
}

function placeBox()
{
    let row = Math.floor(Math.random() * (8 - 2) + 2);
    let col = Math.floor(Math.random() * (8 - 2) + 2);

    let box = document.querySelector(`.row-${row}.col-${col}`);
    box.classList.add("box");
}
function fillGrid()
{
    for(let i = 0; i < 10; i++)
    {
        for(let j = 0; j < 10; j++)
        {
            let box = document.querySelector(`.row-${i}.col-${j}`);
            
            if(i === 0 || i === 9 || j === 0 || j === 9)
            {
                box.classList.add("stone");
            }
            else
            {
                box.classList.add("wood");
            }
        }
    }
}

function initGrid()
{
    let grid= document.getElementById("grid");

    for(let i = 0; i < 10; i++)
    {
        for(let j = 0; j < 10; j++)
        {
            let box = document.createElement("div");
            box.classList.add(`row-${i}`);
            box.classList.add(`col-${j}`);
            grid.appendChild(box);
        }
    }

    fillGrid();
    placeGoal();
    placeBox();
    placeCharacter();
}

function renderGrid()
{

}

export {initGrid, renderGrid, placeCharacter, placeBox};