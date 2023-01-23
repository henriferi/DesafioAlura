let textResultValue = "";

document.getElementById("cript").addEventListener("click", () => {
  let textarea = document.getElementById("text");
  if (textarea.value) {
    textarea = textarea.value.toLowerCase()
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    document.getElementById("initalResult").classList.remove("view");
    document.getElementById("initalResult").classList.add("not-view");

    document.getElementById("resultText").classList.remove("not-view");
    document.getElementById("resultText").classList.add("view");

    document.getElementById("resultValue").innerHTML = textarea;
    textResultValue = textarea;
  } else {
    alert("Preencha o campo!");
  }
});

document.getElementById("descrip").addEventListener("click", () => {
  let textarea = document.getElementById("text");
  if (textarea.value) {
    textarea = textarea.value.toLowerCase()
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    document.getElementById("resultValue").innerHTML = textarea;
    textResultValue = textarea;
  } else {
    alert("Preencha o campo!");
  }
});

document.getElementById("copy").addEventListener("click", () => {
  document.getElementById("resultValue").select();
  document.execCommand("copy");
});