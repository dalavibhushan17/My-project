let employees = JSON.parse(
    localStorage.getItem("employees") || "[]"
);

function addEmployee() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (!name || !email) {
        alert("Please enter name and email");
        return;
    }

    employees.push({ name, email });

    localStorage.setItem("employees", JSON.stringify(employees));

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    showEmployees();
}

function showEmployees() {
    let list = document.getElementById("employeeList");
    let search = document.getElementById("search").value.toLowerCase();

    list.innerHTML = "";

    employees.forEach((emp, index) => {
        if ((emp.name + emp.email).toLowerCase().includes(search)) {
            let li = document.createElement("li");
            li.textContent = emp.name + " - " + emp.email + " ";

            let btn = document.createElement("button");
            btn.textContent = "Delete";
            btn.className = "delete";

            btn.onclick = function () {
                employees.splice(index, 1);
                localStorage.setItem("employees", JSON.stringify(employees));
                showEmployees();
            };

            li.appendChild(btn);
            list.appendChild(li);
        }
    });
}

showEmployees();