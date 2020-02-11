let toolbox = [];

const addNewTool = (tool) => {
    toolbox.push(tool);
} 

const renderList = () => {
    const tools = document.getElementById("toolbox");
    tools.innerHTML = "";

    toolbox.forEach(tool => {
        let li = document.createElement("li");
        li.innerText = tool;
        tools.appendChild(li);
    });

    const toolovi = Array.from(document.querySelectorAll("#toolbox li"));

    toolovi.forEach(elem => elem.addEventListener('click', (e) => {
        toolbox.splice(toolbox.indexOf(e.target.innerText), 1);
        renderList();
    }));
}

const alati = Array.from(document.querySelectorAll("#alati li"));

alati.forEach(elem => elem.addEventListener('click', (e) => {
    addNewTool(e.target.innerText);
    renderList();
}));

