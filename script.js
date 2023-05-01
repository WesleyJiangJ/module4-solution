let names = [];

function nameCheck() {
    a = document.getElementById('name').value;
    names.push(a)
    a = document.getElementById('name').value = "";

    document.getElementById("push").innerHTML = JSON.stringify(names, null, 2);
};

function showArray() {
    for (var i = 0; i < names.length; i++) {
        if (names[i].charAt(0) === "J" || names[i].charAt(0) === "j") {
            const listElement = document.createElement("li");
            listElement.textContent = "Goodbye " + names[i]
            document.body.appendChild(listElement);
        }
        else {
            const listElement = document.createElement("li");
            listElement.textContent = "Hello " + names[i]
            document.body.appendChild(listElement);
        }
    }
};