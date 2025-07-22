
document.addEventListener("DOMContentLoaded", () => {
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");

  if (card1 && card2) {
    card1.addEventListener("click", () => {
      card1.style.display = "none";
      card2.style.display = "block";
    });

    card2.addEventListener("click", () => {
      card2.style.display = "none";
      card1.style.display = "block";
    });
  }
});
