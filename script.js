document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const form = document.getElementById("popupForm");
    const successMessage = document.getElementById("successMessage");

    // Show the popup after 1 second
    setTimeout(() => {
        popup.classList.add("active");
    }, 1000);

    // Close the popup when the close button is clicked
    closePopup.addEventListener("click", () => {
        popup.classList.remove("active");
    });

    // Optional: Close the popup if the user clicks outside the popup-content
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.classList.remove("active");
        }
    });

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;
        const training = document.getElementById("training").value;

        // Check if all fields are filled (already handled by 'required', but double-check)
        if (name && email && mobile && training) {
            // Show the success message
            successMessage.textContent = "Thank you for your message. It has been sent.";
            successMessage.style.display = "block";

            // Optionally clear the form
            form.reset();
        }
    });
});
