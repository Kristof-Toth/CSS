var backdrop = document.querySelector(".backdrop");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobilNav = document.querySelector(".mobile-nav");

//console.dir(backdrop);

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    //modal.style.display = "block";
    //backdrop.style.display = "block";
    //modal.className = "open";

    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function () {
  mobilNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  //backdrop.style.display = "none";
  //modal.style.display = "none";

  if (modal) {
    modal.classList.remove("open");
  }

  backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", function () {
  //mobilNav.style.display = "block";
  //backdrop.style.display = "block";
  mobilNav.classList.add("open");
  backdrop.classList.add("open");
});
