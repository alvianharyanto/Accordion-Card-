// accordion show - hide effect
const question = document.getElementsByClassName("question");
let i;
for (i = 0; i < question.length; i++) {
    // add click
    question[i].addEventListener("click", function () {
        // function hitung jumlah question & hilangkan aktif
        for (i = 0; i < question.length; i++) {
            question[i].classList.remove("active");
            question[i].nextElementSibling.classList.remove("show--answer");
        }
        // aktifkan jika sesuai kondisi
        this.classList.toggle("active");
        const answer = this.nextElementSibling;
        if (answer.className == "answer show--answer") {
            answer.classList.remove("show--answer");
        } else {
            answer.classList.toggle("show--answer");
        }
    });
}
question[1].click(); // aktif pertama load

//