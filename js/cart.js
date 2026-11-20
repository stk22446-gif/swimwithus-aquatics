/**
 * SWIMWITHUS AQUATICS - SHOPPING CART SYSTEM
 * Vanilla JavaScript & LocalStorage Cart Implementation
 * Features: Add, Remove, Quantity Change, Null Price Handling, WhatsApp Order Encoder
 */

const CART_STORAGE_KEY = 'swimwithus_cart_v1';

// Read cart from LocalStorage
function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading cart from localStorage', e);
    return [];
  }
}

// Save cart and notify DOM listeners
function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadges();
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart } }));
  } catch (e) {
    console.error('Error saving cart to localStorage', e);
  }
}

// Add item to cart
function addToCart(productId, quantity = 1) {
  if (typeof PRODUCTS_DATA === 'undefined') {
    console.error('PRODUCTS_DATA not loaded');
    return;
  }

  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) {
    showToast('Product not found.', 'error');
    return;
  }

  const qty = parseInt(quantity, 10) || 1;
  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === productId);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      model: product.model,
      category: product.category,
      price: product.price, // can be number or null
      image: (product.images && product.images[0]) ? product.images[0] : '',
      quantity: qty
    });
  }

  saveCart(cart);
  showToast(`Added "${product.name}" to your cart!`, 'success');
}

// Update quantity
function updateCartQuantity(productId, newQty) {
  const qty = parseInt(newQty, 10);
  let cart = getCart();

  if (qty <= 0) {
    removeFromCart(productId);
    return;
  }

  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = qty;
    saveCart(cart);
  }
}

// Remove item from cart
function removeFromCart(productId) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  const name = item ? item.name : 'Item';
  cart = cart.filter(i => i.id !== productId);
  saveCart(cart);
  showToast(`Removed "${name}" from cart.`, 'info');
}

// Clear all items
function clearCart() {
  saveCart([]);
  showToast('Your shopping cart has been cleared.', 'info');
}

// Exact Business Shipping Configuration
const SHIPPING_CONFIG = {
  freeShippingThreshold: 1000,
  standardShippingFee: 100,
  // Configurable rule for exact ₹1,000 subtotal:
  // Set to 'FREE' for free shipping, or 100 for standard shipping fee
  exactThousandRule: 'FREE'
};

/**
 * Calculate shipping charges strictly according to business rule:
 * - Below ₹1,000: ₹100
 * - Above ₹1,000: FREE
 * - Exactly ₹1,000: Configurable (defaults to 'FREE')
 */
function calculateShipping(subtotal) {
  const amt = Number(subtotal) || 0;
  if (amt <= 0) {
    return {
      fee: 0,
      label: '₹0',
      isFree: false,
      amountNeededForFree: SHIPPING_CONFIG.freeShippingThreshold
    };
  }

  if (amt < SHIPPING_CONFIG.freeShippingThreshold) {
    const diff = SHIPPING_CONFIG.freeShippingThreshold - amt;
    return {
      fee: SHIPPING_CONFIG.standardShippingFee,
      label: `₹${SHIPPING_CONFIG.standardShippingFee}`,
      isFree: false,
      amountNeededForFree: diff
    };
  } else if (amt > SHIPPING_CONFIG.freeShippingThreshold) {
    return {
      fee: 0,
      label: 'FREE',
      isFree: true,
      amountNeededForFree: 0
    };
  } else {
    // Exactly ₹1,000 subtotal
    if (SHIPPING_CONFIG.exactThousandRule === 'FREE') {
      return {
        fee: 0,
        label: 'FREE',
        isFree: true,
        amountNeededForFree: 0,
        isExactThreshold: true
      };
    } else {
      return {
        fee: SHIPPING_CONFIG.standardShippingFee,
        label: `₹${SHIPPING_CONFIG.standardShippingFee}`,
        isFree: false,
        amountNeededForFree: 0,
        isExactThreshold: true
      };
    }
  }
}

/**
 * Generate a unique sequential Order ID
 * Format: SWA-YYYYMMDD-XXX (e.g. SWA-20261120-001)
 */
function generateOrderId() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const dateKey = `${year}${month}${day}`;

  const counterKey = `swa_order_counter_${dateKey}`;
  let count = 1;
  try {
    const existing = localStorage.getItem(counterKey);
    if (existing) {
      count = parseInt(existing, 10) + 1;
    }
    localStorage.setItem(counterKey, String(count));
  } catch (e) {
    count = Math.floor(Math.random() * 900) + 100;
  }

  const seq = String(count).padStart(3, '0');
  return `SWA-${dateKey}-${seq}`;
}

// Calculate totals and check for unpriced items
function calculateCartTotals() {
  const cart = getCart();
  let totalConfirmedPrice = 0;
  let totalItemCount = 0;
  let hasUnpricedItems = false;
  let unpricedCount = 0;

  cart.forEach(item => {
    totalItemCount += item.quantity;
    if (typeof item.price === 'number' && !isNaN(item.price)) {
      totalConfirmedPrice += item.price * item.quantity;
    } else {
      hasUnpricedItems = true;
      unpricedCount += item.quantity;
    }
  });

  const shipping = calculateShipping(totalConfirmedPrice);
  const finalPayableTotal = totalConfirmedPrice + shipping.fee;

  return {
    itemCount: totalItemCount,
    lineItemsCount: cart.length,
    totalConfirmedPrice,
    subtotal: totalConfirmedPrice,
    shipping,
    finalPayableTotal,
    hasUnpricedItems,
    unpricedCount
  };
}

// Update badges on all headers and mobile bars
function updateCartBadges() {
  const totals = calculateCartTotals();
  const badges = document.querySelectorAll('.cart-count-badge, .cart-counter-chip, #cartCount');
  badges.forEach(badge => {
    badge.textContent = totals.itemCount;
    if (totals.itemCount > 0) {
      badge.classList.remove('hidden');
      badge.style.display = 'inline-flex';
    } else {
      badge.style.display = 'none';
    }
  });
}

// Build WhatsApp Cart Message
function buildWhatsAppCartMessage(customerInfo = {}) {
  const cart = getCart();
  if (cart.length === 0) return '';

  const totals = calculateCartTotals();
  const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');

  let text = `Hello SwimWithUs Aquatics!\n\n`;
  text += `I would like to place an order enquiry for the following products from your website:\n\n`;

  cart.forEach((item, index) => {
    text += `${index + 1}. *${item.name}*\n`;
    text += `   • Brand: ${item.brand || 'SwimWithUs'}\n`;
    if (item.model && item.model !== 'Standard') {
      text += `   • Model: ${item.model}\n`;
    }
    text += `   • Quantity: ${item.quantity}\n`;
    if (typeof item.price === 'number') {
      text += `   • Price: ₹${item.price.toLocaleString('en-IN')} each (Subtotal: ₹${(item.price * item.quantity).toLocaleString('en-IN')})\n`;
    } else {
      text += `   • Price: Confirmation required on enquiry\n`;
    }
    text += `   • Product Link: ${baseUrl}product-details.html?id=${encodeURIComponent(item.id)}\n\n`;
  });

  text += `------------------------------------\n`;
  text += `*Order Summary:*\n`;
  text += `• Total Items: ${totals.itemCount}\n`;

  if (!totals.hasUnpricedItems) {
    text += `• Estimated Total Amount: ₹${totals.totalConfirmedPrice.toLocaleString('en-IN')}\n`;
  } else {
    if (totals.totalConfirmedPrice > 0) {
      text += `• Subtotal of confirmed items: ₹${totals.totalConfirmedPrice.toLocaleString('en-IN')}\n`;
    }
    text += `• Note: Some products require price & stock confirmation.\n`;
  }

  if (customerInfo.name) {
    text += `\n*Customer Details:*\n`;
    text += `• Name: ${customerInfo.name}\n`;
    if (customerInfo.city) text += `• City / Pincode: ${customerInfo.city}\n`;
    if (customerInfo.notes) text += `• Special Notes: ${customerInfo.notes}\n`;
  }

  text += `\nPlease confirm product availability, total price, and Pan India delivery details. Thank you!`;

  return text;
}

// Direct single-product WhatsApp Enquiry
function buildSingleProductWhatsAppMessage(product, quantity = 1) {
  if (!product) return '';
  const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');
  const qty = parseInt(quantity, 10) || 1;

  let text = `Hello SwimWithUs Aquatics!\n\n`;
  text += `I am interested in the following product from your website:\n\n`;
  text += `*${product.name}*\n`;
  text += `• Brand: ${product.brand || 'SwimWithUs'}\n`;
  if (product.model && product.model !== 'Standard') {
    text += `• Model: ${product.model}\n`;
  }
  if (product.flowRate) {
    text += `• Flow Rate: ${product.flowRate}\n`;
  }
  text += `• Quantity: ${qty}\n`;

  if (typeof product.price === 'number') {
    text += `• Price: ₹${product.price.toLocaleString('en-IN')} each\n`;
    if (qty > 1) {
      text += `• Subtotal: ₹${(product.price * qty).toLocaleString('en-IN')}\n`;
    }
  } else {
    text += `• Price: Please share pricing\n`;
  }

  text += `• Product Link: ${baseUrl}product-details.html?id=${encodeURIComponent(product.id)}\n\n`;
  text += `Please share availability, delivery time, and payment options for Pan India shipping.`;

  return text;
}

// Open WhatsApp with encoded text
function openWhatsApp(message) {
  const phone = '919560448232';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// Notification Toast Utility
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconSvg = '';
  if (type === 'success') {
    iconSvg = '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>';
  } else if (type === 'error') {
    iconSvg = '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
  } else {
    iconSvg = '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
  }

  toast.innerHTML = `
    ${iconSvg}
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()" aria-label="Close notification">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-fadeout');
    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 300);
  }, 3500);
}

/**
 * Build formal WhatsApp Order Placement Message
 * Conforms strictly to required format:
 * - Order Header: 🐠 SWIMWITHUS AQUATICS
 * - Order Prefix: SWA (e.g. SWA-20261120-001)
 * - Customer Details (Name, Mobile, Email, Full Address, City, State, PIN, Notes)
 * - Numbered items with variants, prices, subtotals, links
 * - Subtotal, Shipping, Final Total
 * - Payment Policy notice
 */
function buildWhatsAppOrderPlacementMessage(orderDetails) {
  const {
    orderId,
    dateTimeStr,
    orderDate,
    customer = {},
    items = [],
    subtotal = 0,
    shipping,
    shippingFee,
    isFreeShipping,
    finalTotal,
    total
  } = orderDetails;

  const displayDate = dateTimeStr || orderDate || new Date().toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true
  });

  const actualShipping = (shipping && typeof shipping.fee !== 'undefined') ? shipping : {
    fee: typeof shippingFee === 'number' ? shippingFee : (isFreeShipping ? 0 : (subtotal >= 1000 ? 0 : 100)),
    isFree: typeof isFreeShipping === 'boolean' ? isFreeShipping : (shippingFee === 0 || subtotal >= 1000)
  };

  const payableTotal = (typeof finalTotal === 'number') ? finalTotal : ((typeof total === 'number') ? total : (subtotal + actualShipping.fee));

  const custMobile = customer.mobile || customer.phone || '';
  const formattedMobile = custMobile ? (custMobile.startsWith('+91') ? custMobile : `+91 ${custMobile}`) : 'Not Provided';

  const baseUrl = (typeof window !== 'undefined' && window.location && window.location.origin)
    ? window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/')
    : 'https://swimwithusaquatics.com/';

  let text = `🐠 SWIMWITHUS AQUATICS — NEW ORDER PLACEMENT REQUEST\n`;
  text += `════════════════════════════════════════\n`;
  text += `📋 Order ID: ${orderId}\n`;
  text += `📅 Date & Time: ${displayDate}\n`;
  text += `════════════════════════════════════════\n\n`;

  text += `👤 CUSTOMER & DELIVERY INFORMATION:\n`;
  text += `• Full Name: ${customer.fullName || customer.name || 'Not Provided'}\n`;
  text += `• Mobile Number: ${formattedMobile}\n`;
  text += `• Email: ${customer.email || 'Not Provided'}\n`;
  text += `• Delivery Address: ${customer.address || 'Not Provided'}\n`;
  text += `• City: ${customer.city || 'Not Provided'}\n`;
  text += `• State: ${customer.state || 'Not Provided'}\n`;
  text += `• PIN Code: ${customer.pincode || customer.pin || 'Not Provided'}\n`;
  if (customer.notes && customer.notes.trim()) {
    text += `• Delivery Notes / Instructions: ${customer.notes.trim()}\n`;
  }
  text += `\n`;

  text += `🛍️ ORDER ITEMS (${items.length} product${items.length === 1 ? '' : 's'}):\n`;
  items.forEach((item, index) => {
    const itemPrice = typeof item.price === 'number' ? item.price : 0;
    const itemSubtotal = itemPrice * item.quantity;
    text += `${index + 1}. *${item.name}*\n`;
    if (item.model && item.model !== 'Standard' && item.model !== item.name) {
      text += `   • Model / Variant: ${item.model}\n`;
    }
    if (item.brand) {
      text += `   • Brand: ${item.brand}\n`;
    }
    text += `   • Quantity: ${item.quantity}\n`;
    text += `   • Unit Price: ₹${itemPrice.toLocaleString('en-IN')}\n`;
    text += `   • Product Subtotal: ₹${itemSubtotal.toLocaleString('en-IN')}\n`;
    text += `   • Link: ${baseUrl}product-details.html?id=${encodeURIComponent(item.id)}\n\n`;
  });

  text += `────────────────────────────────────────\n`;
  text += `💵 PAYMENT & TOTAL SUMMARY:\n`;
  text += `• Product Subtotal: ₹${subtotal.toLocaleString('en-IN')}\n`;
  if (actualShipping.isFree) {
    text += `• Shipping Charges: FREE (${subtotal >= 1000 ? 'Order qualifies for Free Shipping' : 'Free Shipping applied'})\n`;
  } else {
    text += `• Shipping Charges: ₹${actualShipping.fee} (Standard Pan India Shipping)\n`;
  }
  text += `• Final Payable Total: ₹${payableTotal.toLocaleString('en-IN')}\n`;
  text += `────────────────────────────────────────\n\n`;

  text += `📌 PAYMENT INFORMATION & POLICY:\n`;
  text += `• Cash on Delivery (COD) is not available for live livestock and bioactive habitats.\n`;
  text += `• Orders are prepaid via UPI or Bank Transfer after product availability and shipping confirmation.\n`;
  text += `• Customers must wait for order confirmation and payment instructions before making payment.\n`;
  text += `• This WhatsApp order request is a confirmation request, not proof of payment.\n\n`;

  text += `🏪 STORE & DISPATCH DETAILS:\n`;
  text += `SwimWithUs Aquatics • Owner: Amit Kumar\n`;
  text += `Address: House No. 320, Gali 19A, Swatantra Nagar, Narela, Delhi – 110040\n`;
  text += `WhatsApp: +91 95604 48232 • Pan India Delivery\n`;
  text += `Thank you for choosing SwimWithUs Aquatics!`;

  return text;
}

// Initial badge update on load
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadges();
});

// Export for module systems or attach to window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getCart,
    saveCart,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    calculateCartTotals,
    calculateShipping,
    generateOrderId,
    SHIPPING_CONFIG,
    buildWhatsAppCartMessage,
    buildSingleProductWhatsAppMessage,
    buildWhatsAppOrderPlacementMessage,
    openWhatsApp,
    showToast,
    updateCartBadges
  };
} else if (typeof window !== 'undefined') {
  window.SHIPPING_CONFIG = SHIPPING_CONFIG;
  window.calculateShipping = calculateShipping;
  window.generateOrderId = generateOrderId;
  window.buildWhatsAppOrderPlacementMessage = buildWhatsAppOrderPlacementMessage;
}
