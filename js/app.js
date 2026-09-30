/**
 * BYDELUNE: Storefront Engine & Interactivity
 * Figma Catalog 1:1 Implementation, Dual Currency (AED / IDR),
 * Live Cart Drawer, Wishlist Drawer, Search Modal, and Quick View.
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. PRODUCT CATALOG DATA (12 Products from Figma Export)
  // =========================================================================
  const products = [
    // Grid 1: Most Wanted
    {
      id: 'prod-01',
      name: 'Bonjour Cable Sweater',
      category: 'Hoodies & Knitwear',
      collection: 'Most Wanted',
      badge: 'Most Wanted',
      priceAED: 349,
      priceIDR: 1485000,
      image: 'images/product-01.webp',
      description: 'Chunky cable knit sweater crafted from 100% ethically sourced merino wool. Features ribbed cuffs, relaxed crew neck, and subtle tone-on-tone embroidery script.',
      sizes: ['S', 'M', 'L', 'XL'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-02',
      name: 'Blow Up Tee',
      category: 'Tees',
      collection: 'Most Wanted',
      badge: 'Most Wanted',
      priceAED: 315,
      priceIDR: 1340000,
      image: 'images/product-02.webp',
      description: 'Vintage collegiate styled polo tee in two-tone racing green and ecru stripes. Heavyweight 280gsm organic jersey cotton with open collar construction.',
      sizes: ['S', 'M', 'L', 'XL'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-03',
      name: 'Washed Zip Hoodie',
      category: 'Hoodies & Knitwear',
      collection: 'Most Wanted',
      badge: 'Most Wanted',
      priceAED: 374,
      priceIDR: 1590000,
      image: 'images/product-03.webp',
      description: 'Sun-faded mineral wash hoodie with dual-way brushed metal zipper. Custom relaxed drape with drop shoulders and double-layered heavyweight hood.',
      sizes: ['S', 'M', 'L', 'XL'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-04',
      name: 'Matcha Club Tee',
      category: 'Tees',
      collection: 'Most Wanted',
      badge: 'Most Wanted',
      priceAED: 247,
      priceIDR: 1050000,
      image: 'images/product-04.webp',
      description: 'Boxy cut graphic tee with ceramic cup artwork print. Enzyme washed for an ultra-soft hand feel, pre-shrunk organic cotton with reinforced rib collar.',
      sizes: ['XS', 'S', 'M', 'L'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },

    // Grid 2: Essentials
    {
      id: 'prod-05',
      name: 'Sand Ribbed Tank',
      category: 'Woman',
      collection: 'Essentials',
      badge: 'Essentials',
      priceAED: 166,
      priceIDR: 710000,
      image: 'images/product-05.webp',
      description: 'Sculpting fine-ribbed tank top in warm sand tone. Form-flattering stretch organic cotton blend with clean square neck profile and seamless hemlines.',
      sizes: ['XS', 'S', 'M', 'L'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-06',
      name: 'Washed Denim Jacket',
      category: 'Outerwear',
      collection: 'Essentials',
      badge: 'Essentials',
      priceAED: 400,
      priceIDR: 1700000,
      image: 'images/product-06.webp',
      description: 'Washed charcoal selvedge denim jacket with boxy cropped silhouette, antique silver shank hardware, and twin chest flap pockets.',
      sizes: ['S', 'M', 'L', 'XL'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-07',
      name: 'Ivory Cable Sweater',
      category: 'Hoodies & Knitwear',
      collection: 'Essentials',
      badge: 'Essentials',
      priceAED: 336,
      priceIDR: 1430000,
      image: 'images/product-07.webp',
      description: 'Cropped ivory cable-knit pullover in lightweight airy wool blend. Delicate braided texture with softly rounded neckline and elongated ribbed sleeves.',
      sizes: ['XS', 'S', 'M', 'L'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-08',
      name: 'Skyline Oversized Long',
      category: 'Tees',
      collection: 'Essentials',
      badge: 'Essentials',
      priceAED: 264,
      priceIDR: 1120000,
      image: 'images/product-08.webp',
      description: 'Nautical sky blue and optic white bold striped long sleeve. Relaxed drop shoulder with wide ribbed cuffs and architectural side-slit hem.',
      sizes: ['S', 'M', 'L', 'XL'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },

    // Grid 3: Caps & Accessories
    {
      id: 'prod-09',
      name: 'Pasta Club Cap',
      category: 'Caps',
      collection: 'Essentials',
      badge: 'Essentials',
      priceAED: 255,
      priceIDR: 1085000,
      image: 'images/product-09.webp',
      description: 'Two-tone foam trucker cap with forest green visor and white crown mesh back. Features custom embroidered "Hot Girls Eat Pasta" script and snapback closure.',
      sizes: ['One Size'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-10',
      name: 'Crimson Cord Cap',
      category: 'Caps',
      collection: 'Essentials',
      badge: 'Essentials',
      priceAED: 277,
      priceIDR: 1180000,
      image: 'images/product-10.webp',
      description: 'Unstructured 6-panel dad cap in vintage crimson corduroy. Brass buckle strap closure with tonal eyelets and curved visor.',
      sizes: ['One Size'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-11',
      name: 'Cream Cord Cap',
      category: 'Caps',
      collection: 'Essentials',
      badge: 'Essentials',
      priceAED: 277,
      priceIDR: 1180000,
      image: 'images/product-11.webp',
      description: 'Classic low-profile cap crafted from wide-wale cream corduroy. Soft unstructured crown with custom engraved antique metal slider backstrap.',
      sizes: ['One Size'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-12',
      name: 'Olive Utility Cap',
      category: 'Caps',
      collection: 'Essentials',
      badge: 'Essentials',
      priceAED: 255,
      priceIDR: 1085000,
      image: 'images/product-12.webp',
      description: '5-panel military camper cap in water-repellent olive ripstop cotton. Low profile with nylon webbed clip backstrap.',
      sizes: ['One Size'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    }
  ];

  // =========================================================================
  // 2. APPLICATION STATE
  // =========================================================================
  const state = {
    currency: 'AED', // Default matches Figma export (AED)
    wishlist: new Set(['prod-01', 'prod-03']),
    cart: [
      { id: 'prod-01', size: 'M', quantity: 1 }
    ],
    activeProduct: null
  };

  // Price formatting helper
  function formatPrice(item) {
    if (!item) return '';
    if (state.currency === 'IDR') {
      return 'Rp ' + Number(item.priceIDR).toLocaleString('id-ID');
    }
    return `AED ${item.priceAED}`;
  }

  function formatAmount(amountAED, amountIDR) {
    if (state.currency === 'IDR') {
      return 'Rp ' + Number(amountIDR).toLocaleString('id-ID');
    }
    return `AED ${amountAED}`;
  }

  // =========================================================================
  // 3. DOM ELEMENTS
  // =========================================================================
  const overlay = document.getElementById('drawer-overlay');
  const cartDrawer = document.getElementById('cart-drawer');
  const wishlistDrawer = document.getElementById('wishlist-drawer');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const searchModal = document.getElementById('search-modal');
  const quickViewModal = document.getElementById('quickview-modal');
  const policyModal = document.getElementById('policy-modal');
  const toastNotice = document.getElementById('toast-notice');

  // Counters
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const wishlistCountBadges = document.querySelectorAll('.wishlist-count-badge');

  // Containers
  const cartItemsList = document.getElementById('cart-items-list');
  const cartSubtotalEl = document.getElementById('cart-subtotal-val');
  const cartShippingNotice = document.getElementById('cart-shipping-notice');
  const wishlistItemsList = document.getElementById('wishlist-items-list');

  // Currency Toggle Buttons
  const currencyBtns = document.querySelectorAll('.currency-btn');

  // =========================================================================
  // 4. TOAST NOTIFICATION
  // =========================================================================
  let toastTimer = null;
  function showToast(message) {
    if (!toastNotice) return;
    toastNotice.textContent = message;
    toastNotice.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2800);
  }

  // =========================================================================
  // 5. DRAWER & MODAL MANAGEMENT
  // =========================================================================
  function closeAllPanels() {
    overlay?.classList.remove('open');
    cartDrawer?.classList.remove('open');
    wishlistDrawer?.classList.remove('open');
    mobileNavDrawer?.classList.remove('open');
    searchModal?.classList.remove('open');
    quickViewModal?.classList.remove('open');
    policyModal?.classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  function openDrawer(drawer) {
    closeAllPanels();
    overlay?.classList.add('open');
    drawer?.classList.add('open');
    document.body.classList.add('modal-open');
  }

  // Global overlay click
  overlay?.addEventListener('click', closeAllPanels);

  // Close triggers
  document.querySelectorAll('[data-close-drawer]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeAllPanels();
    });
  });

  // Keyboard Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllPanels();
    }
  });

  // =========================================================================
  // 6. CURRENCY SWITCHER LOGIC
  // =========================================================================
  function setCurrency(curr) {
    if (state.currency === curr) return;
    state.currency = curr;

    currencyBtns.forEach(btn => {
      if (btn.dataset.currency === curr) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Update all product cards in DOM
    document.querySelectorAll('.product-card').forEach(card => {
      const pid = card.dataset.productId;
      const item = products.find(p => p.id === pid);
      if (item) {
        const priceEl = card.querySelector('.product-price');
        if (priceEl) priceEl.textContent = formatPrice(item);
      }
    });

    // Re-render drawers
    renderCart();
    renderWishlist();

    // Re-render Quick View if open
    if (state.activeProduct) {
      const qvPrice = document.getElementById('quickview-price-val');
      if (qvPrice) qvPrice.textContent = formatPrice(state.activeProduct);
    }

    showToast(`Currency updated to ${curr}`);
  }

  currencyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setCurrency(btn.dataset.currency);
    });
  });

  // =========================================================================
  // 7. WISHLIST MANAGEMENT
  // =========================================================================
  function toggleWishlist(productId) {
    const item = products.find(p => p.id === productId);
    if (!item) return;

    if (state.wishlist.has(productId)) {
      state.wishlist.delete(productId);
      showToast(`Removed from Wishlist: ${item.name}`);
    } else {
      state.wishlist.add(productId);
      showToast(`Saved to Wishlist: ${item.name}`);
    }

    updateWishlistBadges();
    updateCardWishlistButtons();
    renderWishlist();
  }

  function updateWishlistBadges() {
    const count = state.wishlist.size;
    wishlistCountBadges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    });
  }

  function updateCardWishlistButtons() {
    document.querySelectorAll('.product-wishlist-btn').forEach(btn => {
      const pid = btn.dataset.productId;
      if (state.wishlist.has(pid)) {
        btn.classList.add('active');
        btn.setAttribute('aria-label', 'Remove from wishlist');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-label', 'Add to wishlist');
      }
    });
  }

  function renderWishlist() {
    if (!wishlistItemsList) return;

    if (state.wishlist.size === 0) {
      wishlistItemsList.innerHTML = `
        <div class="empty-state-box">
          <span class="material-symbols-outlined">favorite_border</span>
          <p class="text-body-md" style="font-weight: 500;">Your wishlist is empty</p>
          <p class="text-body-sm">Explore our catalog and save your favourite silhouettes.</p>
          <button class="btn-pill-dark" style="margin-top: 1rem;" data-close-drawer onclick="document.querySelector('#most-wanted')?.scrollIntoView({behavior: 'smooth'})">
            Explore Most Wanted
          </button>
        </div>
      `;
      return;
    }

    let html = '';
    state.wishlist.forEach(pid => {
      const item = products.find(p => p.id === pid);
      if (!item) return;

      html += `
        <div class="cart-item-card" data-product-id="${item.id}">
          <div class="cart-item-thumb">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
          </div>
          <div class="cart-item-info">
            <div>
              <h4 class="cart-item-title">${item.name}</h4>
              <p class="cart-item-meta">${item.collection} · ${formatPrice(item)}</p>
            </div>
            <div class="cart-item-row">
              <button class="btn-card-quickview" style="padding: 0.35rem 0.75rem; font-size: 0.6875rem;" onclick="window.addToBagFromWishlist('${item.id}')">
                <span class="material-symbols-outlined" style="font-size: 14px;">shopping_bag</span>
                <span>Move to Bag</span>
              </button>
              <button class="remove-btn" onclick="window.removeWishlistItem('${item.id}')">
                Remove
              </button>
            </div>
          </div>
        </div>
      `;
    });

    wishlistItemsList.innerHTML = html;
  }

  window.removeWishlistItem = (id) => {
    toggleWishlist(id);
  };

  window.addToBagFromWishlist = (id) => {
    addToCart(id, 'M', 1);
    state.wishlist.delete(id);
    updateWishlistBadges();
    updateCardWishlistButtons();
    renderWishlist();
    openDrawer(cartDrawer);
  };

  // Open Wishlist Trigger
  document.querySelectorAll('[data-trigger-wishlist]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      renderWishlist();
      openDrawer(wishlistDrawer);
    });
  });

  // =========================================================================
  // 8. SHOPPING BAG (CART) MANAGEMENT
  // =========================================================================
  function addToCart(productId, size = 'M', quantity = 1) {
    const item = products.find(p => p.id === productId);
    if (!item) return;

    const existing = state.cart.find(c => c.id === productId && c.size === size);
    if (existing) {
      existing.quantity += quantity;
    } else {
      state.cart.push({ id: productId, size, quantity });
    }

    updateCartBadges();
    renderCart();
    showToast(`Added to Bag: ${item.name} (${size})`);
  }

  function updateCartBadges() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadges.forEach(badge => {
      badge.textContent = totalItems;
      badge.style.display = totalItems > 0 ? 'inline-flex' : 'none';
    });
  }

  function renderCart() {
    if (!cartItemsList) return;

    if (state.cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="empty-state-box">
          <span class="material-symbols-outlined">shopping_bag</span>
          <p class="text-body-md" style="font-weight: 500;">Your shopping bag is empty</p>
          <p class="text-body-sm">Discover breathable essentials designed for coastal mornings to late evenings.</p>
          <button class="btn-pill-dark" style="margin-top: 1rem;" data-close-drawer onclick="document.querySelector('#most-wanted')?.scrollIntoView({behavior: 'smooth'})">
            Shop Collection
          </button>
        </div>
      `;
      if (cartSubtotalEl) cartSubtotalEl.textContent = formatAmount(0, 0);
      if (cartShippingNotice) cartShippingNotice.textContent = 'Complimentary shipping on orders over AED 500 / Rp 1.500.000';
      return;
    }

    let subtotalAED = 0;
    let subtotalIDR = 0;
    let html = '';

    state.cart.forEach((entry, index) => {
      const item = products.find(p => p.id === entry.id);
      if (!item) return;

      subtotalAED += item.priceAED * entry.quantity;
      subtotalIDR += item.priceIDR * entry.quantity;

      html += `
        <div class="cart-item-card">
          <div class="cart-item-thumb">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
          </div>
          <div class="cart-item-info">
            <div>
              <h4 class="cart-item-title">${item.name}</h4>
              <p class="cart-item-meta">Size: ${entry.size} · ${formatPrice(item)}</p>
            </div>
            <div class="cart-item-row">
              <div class="qty-control">
                <button class="qty-btn" aria-label="Decrease quantity" onclick="window.changeCartQty(${index}, -1)">-</button>
                <span class="qty-value">${entry.quantity}</span>
                <button class="qty-btn" aria-label="Increase quantity" onclick="window.changeCartQty(${index}, 1)">+</button>
              </div>
              <button class="remove-btn" onclick="window.removeCartItem(${index})">Remove</button>
            </div>
          </div>
        </div>
      `;
    });

    cartItemsList.innerHTML = html;
    if (cartSubtotalEl) {
      cartSubtotalEl.textContent = formatAmount(subtotalAED, subtotalIDR);
    }

    if (cartShippingNotice) {
      const freeThresholdAED = 500;
      if (subtotalAED >= freeThresholdAED) {
        cartShippingNotice.textContent = 'You qualify for complimentary worldwide shipping.';
        cartShippingNotice.style.color = '#1b5e20';
      } else {
        const remainingAED = freeThresholdAED - subtotalAED;
        const remainingIDR = Math.round(remainingAED * 4250);
        cartShippingNotice.textContent = `Add ${formatAmount(remainingAED, remainingIDR)} more for complimentary shipping.`;
        cartShippingNotice.style.color = 'var(--on-surface-variant)';
      }
    }
  }

  window.changeCartQty = (index, delta) => {
    if (!state.cart[index]) return;
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }
    updateCartBadges();
    renderCart();
  };

  window.removeCartItem = (index) => {
    if (!state.cart[index]) return;
    state.cart.splice(index, 1);
    updateCartBadges();
    renderCart();
  };

  // Open Cart Trigger
  document.querySelectorAll('[data-trigger-cart]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      renderCart();
      openDrawer(cartDrawer);
    });
  });

  // =========================================================================
  // 9. QUICK VIEW PRODUCT MODAL
  // =========================================================================
  let selectedModalSize = 'M';

  function openQuickView(productId) {
    const item = products.find(p => p.id === productId);
    if (!item) return;

    state.activeProduct = item;
    selectedModalSize = item.sizes[0] || 'M';

    const qvImg = document.getElementById('quickview-img');
    const qvTag = document.getElementById('quickview-tag-val');
    const qvTitle = document.getElementById('quickview-title-val');
    const qvPrice = document.getElementById('quickview-price-val');
    const qvDesc = document.getElementById('quickview-desc-val');
    const qvSizesContainer = document.getElementById('quickview-sizes-chips');
    const qvShopeeBtn = document.getElementById('quickview-shopee-btn');

    if (qvImg) {
      qvImg.src = item.image;
      qvImg.alt = item.name;
    }
    if (qvTag) qvTag.textContent = `${item.collection} · ${item.category}`;
    if (qvTitle) qvTitle.textContent = item.name;
    if (qvPrice) qvPrice.textContent = formatPrice(item);
    if (qvDesc) qvDesc.textContent = item.description;

    if (qvShopeeBtn) {
      qvShopeeBtn.href = item.shopeeUrl;
    }

    if (qvSizesContainer) {
      qvSizesContainer.innerHTML = item.sizes.map((s, idx) => `
        <button class="size-chip-btn ${idx === 0 ? 'active' : ''}" data-size="${s}">
          ${s}
        </button>
      `).join('');

      qvSizesContainer.querySelectorAll('.size-chip-btn').forEach(chip => {
        chip.addEventListener('click', (e) => {
          e.preventDefault();
          qvSizesContainer.querySelectorAll('.size-chip-btn').forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          selectedModalSize = chip.dataset.size;
        });
      });
    }

    closeAllPanels();
    overlay?.classList.add('open');
    quickViewModal?.classList.add('open');
    document.body.classList.add('modal-open');
  }

  // Quick View Add to Bag Button
  const qvAddToBagBtn = document.getElementById('quickview-add-bag-btn');
  qvAddToBagBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (!state.activeProduct) return;
    addToCart(state.activeProduct.id, selectedModalSize, 1);
    closeAllPanels();
    openDrawer(cartDrawer);
  });

  // Attach card click handlers
  document.querySelectorAll('.product-card').forEach(card => {
    const pid = card.dataset.productId;

    // Card Wishlist button
    const wishBtn = card.querySelector('.product-wishlist-btn');
    wishBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      toggleWishlist(pid);
    });

    // Quick View button
    const qvBtn = card.querySelector('.btn-card-quickview');
    qvBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      openQuickView(pid);
    });

    // Whole card click
    card.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      openQuickView(pid);
    });
  });

  // =========================================================================
  // 10. LIVE SEARCH MODAL
  // =========================================================================
  const searchInput = document.getElementById('search-input-field');
  const searchResultsGrid = document.getElementById('search-results-list');
  const searchChips = document.querySelectorAll('.search-chip');
  let currentSearchFilter = 'all';

  function renderSearchResults(query = '') {
    if (!searchResultsGrid) return;

    const cleanQuery = query.toLowerCase().trim();
    let filtered = products;

    if (currentSearchFilter !== 'all') {
      filtered = filtered.filter(p => 
        p.collection.toLowerCase().includes(currentSearchFilter) ||
        p.category.toLowerCase().includes(currentSearchFilter)
      );
    }

    if (cleanQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(cleanQuery) ||
        p.category.toLowerCase().includes(cleanQuery) ||
        p.collection.toLowerCase().includes(cleanQuery) ||
        p.description.toLowerCase().includes(cleanQuery)
      );
    }

    if (filtered.length === 0) {
      searchResultsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 2rem 0; text-align: center; color: var(--on-surface-variant);">
          <p class="text-body-md">No products found matching "${query}".</p>
          <p class="text-body-sm">Try searching for "Sweater", "Hoodie", "Cap", or "Tee".</p>
        </div>
      `;
      return;
    }

    searchResultsGrid.innerHTML = filtered.map(p => `
      <div class="product-card" onclick="window.selectProductFromSearch('${p.id}')">
        <div class="product-media-container" style="aspect-ratio: 1/1;">
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="product-meta">
          <span class="product-title">${p.name}</span>
          <span class="product-price">${formatPrice(p)}</span>
        </div>
      </div>
    `).join('');
  }

  window.selectProductFromSearch = (pid) => {
    closeAllPanels();
    openQuickView(pid);
  };

  searchInput?.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });

  searchChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      searchChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentSearchFilter = chip.dataset.filter || 'all';
      renderSearchResults(searchInput ? searchInput.value : '');
    });
  });

  // Open Search Trigger
  document.querySelectorAll('[data-trigger-search]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeAllPanels();
      overlay?.classList.add('open');
      searchModal?.classList.add('open');
      document.body.classList.add('modal-open');
      setTimeout(() => searchInput?.focus(), 150);
      renderSearchResults('');
    });
  });

  // =========================================================================
  // 11. MOBILE NAVIGATION DRAWER
  // =========================================================================
  document.querySelectorAll('[data-trigger-mobile-nav]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer(mobileNavDrawer);
    });
  });

  // =========================================================================
  // 12. POLICY & LEGAL MODAL
  // =========================================================================
  const policies = {
    privacy: {
      title: 'Privacy Policy',
      content: `
        <p>ByDelune values the confidentiality of your personal information. When you place an inquiry, subscribe to lookbook drops, or shop via our verified partners, your details are held with bank-level encryption standards.</p>
        <p style="margin-top: 1rem;">We do not sell, rent, or transfer your browsing history to third-party ad networks. All client communications are delivered exclusively for order fulfillment and verified product releases.</p>
      `
    },
    terms: {
      title: 'Terms and Conditions',
      content: `
        <p>All garments produced under ByDelune are manufactured in limited seasonal batches. Colors, textures, and mineral washes possess unique characteristics resulting from artisanal dyeing and knitting techniques.</p>
        <p style="margin-top: 1rem;">Orders placed through our authorized marketplace (Shopee Official Store) are protected by official buyer protection, authentic money-back guarantees, and express nationwide courier dispatch.</p>
      `
    },
    legal: {
      title: 'Legal Notice & Authenticity',
      content: `
        <p>ByDelune is an architectural lifestyle brand. All visual assets, silhouette cuts, and editorial lookbook imagery are proprietary intellectual property.</p>
        <p style="margin-top: 1rem;">For brand partnerships, press inquiries, or wholesale showroom viewings, please contact our concierge through official social channels or verified Shopee store support.</p>
      `
    }
  };

  window.openPolicyModal = (policyKey) => {
    const policy = policies[policyKey];
    if (!policy) return;

    const modalTitle = document.getElementById('policy-modal-title');
    const modalBody = document.getElementById('policy-modal-body');

    if (modalTitle) modalTitle.textContent = policy.title;
    if (modalBody) modalBody.innerHTML = policy.content;

    closeAllPanels();
    overlay?.classList.add('open');
    policyModal?.classList.add('open');
    document.body.classList.add('modal-open');
  };

  document.querySelectorAll('[data-policy-trigger]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pKey = link.dataset.policyTrigger;
      window.openPolicyModal(pKey);
    });
  });

  // =========================================================================
  // 13. VIEW ALL CTA TOGGLES
  // =========================================================================
  document.querySelectorAll('[data-view-all-trigger]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSec = btn.dataset.viewAllTrigger;
      showToast(`Showing all styles for ${targetSec}`);
      // Open search with that filter
      currentSearchFilter = targetSec.toLowerCase();
      searchChips.forEach(c => {
        c.classList.toggle('active', c.dataset.filter === currentSearchFilter);
      });
      closeAllPanels();
      overlay?.classList.add('open');
      searchModal?.classList.add('open');
      document.body.classList.add('modal-open');
      renderSearchResults('');
    });
  });

  // =========================================================================
  // 14. INITIALIZATION
  // =========================================================================
  updateWishlistBadges();
  updateCardWishlistButtons();
  updateCartBadges();
  renderCart();
  renderWishlist();

  console.log('ByDelune Storefront initialized with 1:1 Figma catalog aesthetic.');
});
