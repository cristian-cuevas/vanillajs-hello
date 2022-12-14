/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#id").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console");
};
let generateExcuse = () => {
  let who = ["el perro", "mi abuela", "su tortuga", "mi pájaro"];
  let what = ["comer", "enojar", "aplastar", "romper"];
  let when = [
    "antes de la clase",
    "justo a tiempo",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras oraba"
  ];

  let primero = Math.floor(Math.random() * who.length);
  let segundo = Math.floor(Math.random() * what.length);
  let tercero = Math.floor(Math.random() * when.length);

  return who[primero] + " " + what[segundo] + " " + when[tercero];
};
