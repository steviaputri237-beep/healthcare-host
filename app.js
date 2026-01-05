// IMPORT dari firebase.js
import { getFasilitas } from "./firebase.js";

const container = document.getElementById("fasilitas-list");

async function tampilkanFasilitas() {
  const data = await getFasilitas();

  data.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <h3>${item.nama}</h3>
        <p>${item.layanan}</p>
        <p>${item.jam}</p>
      </div>
    `;
  });
}

tampilkanFasilitas();
// JavaScript Document