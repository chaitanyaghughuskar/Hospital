document.getElementById("appointment-form").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    if (!name || !email || !service || !date) {
        e.preventDefault();
        alert("Please fill out all fields before submitting.");
    }
});
