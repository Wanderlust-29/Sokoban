import {checkWin} from "./checks.js";

function getRowAndCol(box)
{
    let rowClass = box.classList[0];
    let colClass = box.classList[1];

    let pos = {
        row:null,
        col:null
    };

    pos.row = parseInt(rowClass.substring(rowClass.indexOf("-") + 1));
    pos.col = parseInt(colClass.substring(colClass.indexOf("-") + 1));

    return pos;
}
function getCharacterPos()
{
    let pos = null;
    let characterFace = document.querySelector(".face");
    let characterBack = document.querySelector(".back");
    let characterRight = document.querySelector(".right");
    let characterLeft = document.querySelector(".left");

    if(characterFace !== null)
    {
        pos = getRowAndCol(characterFace);
    }

    if(characterBack !== null)
    {
        pos = getRowAndCol(characterBack);
    }

    if(characterLeft !== null)
    {
        pos = getRowAndCol(characterLeft);
    }

    if(characterRight !== null)
    {
        pos = getRowAndCol(characterRight);
    }

    return pos;
}

function getBoxPos()
{
    let pos = null;
    let box = document.querySelector(".box");
    pos = getRowAndCol(box);

    return pos;
}

function getGoalPos()
{
    let pos = null;
    let goal = document.querySelector(".goal");
    pos = getRowAndCol(goal);

    return pos;
}

function canIMove(destinationPos)
{
    let box = document.querySelector(`.row-${destinationPos.row}.col-${destinationPos.col}`);

    if(box.classList.contains("stone"))
    {
        return false;
    }

    return true;
}

function canTheBoxMove(destinationPos)
{
    let box = document.querySelector(`.row-${destinationPos.row}.col-${destinationPos.col}`);

    if(box.classList.contains("stone"))
    {
        return false;
    }

    return true;
}

function moveUp()
{
    let characterPos = getCharacterPos();
    let boxPos = getBoxPos();

    /* Check if the box is above the character */
    if(boxPos.row === (characterPos.row -1) && boxPos.col === characterPos.col)
    {
        // I have to move the box
        if(canIMove({row:characterPos.row -1, col:characterPos.col}) && canTheBoxMove({ row : boxPos.row -1, col : boxPos.col}))
        {
            let old = document.querySelector(`.row-${characterPos.row}.col-${characterPos.col}`);
            old.classList.remove("face");
            old.classList.remove("left");
            old.classList.remove("right");
            old.classList.remove("back");

            let char = document.querySelector(`.row-${characterPos.row - 1}.col-${characterPos.col}`);
            char.classList.add("back");

            let oldBox = document.querySelector(`.row-${boxPos.row}.col-${boxPos.col}`);
            oldBox.classList.remove("box");

            let box = document.querySelector(`.row-${characterPos.row - 2}.col-${characterPos.col}`);
            box.classList.add("box");
        }
    }
    else
    {
        if(canIMove({row:characterPos.row -1, col:characterPos.col}))
        {
            let old = document.querySelector(`.row-${characterPos.row}.col-${characterPos.col}`);
            old.classList.remove("face");
            old.classList.remove("left");
            old.classList.remove("right");
            old.classList.remove("back");

            let char = document.querySelector(`.row-${characterPos.row - 1}.col-${characterPos.col}`);
            char.classList.add("back");
        }
    }
}

function moveDown()
{
    let characterPos = getCharacterPos();
    let boxPos = getBoxPos();

    /* Check if the box is below the character */
    if(boxPos.row === (characterPos.row + 1) && boxPos.col === characterPos.col)
    {
        // I have to move the box
        if(canIMove({row:characterPos.row + 1, col:characterPos.col}) && canTheBoxMove({ row : boxPos.row + 1, col : boxPos.col}))
        {
            let old = document.querySelector(`.row-${characterPos.row}.col-${characterPos.col}`);
            old.classList.remove("face");
            old.classList.remove("left");
            old.classList.remove("right");
            old.classList.remove("back");

            let char = document.querySelector(`.row-${characterPos.row + 1}.col-${characterPos.col}`);
            char.classList.add("face");

            let oldBox = document.querySelector(`.row-${boxPos.row}.col-${boxPos.col}`);
            oldBox.classList.remove("box");

            let box = document.querySelector(`.row-${characterPos.row + 2}.col-${characterPos.col}`);
            box.classList.add("box");
        }
    }
    else
    {
        if(canIMove({row:characterPos.row  + 1, col:characterPos.col}))
        {
            let old = document.querySelector(`.row-${characterPos.row}.col-${characterPos.col}`);
            old.classList.remove("face");
            old.classList.remove("left");
            old.classList.remove("right");
            old.classList.remove("back");

            let char = document.querySelector(`.row-${characterPos.row + 1}.col-${characterPos.col}`);
            char.classList.add("face");
        }
    }
}

function moveLeft()
{
    let characterPos = getCharacterPos();
    let boxPos = getBoxPos();

    /* Check if the box is next to the character */
    if(boxPos.row === (characterPos.row) && boxPos.col === (characterPos.col - 1))
    {
        // I have to move the box
        if(canIMove({row:characterPos.row, col:characterPos.col - 1}) && canTheBoxMove({ row : boxPos.row, col : boxPos.col - 1}))
        {
            let old = document.querySelector(`.row-${characterPos.row}.col-${characterPos.col}`);
            old.classList.remove("face");
            old.classList.remove("left");
            old.classList.remove("right");
            old.classList.remove("back");

            let char = document.querySelector(`.row-${characterPos.row}.col-${characterPos.col - 1}`);
            char.classList.add("left");

            let oldBox = document.querySelector(`.row-${boxPos.row}.col-${boxPos.col}`);
            oldBox.classList.remove("box");

            let box = document.querySelector(`.row-${characterPos.row}.col-${characterPos.col - 2}`);
            box.classList.add("box");
        }
    }
    else
    {
        if(canIMove({row:characterPos.row, col:characterPos.col - 1}))
        {
            let old = document.querySelector(`.row-${characterPos.row}.col-${characterPos.col}`);
            old.classList.remove("face");
            old.classList.remove("left");
            old.classList.remove("right");
            old.classList.remove("back");

            let char = document.querySelector(`.row-${characterPos.row}.col-${characterPos.col - 1}`);
            char.classList.add("left");
        }
    }
}

function moveRight()
{
    let characterPos = getCharacterPos();
    let boxPos = getBoxPos();

    /* Check if the box is next to the character */
    if(boxPos.row === (characterPos.row) && boxPos.col === (characterPos.col + 1))
    {
        // I have to move the box
        if(canIMove({row:characterPos.row, col:characterPos.col + 1}) && canTheBoxMove({ row : boxPos.row, col : boxPos.col + 1}))
        {
            let old = document.querySelector(`.row-${characterPos.row}.col-${characterPos.col}`);
            old.classList.remove("face");
            old.classList.remove("left");
            old.classList.remove("right");
            old.classList.remove("back");

            let char = document.querySelector(`.row-${characterPos.row}.col-${characterPos.col + 1}`);
            char.classList.add("right");

            let oldBox = document.querySelector(`.row-${boxPos.row}.col-${boxPos.col}`);
            oldBox.classList.remove("box");

            let box = document.querySelector(`.row-${characterPos.row}.col-${characterPos.col + 2}`);
            box.classList.add("box");
        }
    }
    else
    {
        if(canIMove({row:characterPos.row, col:characterPos.col + 1}))
        {
            let old = document.querySelector(`.row-${characterPos.row}.col-${characterPos.col}`);
            old.classList.remove("face");
            old.classList.remove("left");
            old.classList.remove("right");
            old.classList.remove("back");

            let char = document.querySelector(`.row-${characterPos.row}.col-${characterPos.col + 1}`);
            char.classList.add("right");
        }
    }
}

function handleMoves(event)
{
    switch (event.key)
    {
        case "w" :
            moveUp();
            break;
        case "a":
            moveLeft();
            break;
        case "d" :
            moveRight();
            break;
        case "s" :
            moveDown();
            break;
        default:
            break;
    }

    if(checkWin())
    {
        alert("Gagné !");
    }
}

export { handleMoves };