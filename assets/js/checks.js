function checkWin()
{
    let winBox = document.querySelector(".goal.box");

    if(winBox !== null)
    {
        return true;
    }
}

export {checkWin};