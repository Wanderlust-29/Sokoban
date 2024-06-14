import {initGrid} from "./grid.js";
import {handleMoves} from "./moves.js";

window.addEventListener("DOMContentLoaded", function(){
    initGrid();
    let box = document.querySelector(".face");

    document.addEventListener("keydown", handleMoves);
});