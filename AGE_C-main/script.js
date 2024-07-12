function calculateAge() {
    var birthdate = document.getElementById('birthdate').value;
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    var day = today.getDate() - birthDate.getDate();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        month += 12;
    }

    if (day < 0) {
        month--;
        var prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        day += prevMonth.getDate();
    }

    document.getElementById('years').textContent = age;
    document.getElementById('months').textContent = month;
    document.getElementById('days').textContent = day;
}
