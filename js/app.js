/**
 * SWIMWITHUS AQUATICS - CORE FRONTEND APPLICATION
 * Reusable Components, Navigation, Search Modal, Product Card Renderer
 * Aquatic Editorial Art Direction
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initSearchOverlay();
  initMobileNav();
  initFooterYear();
});

// Sticky Header effect
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// Mobile Navigation Toggle
function initMobileNav() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const closeBtn = document.getElementById('mobileNavClose');

  if (!hamburgerBtn || !mobileNav) return;

  const openMenu = () => {
    mobileNav.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
    document.body.classList.add('no-scroll');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    mobileNav.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  };

  hamburgerBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  // Close menu on link click
  const navLinks = mobileNav.querySelectorAll('a');
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
}

// Global Live Search Overlay
function initSearchOverlay() {
  const searchTriggers = document.querySelectorAll('[data-open-search]');
  const searchModal = document.getElementById('searchModal');
  const searchClose = document.getElementById('searchModalClose');
  const searchBackdrop = document.getElementById('searchModalBackdrop');
  const searchInput = document.getElementById('globalSearchInput');
  const searchResults = document.getElementById('globalSearchResults');

  if (!searchModal || !searchInput) return;

  const openSearch = () => {
    searchModal.classList.add('is-open');
    if (searchBackdrop) searchBackdrop.classList.add('is-open');
    document.body.classList.add('no-scroll');
    searchInput.focus();
    if (searchInput.value.trim().length > 0) {
      renderLiveSearchResults(searchInput.value.trim());
    }
  };

  const closeSearch = () => {
    searchModal.classList.remove('is-open');
    if (searchBackdrop) searchBackdrop.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  };

  searchTriggers.forEach(btn => btn.addEventListener('click', openSearch));
  if (searchClose) searchClose.addEventListener('click', closeSearch);
  if (searchBackdrop) searchBackdrop.addEventListener('click', closeSearch);

  // Keyboard shortcut: '/' opens search, 'Escape' closes it
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openSearch();
    } else if (e.key === 'Escape' && searchModal.classList.contains('is-open')) {
      closeSearch();
    }
  });

  // Debounced search input handler
  let debounceTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      renderLiveSearchResults(e.target.value.trim());
    }, 200);
  });
}

// Render search results inside modal
function renderLiveSearchResults(query) {
  const resultsContainer = document.getElementById('globalSearchResults');
  if (!resultsContainer || typeof PRODUCTS_DATA === 'undefined') return;

  if (!query) {
    resultsContainer.innerHTML = `
      <div class="search-empty-state">
        <p>Type product name, model number (e.g. <em>AQ-16H</em>, <em>HW-302</em>), brand, or category to search.</p>
      </div>
    `;
    return;
  }

  const q = query.toLowerCase();
  const matched = PRODUCTS_DATA.filter(p => {
    return (
      p.name.toLowerCase().includes(q) ||
      (p.model && p.model.toLowerCase().includes(q)) ||
      (p.brand && p.brand.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q)) ||
      (p.flowRate && p.flowRate.toLowerCase().includes(q))
    );
  }).slice(0, 10); // show top 10 matches

  if (matched.length === 0) {
    resultsContainer.innerHTML = `
      <div class="search-empty-state">
        <p>No products found matching "<strong>${escapeHtml(query)}</strong>".</p>
        <p class="search-hint">Try searching by brand like <em>SOBO</em>, <em>SUNSUN</em>, or category like <em>Filter</em>, <em>Light</em>, <em>Heater</em>.</p>
      </div>
    `;
    return;
  }

  let html = `<div class="search-results-list">`;
  matched.forEach(item => {
    const priceDisplay = typeof item.price === 'number'
      ? `<span class="search-item-price">₹${item.price.toLocaleString('en-IN')}</span>`
      : `<span class="search-item-enquiry">Enquire for Price</span>`;

    html += `
      <a href="product-details.html?id=${encodeURIComponent(item.id)}" class="search-result-item">
        <div class="search-item-img-wrapper">
          <img src="${item.images[0]}" alt="${escapeHtml(item.name)}" loading="lazy" />
        </div>
        <div class="search-item-details">
          <div class="search-item-brand">${escapeHtml(item.brand || 'SwimWithUs')}</div>
          <div class="search-item-title">${escapeHtml(item.name)}</div>
          <div class="search-item-meta">
            ${item.model && item.model !== 'Standard' ? `<span class="search-item-badge">Model: ${escapeHtml(item.model)}</span>` : ''}
            ${item.flowRate ? `<span class="search-item-badge search-badge-flow">⚡ ${escapeHtml(item.flowRate)}</span>` : ''}
            <span class="search-item-category">${escapeHtml(item.category)}</span>
          </div>
        </div>
        <div class="search-item-right">
          ${priceDisplay}
          <span class="search-item-arrow">&rarr;</span>
        </div>
      </a>
    `;
  });
  html += `</div>`;
  html += `
    <div class="search-results-footer">
      <a href="products.html?search=${encodeURIComponent(query)}" class="btn-text">
        View all results in Shop &rarr;
      </a>
    </div>
  `;

  resultsContainer.innerHTML = html;
}

// Aquatic Editorial Art-Directed Product Card Generator
function createProductCardHtml(product) {
  if (!product) return '';

  const hasPrice = typeof product.price === 'number' && !isNaN(product.price);
  const formattedPrice = hasPrice ? `₹${product.price.toLocaleString('en-IN')}` : null;

  // Primary image
  const imgUrl = (product.images && product.images[0])
    ? product.images[0]
    : 'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=600&q=80';

  // WhatsApp enquiry pre-filled text
  const waMessage = encodeURIComponent(
    `Hello SwimWithUs Aquatics, I would like to enquire about:\n*${product.name}*\nBrand: ${product.brand || 'SwimWithUs'}\nModel: ${product.model || 'Standard'}\n` +
    (hasPrice ? `Price: ₹${product.price.toLocaleString('en-IN')}\n` : 'Price: Please confirm availability & pricing.\n') +
    `Product Link: https://swimwithusaquatics.com/product-details.html?id=${product.id}`
  );
  const waLink = `https://wa.me/919560448232?text=${waMessage}`;

  return `
    <article class="product-card" data-product-id="${escapeHtml(product.id)}">
      <div class="product-card-canvas">
        <a href="product-details.html?id=${encodeURIComponent(product.id)}" class="product-card-link" aria-label="View ${escapeHtml(product.name)}">
          <img 
            src="${imgUrl}" 
            alt="${escapeHtml(product.name)}" 
            class="product-card-img" 
            loading="lazy" 
            onerror="this.src='https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=600&q=80'"
          />
        </a>
        <div class="card-floating-taxonomy">
          ${product.brand ? `<span class="mono-chip">${escapeHtml(product.brand)}</span>` : ''}
          ${product.flowRate ? `<span class="mono-chip teal">⚡ ${escapeHtml(product.flowRate)}</span>` : ''}
        </div>
        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="card-wa-enquiry-trigger" title="Enquire on WhatsApp" aria-label="WhatsApp Enquiry for ${escapeHtml(product.name)}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/></svg>
        </a>
      </div>

      <div class="product-card-body">
        <div class="card-category-label">${escapeHtml(product.category)}</div>
        <h3 class="product-card-heading">
          <a href="product-details.html?id=${encodeURIComponent(product.id)}" title="${escapeHtml(product.name)}">${escapeHtml(product.name)}</a>
        </h3>
        ${product.model && product.model !== 'Standard' && product.model !== product.name ? `
          <div class="card-model-strip">
            <span>Model:</span> <strong>${escapeHtml(product.model)}</strong>
          </div>
        ` : ''}

        <div class="product-card-base">
          <div>
            ${hasPrice ? `
              <div class="card-price-value">₹${product.price.toLocaleString('en-IN')}</div>
            ` : `
              <div class="card-unpriced-pill">Enquire for Price</div>
            `}
          </div>
          <div class="card-action-cluster">
            <button 
              type="button" 
              class="btn-card-add" 
              onclick="addToCart('${escapeHtml(product.id)}', 1)" 
              title="Add to Cart" 
              aria-label="Add ${escapeHtml(product.name)} to cart">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                <path d="M3 6h18"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <span>Add</span>
            </button>
            <a 
              href="product-details.html?id=${encodeURIComponent(product.id)}" 
              class="btn-card-view" 
              title="View Product Details">
              Details
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
}

// Current year in footer
function initFooterYear() {
  const yearEls = document.querySelectorAll('#currentYear');
  yearEls.forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

// Escape HTML for XSS safety
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Format Indian Currency Helper
function formatPrice(amount) {
  if (typeof amount !== 'number') return '';
  return '₹' + amount.toLocaleString('en-IN');
}
