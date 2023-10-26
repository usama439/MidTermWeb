document.addEventListener("DOMContentLoaded", function () {
  const faqContainer = document.querySelector(".faq-container");
  const questionInput = document.getElementById("questionInput");
  const answerInput = document.getElementById("answerInput");
  const addButton = document.getElementById("addButton");

  addButton.addEventListener("click", function () {
    const question = questionInput.value;
    const answer = answerInput.value;

    if (question && answer) {
      const newFaqCard = document.createElement("div");
      newFaqCard.classList.add("faq");
      newFaqCard.innerHTML = `
          <h3 class="faq-title">${question}</h3>
          <p class="faq-text">${answer}</p>
          <button class="faq-toggle">
            <i class="fas fa-chevron-down"></i>
            <i class="fas fa-times"></i>
          </button>
        `;

      faqContainer.insertBefore(
        newFaqCard,
        document.querySelector(".faq-input")
      );
      questionInput.value = "";
      answerInput.value = "";

      const newFaqTitle = newFaqCard.querySelector(".faq-title");
      const newFaqText = newFaqCard.querySelector(".faq-text");
      const newFaqChevronIcon = newFaqCard.querySelector(".fa-chevron-down");
      const newFaqCloseIcon = newFaqCard.querySelector(".fa-times");

      newFaqTitle.addEventListener("click", () => {
        newFaqCard.classList.toggle("active");
        newFaqText.classList.toggle("active");
      });

      newFaqChevronIcon.addEventListener("click", (event) => {
        event.stopPropagation();
        newFaqCard.classList.toggle("active");
        newFaqText.classList.toggle("active");
      });

      newFaqCloseIcon.addEventListener("click", () => {
        // Remove the 'newFaqCard' (card) when the close icon is clicked
        faqContainer.removeChild(newFaqCard);
      });

      newFaqText.classList.add("active");
    }
  });

  const faqItems = document.querySelectorAll(".faq");

  faqItems.forEach((item) => {
    const faqTitle = item.querySelector(".faq-title");
    const faqText = item.querySelector(".faq-text");
    const faqChevronIcon = item.querySelector(".fa-chevron-down");
    const faqCloseIcon = item.querySelector(".fa-times");

    faqTitle.addEventListener("click", () => {
      item.classList.toggle("active");
      faqText.classList.toggle("active");
    });

    faqChevronIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      item.classList.toggle("active");
      faqText.classList.toggle("active");
    });

    faqCloseIcon.addEventListener("click", () => {
      // Remove the 'item' (card) when the close icon is clicked
      faqContainer.removeChild(item);
    });

    faqText.classList.add("active");
  });
});
