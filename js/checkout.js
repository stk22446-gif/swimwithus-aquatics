/**
 * SWIMWITHUS AQUATICS - CHECKOUT & WHATSAPP ORDER CONTROLLER
 * Handles customer input validation, dynamic order summary rendering,
 * shipping rule calculations, and formatted WhatsApp order transmission.
 */

document.addEventListener('DOMContentLoaded', () => {
  initCheckoutPage();
});

function initCheckoutPage() {
  const form = document.getElementById('checkoutForm');
  const btnPlaceOrder = document.getElementById('btnPlaceOrderWhatsApp');
  const itemsContainer = document.getElementById('checkoutItemsList');
  const emptyView = document.getElementById('checkoutEmptyView');
  const mainGrid = document.getElementById('checkoutMainGrid');
  const unpricedCard = document.getElementById('unpricedBlockerCard');
  const unpricedMsg = document.getElementById('unpricedBlockerMsg');
  const btnEnquireUnpriced = document.getElementById('btnEnquireUnpriced');

  const subtotalEl = document.getElementById('calcSubtotalDisplay');
  const shippingEl = document.getElementById('calcShippingDisplay');
  const totalEl = document.getElementById('calcFinalTotalDisplay');
  const badgeCountEl = document.getElementById('summaryBadgeCount');
  const shippingBanner = document.getElementById('shippingIncentiveBanner');
  const shippingText = document.getElementById('shippingIncentiveText');

  // Input elements
  const inputFullName = document.getElementById('custFullName');
  const inputMobile = document.getElementById('custMobile');
  const inputEmail = document.getElementById('custEmail');
  const inputAddress = document.getElementById('custAddress');
  const inputCity = document.getElementById('custCity');
  const selectState = document.getElementById('custState');
  const inputPincode = document.getElementById('custPincode');
  const inputNotes = document.getElementById('custNotes');

  // Error elements
  const errFullName = document.getElementById('errFullName');
  const errMobile = document.getElementById('errMobile');
  const errEmail = document.getElementById('errEmail');
  const errAddress = document.getElementById('errAddress');
  const errCity = document.getElementById('errCity');
  const errState = document.getElementById('errState');
  const errPincode = document.getElementById('errPincode');

  // State
  let isSubmitting = false;

  // 1. Restore previously entered customer details from localStorage
  restoreSavedFormDetails();

  // 2. Initial Render of Checkout Summary
  renderCheckoutSummary();

  // 3. Listen to external cart changes
  window.addEventListener('cartUpdated', () => {
    renderCheckoutSummary();
  });

  // 4. Save form details on user input
  const formInputs = [inputFullName, inputMobile, inputEmail, inputAddress, inputCity, selectState, inputPincode, inputNotes];
  formInputs.forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        saveFormDetails();
        clearInlineError(input);
      });
      input.addEventListener('blur', () => {
        validateSingleField(input);
      });
    }
  });

  // 5. Render Checkout Summary & Verify Pricing
  function renderCheckoutSummary() {
    const cart = getCart();

    if (!cart || cart.length === 0) {
      if (mainGrid) mainGrid.classList.add('hidden');
      if (emptyView) emptyView.classList.remove('hidden');
      return;
    }

    if (mainGrid) mainGrid.classList.remove('hidden');
    if (emptyView) emptyView.classList.add('hidden');

    const totals = calculateCartTotals();
    const itemCount = totals.itemCount;

    if (badgeCountEl) {
      badgeCountEl.textContent = `${itemCount} Item${itemCount === 1 ? '' : 's'}`;
    }

    // Check for unpriced products
    const unpricedItems = cart.filter(item => typeof item.price !== 'number' || isNaN(item.price) || item.price <= 0);

    if (unpricedItems.length > 0) {
      // Blocker active
      if (unpricedCard) unpricedCard.classList.remove('hidden');
      const itemNames = unpricedItems.map(i => `"${i.name}"`).join(', ');
      if (unpricedMsg) {
        unpricedMsg.innerHTML = `
          The following equipment requires price confirmation before ordering: <strong>${escapeHtml(itemNames)}</strong>.
          Automated checkout requires all products to have confirmed prices. Please message founder Amit Kumar on WhatsApp to verify current pricing, or remove unpriced items from your cart to proceed.
        `;
      }
      if (btnPlaceOrder) {
        btnPlaceOrder.disabled = true;
        btnPlaceOrder.title = 'Checkout disabled: Please remove unpriced items or enquire directly on WhatsApp.';
      }
      if (btnEnquireUnpriced) {
        btnEnquireUnpriced.onclick = () => {
          const msg = buildWhatsAppCartMessage();
          openWhatsApp(msg);
        };
      }
    } else {
      if (unpricedCard) unpricedCard.classList.add('hidden');
      if (btnPlaceOrder) {
        btnPlaceOrder.disabled = false;
        btnPlaceOrder.title = 'Place order on WhatsApp';
      }
    }

    // Render Line Items
    let itemsHtml = '';
    cart.forEach(item => {
      const hasPrice = typeof item.price === 'number' && !isNaN(item.price);
      const unitPriceStr = hasPrice ? `₹${item.price.toLocaleString('en-IN')}` : 'Enquire';
      const lineSubtotalStr = hasPrice ? `₹${(item.price * item.quantity).toLocaleString('en-IN')}` : 'Requires Confirmation';

      itemsHtml += `
        <div class="summary-item-row" data-id="${escapeHtml(item.id)}">
          <div class="summary-item-thumb">
            <img src="${item.image || 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=400&q=80'}" alt="${escapeHtml(item.name)}" />
          </div>
          <div class="summary-item-details">
            <span class="summary-item-name">${escapeHtml(item.name)}</span>
            <div class="summary-item-meta">
              <span>Qty: ${item.quantity} &times; ${unitPriceStr}</span>
              ${item.model && item.model !== 'Standard' && item.model !== item.name ? ` &bull; <span>${escapeHtml(item.model)}</span>` : ''}
            </div>
          </div>
          <div class="summary-item-price-col">
            ${lineSubtotalStr}
          </div>
        </div>
      `;
    });
    if (itemsContainer) itemsContainer.innerHTML = itemsHtml;

    // Subtotal, Shipping, and Final Total calculation
    const subtotal = totals.totalConfirmedPrice;
    const shipping = calculateShipping(subtotal);
    const finalTotal = subtotal + shipping.fee;

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;

    if (shippingEl) {
      if (shipping.isFree) {
        shippingEl.innerHTML = `<span class="shipping-badge-free">FREE SHIPPING</span>`;
      } else {
        shippingEl.textContent = `₹${shipping.fee}`;
      }
    }

    if (totalEl) {
      totalEl.textContent = `₹${finalTotal.toLocaleString('en-IN')}`;
    }

    // Shipping threshold notification banner
    if (shippingBanner && shippingText) {
      if (shipping.isFree) {
        shippingBanner.classList.add('qualified');
        shippingText.innerHTML = `<strong>🎉 Qualified for Free Pan India Shipping!</strong> (Orders above ₹1,000 qualify)`;
      } else {
        shippingBanner.classList.remove('qualified');
        const diff = shipping.amountNeededForFree;
        shippingText.innerHTML = `Add <strong>₹${diff.toLocaleString('en-IN')}</strong> more to qualify for <strong>FREE Pan India Shipping</strong>.`;
      }
    }
  }

  // 6. Input Validation Logic
  function validateSingleField(input) {
    if (!input) return true;
    const id = input.id;
    const val = input.value.trim();

    if (id === 'custFullName') {
      if (val.length < 2) {
        showError(input, errFullName, 'Please enter your full name (minimum 2 characters).');
        return false;
      }
      clearInlineError(input, errFullName);
      return true;
    }

    if (id === 'custMobile') {
      const cleanDigits = val.replace(/\D/g, '').slice(-10);
      const isValidMobile = /^[6-9]\d{9}$/.test(cleanDigits);
      if (!isValidMobile) {
        showError(input, errMobile, 'Please enter a valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9).');
        return false;
      }
      clearInlineError(input, errMobile);
      return true;
    }

    if (id === 'custEmail') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(val)) {
        showError(input, errEmail, 'Please enter a valid email address (e.g. rahul@gmail.com).');
        return false;
      }
      clearInlineError(input, errEmail);
      return true;
    }

    if (id === 'custAddress') {
      if (val.length < 8) {
        showError(input, errAddress, 'Please enter your complete delivery address (minimum 8 characters).');
        return false;
      }
      clearInlineError(input, errAddress);
      return true;
    }

    if (id === 'custCity') {
      if (val.length < 2) {
        showError(input, errCity, 'Please enter your city/town.');
        return false;
      }
      clearInlineError(input, errCity);
      return true;
    }

    if (id === 'custState') {
      if (!val) {
        showError(input, errState, 'Please select your delivery state/UT.');
        return false;
      }
      clearInlineError(input, errState);
      return true;
    }

    if (id === 'custPincode') {
      const pinRegex = /^[1-9][0-9]{5}$/;
      if (!pinRegex.test(val)) {
        showError(input, errPincode, 'Please enter a valid 6-digit postal PIN code.');
        return false;
      }
      clearInlineError(input, errPincode);
      return true;
    }

    return true;
  }

  function validateAllFields() {
    let isValid = true;
    let firstInvalid = null;

    const fieldsToValidate = [
      { input: inputFullName, err: errFullName },
      { input: inputMobile, err: errMobile },
      { input: inputEmail, err: errEmail },
      { input: inputAddress, err: errAddress },
      { input: inputCity, err: errCity },
      { input: selectState, err: errState },
      { input: inputPincode, err: errPincode }
    ];

    fieldsToValidate.forEach(item => {
      const valid = validateSingleField(item.input);
      if (!valid) {
        isValid = false;
        if (!firstInvalid) firstInvalid = item.input;
      }
    });

    if (!isValid && firstInvalid) {
      firstInvalid.focus();
      firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return isValid;
  }

  function showError(input, errEl, msg) {
    if (input) {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
    }
    if (errEl) {
      errEl.classList.remove('hidden');
      if (msg) {
        const textSpan = errEl.querySelector('span');
        if (textSpan) textSpan.textContent = msg;
      }
    }
  }

  function clearInlineError(input, errEl) {
    if (input) {
      input.classList.remove('is-invalid');
      if (input.value.trim().length > 0) {
        input.classList.add('is-valid');
      } else {
        input.classList.remove('is-valid');
      }
    }
    if (errEl) {
      errEl.classList.add('hidden');
    } else if (input) {
      const fieldContainer = input.closest('.form-group');
      if (fieldContainer) {
        const foundErr = fieldContainer.querySelector('.field-error-msg');
        if (foundErr) foundErr.classList.add('hidden');
      }
    }
  }

  // 7. Save & Restore Form Details
  function saveFormDetails() {
    try {
      const data = {
        fullName: inputFullName ? inputFullName.value : '',
        mobile: inputMobile ? inputMobile.value : '',
        email: inputEmail ? inputEmail.value : '',
        address: inputAddress ? inputAddress.value : '',
        city: inputCity ? inputCity.value : '',
        state: selectState ? selectState.value : '',
        pincode: inputPincode ? inputPincode.value : '',
        notes: inputNotes ? inputNotes.value : ''
      };
      localStorage.setItem('swa_checkout_cust_data', JSON.stringify(data));
    } catch (e) {
      // ignore
    }
  }

  function restoreSavedFormDetails() {
    try {
      const raw = localStorage.getItem('swa_checkout_cust_data');
      if (!raw) return;
      const data = JSON.parse(raw);
      if (inputFullName && data.fullName) inputFullName.value = data.fullName;
      if (inputMobile && data.mobile) inputMobile.value = data.mobile;
      if (inputEmail && data.email) inputEmail.value = data.email;
      if (inputAddress && data.address) inputAddress.value = data.address;
      if (inputCity && data.city) inputCity.value = data.city;
      if (selectState && data.state) selectState.value = data.state;
      if (inputPincode && data.pincode) inputPincode.value = data.pincode;
      if (inputNotes && data.notes) inputNotes.value = data.notes;
    } catch (e) {
      // ignore
    }
  }

  // 8. Place Order on WhatsApp Execution
  if (btnPlaceOrder) {
    btnPlaceOrder.addEventListener('click', (e) => {
      e.preventDefault();

      if (isSubmitting) return;

      // Check cart existence
      const cart = getCart();
      if (!cart || cart.length === 0) {
        showToast('Your cart is empty. Please add products before checking out.', 'error');
        return;
      }

      // Check unpriced items
      const unpricedItems = cart.filter(item => typeof item.price !== 'number' || isNaN(item.price) || item.price <= 0);
      if (unpricedItems.length > 0) {
        showToast('Your cart contains unpriced equipment. Checkout is only allowed for products with confirmed prices.', 'error');
        if (unpricedCard) {
          unpricedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // Validate customer fields
      const isFormValid = validateAllFields();
      if (!isFormValid) {
        showToast('Please fix the highlighted fields to proceed.', 'error');
        return;
      }

      // Prevent duplicate clicks
      isSubmitting = true;
      btnPlaceOrder.disabled = true;
      const originalBtnText = btnPlaceOrder.innerHTML;
      btnPlaceOrder.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="spin-icon">
          <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
          <line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
        </svg>
        <span>Preparing Order...</span>
      `;

      try {
        // Collect customer info
        const customer = {
          fullName: inputFullName.value.trim(),
          mobile: inputMobile.value.trim().replace(/\D/g, '').slice(-10),
          email: inputEmail.value.trim(),
          address: inputAddress.value.trim(),
          city: inputCity.value.trim(),
          state: selectState.value.trim(),
          pincode: inputPincode.value.trim(),
          notes: inputNotes ? inputNotes.value.trim() : ''
        };

        // Calculations
        const totals = calculateCartTotals();
        const subtotal = totals.totalConfirmedPrice;
        const shipping = calculateShipping(subtotal);
        const finalTotal = subtotal + shipping.fee;

        // Generate sequential unique Order ID
        const orderId = generateOrderId();

        // Generate formatted date & time
        const now = new Date();
        const options = { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
        const dateTimeStr = now.toLocaleDateString('en-IN', options);

        // Prepare order details object
        const orderDetails = {
          orderId,
          dateTimeStr,
          customer,
          items: cart,
          subtotal,
          shipping,
          finalTotal
        };

        // Build formatted WhatsApp message
        const waMessage = buildWhatsAppOrderPlacementMessage(orderDetails);

        // Store last placed order
        try {
          localStorage.setItem('swa_last_order', JSON.stringify(orderDetails));
        } catch (e) {
          // ignore
        }

        // Open WhatsApp directly to SwimWithUs Aquatics business number (+91 95604 48232)
        const waUrl = `https://wa.me/919560448232?text=${encodeURIComponent(waMessage)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');

        // Show Order Handoff Confirmation Modal
        showSuccessModal(orderDetails);

        // Safely clear the cart after handoff so duplicate orders are avoided
        clearCart();

      } catch (err) {
        console.error('Error placing order:', err);
        showToast('An error occurred while compiling your order. Please try again.', 'error');
        btnPlaceOrder.disabled = false;
        btnPlaceOrder.innerHTML = originalBtnText;
        isSubmitting = false;
      }
    });
  }

  // 9. Show Success Modal
  function showSuccessModal(order) {
    const modal = document.getElementById('orderSuccessModal');
    if (!modal) return;

    const modalId = document.getElementById('modalOrderId');
    const modalName = document.getElementById('modalCustName');
    const modalCity = document.getElementById('modalCustCity');
    const modalTotal = document.getElementById('modalOrderTotal');

    if (modalId) modalId.textContent = order.orderId;
    if (modalName) modalName.textContent = order.customer.fullName;
    if (modalCity) modalCity.textContent = `${order.customer.city}, ${order.customer.state} (${order.customer.pincode})`;
    if (modalTotal) modalTotal.textContent = `₹${order.finalTotal.toLocaleString('en-IN')}`;

    modal.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }
}
