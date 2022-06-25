const modalBg = document.querySelector(".modal_bg");
const modal = document.querySelector(".modal");
const openModal = document.querySelectorAll(".about_link");
const closeModal = document.querySelector("close_modal");

openModal.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    modalBg.classList.add("active");
    modal.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  modalBg.classList.remove("active");
  modal.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target === modalBg) {
    modalBg.classList.remove("active");
    modal.classList.remove("active");
  }
});
