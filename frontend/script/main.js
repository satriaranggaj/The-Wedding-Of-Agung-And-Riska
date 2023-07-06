const navbar = document.querySelector('ul.nav');
const induk = document.querySelector('div.container.induk');
const cover = document.getElementById('cover')

function buka(){
    navbar.style.visibility = 'visible';
    navbar.style.opacity = '1';
    navbar.style.transform = 'translateY(0)';
    induk.style.maxHeight = '100%';
    induk.removeAttribute('overflow');
    cover.style.visibility = 'hidden';
    cover.style.opacity = '0';
    cover.style.height = '0';

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
}

let launchDate = "29 July 2023 09:00 AM";
let inputs = document.querySelectorAll("span");

function hitungMundur(){
    let end = new Date(launchDate);
    let start = new Date();

    let diff = (end - start) / 1000;
    if (diff < 0) return;

    inputs[0].innerHTML = Math.floor(diff / 3600 / 24);
    inputs[1].innerHTML = Math.floor((diff / 3600) % 24);
    inputs[2].innerHTML = Math.floor((diff / 60) % 60);
    inputs[3].innerHTML = Math.floor(diff) % 60;
}
setInterval(() => {
    hitungMundur();
}, 1000);

// const form = document.getElementById('greeting-card-form');
// const greetingCardsContainer = document.getElementById('scroll-kartu');
// let cardIndex = 1;

// // Tangani pengiriman formulir
// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Ambil nilai dari input dan textarea
//   const senderName = document.getElementById('sender-name').value;
//   const message = document.getElementById('message').value;

//   // Buat kartu ucapan menggunakan nilai yang diambil
//   const cardContent = `
//     <div class="greeting-card" id="card-${cardIndex}">
//       <h6>${senderName}</h6>
//       <hr>
//       <p>${message}</p>
//     </div>
//   `;

//   // Tambahkan kartu ucapan ke dalam wadah kartu ucapan
//   greetingCardsContainer.innerHTML += cardContent;

//   // Simpan kartu ucapan ke dalam LocalStorage
//   localStorage.setItem(`card-${cardIndex}`, cardContent);

//   // Reset formulir
//   form.reset();

//   // Tambahkan 1 ke indeks kartu ucapan
//   cardIndex++;
// });

// // Cek apakah ada kartu ucapan yang disimpan di LocalStorage saat halaman dimuat
// window.addEventListener('DOMContentLoaded', function() {
//   for (let i = 1; i <= localStorage.length; i++) {
//     const cardContent = localStorage.getItem(`card-${i}`);
//     if (cardContent) {
//       greetingCardsContainer.innerHTML += cardContent;
//       cardIndex++;
//     }
//   }
// });


function copyRekening(elementId) {
  const rekElement = document.getElementById(elementId);
  const rekText = rekElement.innerText;

  navigator.clipboard.writeText(rekText)
    .then(() => {
      alert('Nomor rekening berhasil disalin!');
    })
    .catch((error) => {
      alert('Gagal menyalin nomor rekening: ' + error);
    });
};

const audio = document.getElementById("myAudio");

window.addEventListener("DOMContentLoaded", () => {
  audio.play();
});

