// Save contact
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let contact = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            department: document.getElementById("department").value,
            position: document.getElementById("position").value
        };

        let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
        contacts.push(contact);
        localStorage.setItem("contacts", JSON.stringify(contacts));

        alert("Contact saved!");
        form.reset();
    });
}

// Display contacts
const table = document.getElementById("contactTable");

if (table) {
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.forEach((c, index) => {
        let row = `
            <tr>
                <td>${c.name}</td>
                <td>${c.email}</td>
                <td>${c.phone}</td>
                <td>${c.department}</td>
                <td class="actions">
                    <button class="details" onclick="showDetails(${index})">Details</button>
                    <button class="edit" onclick="editContact()">Edit</button>
                    <button class="delete" onclick="deleteContact(${index})">Delete</button>
                </td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

// Actions
function showDetails(index) {
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    let c = contacts[index];

    alert(
        `Name: ${c.name}\nEmail: ${c.email}\nPhone: ${c.phone}\nDepartment: ${c.department}\nPosition: ${c.position}`
    );
}

function editContact() {
    alert("Edit functionality coming soon!");
}

function deleteContact(index) {
    if (confirm("Are you sure you want to delete?")) {
        let contacts = JSON.parse(localStorage.getItem("contacts"));
        contacts.splice(index, 1);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        location.reload();
    }
}