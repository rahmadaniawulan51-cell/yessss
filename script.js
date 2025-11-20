function tambahReview() {
    let nama = document.getElementById("nama").value;
    let makanan = document.getElementById("makanan").value;
    let rating = document.getElementById("rating").value;
    let komentar = document.getElementById("komentar").value;

    if (!nama || !makanan || !rating || !komentar) {
        alert("Harap isi semua data!");
        return;
    }

    let review = {
        nama: nama,
        makanan: makanan,
        rating: rating,
        komentar: komentar
    };

    let data = JSON.parse(localStorage.getItem("reviewList")) || [];
    data.push(review);
    localStorage.setItem("reviewList", JSON.stringify(data));

    tampilkanReview();
    alert("Review berhasil disimpan!");
}

function tampilkanReview() {
    let container = document.getElementById("list-review");
    container.innerHTML = "";

    let data = JSON.parse(localStorage.getItem("reviewList")) || [];

    data.forEach((r, i) => {
        container.innerHTML += `
            <div class="review-card">
                <h3>${r.makanan} - ⭐${r.rating}</h3>
                <p><b>Reviewer:</b> ${r.nama}</p>
                <p>${r.komentar}</p>
            </div>
        `;
    });
}

tampilkanReview();
