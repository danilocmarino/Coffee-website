
/*
  Dark Coffee - Menu Filter
  Filters coffee products by category.
*/

// Select the filter buttons and coffee cards
const filterButtons = document.querySelectorAll(".filter-btn");
const coffeeCards = document.querySelectorAll(".coffee-card");

// Add a click event to each button
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {

        // Get the selected category
        const category = button.dataset.filter;

        // Update the active button
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Show or hide coffee products
        coffeeCards.forEach((card) => {
            const coffeeCategory = card.dataset.category;

            if (category === "all" || category === coffeeCategory) {
                card.hidden = false;
            } else {
                card.hidden = true;
            }
        });
    });
});
