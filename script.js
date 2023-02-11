const nodes = document.querySelectorAll("*");
console.log(nodes);
const list = document.getElementById("list");
nodes.forEach((data) => {
    const parent = document.createElement("li");
    parent.innerHTML = data.nodeName;
    if (data.childNodes.length != 0) {
        const child = document.createElement("span");
        child.innerHTML = "<br>" + "Child nodes :";
        data.childNodes.forEach((data) => {
            child.innerHTML += "<br>" + data.nodeName;
        });
        parent.appendChild(child)
    }
    list.appendChild(parent);
})