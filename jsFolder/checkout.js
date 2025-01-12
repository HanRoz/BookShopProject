$(document).ready(function () {
  // Load Navbar (if needed)
  $("#navbarDiv").load("navbar.html", function () {
    bindEvents();
  });

  // Load cart items from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Function to display cart items
  function displayCartItems() {
    const $cartTableBody = $(".cart-table tbody");
    $cartTableBody.empty();

    if (cart.length === 0) {
      $cartTableBody.html("<tr><td colspan='6'>Your cart is empty.</td></tr>");
      return;
    }

    cart.forEach((item, index) => {
      const $cartRow = $("<tr>");
      $cartRow.html(`
        <td><img src="${item.imgPath}" alt="${item.title}" width="50"></td>
        <td>${item.title}</td>
        <td>
          <div class="quantity-control">
            <div class="quantity-buttons">
              <button class="quantity-decrease" data-index="${index}">-</button>
              <input type="text" class="quantity-input" value="${item.quantity}" data-index="${index}">
              <button class="quantity-increase" data-index="${index}">+</button>
            </div>
          </div>
        </td>
        <td>${item.type}</td>
        <td>RM${item.price * item.quantity}</td>
        <td><button class="remove-btn" data-index="${index}">Remove</button></td>
      `);
      $cartTableBody.append($cartRow);
    });

    // Update order summary
    updateOrderSummary();
  }

  // Function to update order summary with discount
  function updateOrderSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const promoCode = $(".promo-code input").val().trim();
    let discount = 0;

    // Check if promo code is valid
    if (promoCode === "ibtida2025") {
      discount = subtotal * 0.1; // 10% discount
    }

    const tax = (subtotal - discount) * 0.1; // Assuming 10% tax
    const total = subtotal - discount + tax;

    $(".summary-details").html(`
      <p>Subtotal: <span>RM${subtotal.toFixed(2)}</span></p>
      ${discount > 0 ? `<p>Discount: <span>RM${discount.toFixed(2)}</span></p>` : ''}
      <p>Tax: <span>RM${tax.toFixed(2)}</span></p>
      <p>Total: <span>RM${total.toFixed(2)}</span></p>
    `);
  }

  // Function to show the next section and update the progress bar
  function showNextSection(currentSection, nextSection) {
    // Hide all sections except the next section
    $(".cart-section, .address-section, .contact-section, .payment-section, .review-section, .complete-section").hide();
    $(nextSection).show(); // Show the next section

    // Update the progress bar
    updateProgressBar(nextSection);

    // Toggle order summary visibility
    toggleOrderSummaryVisibility(nextSection);
  }

  // Function to update the progress bar
  function updateProgressBar(nextSection) {
    const progressSteps = $(".progress-step");
    progressSteps.removeClass("active");

    if (nextSection === ".cart-section") {
      $(".progress-step:nth-child(1)").addClass("active");
    } else if (nextSection === ".address-section") {
      $(".progress-step:nth-child(2)").addClass("active");
    } else if (nextSection === ".contact-section") {
      $(".progress-step:nth-child(3)").addClass("active");
    } else if (nextSection === ".payment-section") {
      $(".progress-step:nth-child(4)").addClass("active");
    } else if (nextSection === ".review-section") {
      $(".progress-step:nth-child(5)").addClass("active");
    } else if (nextSection === ".complete-section") {
      $(".progress-step:nth-child(6)").addClass("active");
    }
  }

  // Function to hide/show the order summary based on the current section
  function toggleOrderSummaryVisibility(currentSection) {
    if (currentSection === ".cart-section" || currentSection === ".review-section") {
      $(".order-summary").show(); // Show order summary
    } else {
      $(".order-summary").hide(); // Hide order summary
    }
  }

  // Bind Events
  function bindEvents() {
    // Apply promo code
    $(".apply-btn").on("click", function () {
      const promoCode = $(".promo-code input").val().trim();
      if (promoCode === "ibtida2025") {
        alert("Promo code applied! You got a 10% discount.");
        updateOrderSummary();
      } else {
        alert("Invalid promo code.");
      }
    });

    // Remove button
    $(document).on("click", ".remove-btn", function () {
      const index = $(this).data("index");
      cart.splice(index, 1); // Remove the item from the cart
      localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
      displayCartItems(); // Refresh the cart display
      updateOrderSummary(); // Update the order summary
    });

    // Increase quantity
    $(document).on("click", ".quantity-increase", function () {
      const index = $(this).data("index");
      cart[index].quantity += 1; // Increase the quantity
      localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
      displayCartItems(); // Refresh the cart display
      updateOrderSummary(); // Update the order summary
    });

    // Decrease quantity
    $(document).on("click", ".quantity-decrease", function () {
      const index = $(this).data("index");
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1; // Decrease the quantity
        localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
        displayCartItems(); // Refresh the cart display
        updateOrderSummary(); // Update the order summary
      }
    });

    // Checkout button
    $(".checkout-btn").on("click", function () {
      showNextSection(".cart-section", ".address-section");
      toggleOrderSummaryVisibility(".address-section");
    });

    // Next button for Address section
    $("#addressForm").on("submit", function (e) {
      e.preventDefault();
      showNextSection(".address-section", ".contact-section");
      toggleOrderSummaryVisibility(".contact-section");
    });

    // Next button for Contact section
    $("#contactForm").on("submit", function (e) {
      e.preventDefault();
      showNextSection(".contact-section", ".payment-section");
      toggleOrderSummaryVisibility(".payment-section");
    });

    // Next button for Payment section
    $("#paymentForm").on("submit", function (e) {
      e.preventDefault();
      showNextSection(".payment-section", ".review-section");
      toggleOrderSummaryVisibility(".review-section");
    });

    // Complete Order button
    $(".next-btn").on("click", function () {
      showNextSection(".review-section", ".complete-section");
      toggleOrderSummaryVisibility(".complete-section");
    });
  }

  // Display cart items on initial load
  displayCartItems();

  // Hide all sections except the cart section on initial load
  $(".address-section, .contact-section, .payment-section, .review-section, .complete-section").hide();
  toggleOrderSummaryVisibility(".cart-section");
});