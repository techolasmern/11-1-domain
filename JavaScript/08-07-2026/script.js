
const getStudents = () => {
    const list = localStorage.getItem("students");
    const students = list ? JSON.parse(list) : [];
    return students;
}

const updateStudentsList = () => {
    const studentContainer = document.getElementById("student-container");
    const students = getStudents();
    let innerText = "";
    students.forEach(student => {
        const rn = student.rollNumber;
        const name = student.name;
        innerText += "(" + rn + ") - " + name + " - <button onclick='deleteStudent("+rn+")'>Del</button><br>";
    })
    studentContainer.innerHTML = innerText;
}

window.onload = updateStudentsList;

function deleteStudent(rn) {
    const students = getStudents();
    const filteredStudents = students.filter(student => student.rollNumber != rn);
    localStorage.setItem("students", JSON.stringify(filteredStudents));
    return updateStudentsList();
}

const addStudent = (student) => {
    const localData = localStorage.getItem("students");
    const students = localData ? JSON.parse(localData) : [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    return updateStudentsList();
}

const form = document.getElementById("form");
const errorDisplay = document.querySelectorAll(".error");

form.addEventListener("input", () => {
    errorDisplay.forEach(item => item.innerHTML = "");
})

form.addEventListener("submit", event => {
    event.preventDefault();

    const rollNumber = document.form.rn.value;
    const rollNumberRegex = /^[0-9]{1,}$/;
    const name = document.form.name.value;
    const nameRegex = /^[a-zA-Z]{4,25}$/;
    const department = document.form.department.value;
    const departmentRegex = /^[a-zA-Z]{1,}$/;
    const phone = document.form.phone.value;
    const phoneRegex = /^[0-9]{10}$/;
    const email = document.form.email.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!rollNumber) {
        errorDisplay[0].innerHTML = "Please enter roll number.";
        return;
    }
    if (!rollNumberRegex.test(rollNumber)) {
        errorDisplay[0].innerHTML = "Roll number must be a number.";
        return;
    }
    if (!name) {
        errorDisplay[1].innerHTML = "Please enter name.";
        return;
    }
    if (!nameRegex.test(name)) {
        errorDisplay[1].innerHTML = "Name must be letters only and between 4 to 25 characters.";
        return;
    }
    if (!department) {
        errorDisplay[2].innerHTML = "Please enter department.";
        return;
    }
    if (!departmentRegex.test(department)) {
        errorDisplay[2].innerHTML = "Department must be letters only.";
        return;
    }
    if (!phone) {
        errorDisplay[3].innerHTML = "Please enter phone number.";
        return;
    }
    if (!phoneRegex.test(phone)) {
        errorDisplay[3].innerHTML = "Phone number must be 10 digits.";
        return;
    }
    if (!email) {
        errorDisplay[4].innerHTML = "Please enter email.";
        return;
    }
    if (!emailRegex.test(email)) {
        errorDisplay[4].innerHTML = "Email must be a valid email.";
        return;
    }
    const studentObj = {
        rollNumber: Number(rollNumber),
        name,
        department,
        phone: Number(phone),
        email
    }
    addStudent(studentObj);
})