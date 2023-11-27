let title = document.getElementById("title");
let author = document.getElementById("author");
let color = document.getElementById("color");
let btn = document.getElementById("btn");
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let radio3 = document.getElementById("radio3");
let table = document.getElementById("table");

btn.addEventListener("click", () => {
  let titleValue = title.value.trim();
  let authorValue = author.value.trim();
  let colorValue = color.value.trim();

  if (titleValue == "" || authorValue == "") {
    alert("inputlari doldurda gel");
    return;
  }

  let label;
  if (radio1.checked == true) {
    label = "Psychology";
  } else if (radio2.checked == true) {
    label = "Drama";
  } else if (radio3.checked == true) {
    label = "Motivation";
  }

  let setir = document.createElement("tr");
  let sutun1 = document.createElement("td");
  sutun1.innerHTML = title.value;
  let sutun2 = document.createElement("td");
  sutun2.innerHTML = author.value;
  let sutun3 = document.createElement("td");
  sutun3.innerHTML = label;

  setir.style.backgroundColor = colorValue;

  table.append(setir);
  setir.append(sutun1, sutun2, sutun3);

  title.value = "";
  author.value = "";
  color.value = "";
  radio1.checked = false;
  radio2.checked = false;
  radio3.checked = false;
});
