const scriptURL = "https://script.google.com/macros/s/AKfycbywHtzzvnXdzopIpSt8Ziw4HF44OrpZxUYMai_R4aONl4h2QIt6SUS7VPoc88v1PxXM/exec";
    const form = document.forms["form"];
    const dateInput = document.getElementById("Tanggal Request");
    const inputReq = document.getElementById("Nama");
    const inputReq2 = document.getElementById("Kelas");
    const inputReq3 = document.getElementById("Judul lagu");
    const inputReq4 = document.getElementById("Pesan");

    form.addEventListener("submit", (e) => {
        
      e.preventDefault();
      // alert
      alert('Request Kamu Sudah Diterima!');
      // tanggal
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const dd = String(now.getDate()).padStart(2, "0");
      const hh = String(now.getHours()).padStart(2, "0");
      const min = String(now.getMinutes()).padStart(2, "0");

      dateInput.value = `${yyyy}-${mm}-${dd} ${hh}:${min}`;

      console.log("Tanggal yang dikirim:", dateInput.value);

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
        // ngosongin
        inputReq.value = " ";
        inputReq2.value = " ";
        inputReq3.value = " ";
        inputReq4.value = " ";

    });