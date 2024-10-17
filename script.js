function generateCV() {
    let nameField = document.getElementById("nameField").value;
    let jobFiled = document.getElementById("jobFiled").value;
    let contactField = document.getElementById("contactField").value;

    document.getElementById("nameT1").innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;
    document.getElementById("jobT").innerHTML = jobFiled;
    document.getElementById("contactT").innerHTML = contactField;

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

function printCV() {
    window.print();
}