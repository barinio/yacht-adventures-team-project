// Виконуємо після того, як весь документ завантажився
document.addEventListener("DOMContentLoaded", function () {
  const partials = [
      { name: "header", url: "./partials/header.html" },
  ];

  function fetchAndInsertPartial(partial) {
    fetch(partial.url)
      .then((response) => response.text())
      .then((html) => {
        document.getElementById(partial.name).innerHTML = html;
      })
      .catch((error) => {
        console.error(`Error loading ${partial.name}: ${error}`);
      });
  }

  // Читаємо кожний partial зі списку вверху і замінюємо 
  // html всередині елемента заданого name на вмістиме файла в url
  partials.forEach((partial) => {
    fetchAndInsertPartial(partial);
  });
});