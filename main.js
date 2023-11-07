let taskTile=document.getElementById("TaskTilte");
let btn = document.getElementById("btn");
let  output =document.getElementById("output");
btn.addEventListener("click",function(ev){
    ev.preventDefault();
    let taskTileValue =taskTile.value.trim();
    function AddTask (taskTileValue){
        return `<div>
        <h2>${taskTileValue}</h2>
        <div id="dlt">Done</div>
    </div>`;

    }
    output.insertAdjacentHTML("afterbegin" , AddTask(taskTileValue));
});


