/**
 * BYDELUNE: Logika Aplikasi Storefront
 * Sesuai sistem desain Quiet Editorial & kelengkapan fungsional.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Helper Format Rupiah
  const formatRupiah = (num) => {
    return 'Rp ' + Number(num).toLocaleString('id-ID');
  };

  // =========================================================================
  // State: Keranjang & Daftar Keinginan (Wishlist)
  // =========================================================================
  const state = {
    cart: [
      {
        id: 'feat-1',
        title: 'Sneakers Kulit Minimalis',
        price: 389000,
        variant: 'Off-White / 42 EU',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv-EnSnGGhZzj9JCrSQIoMsevwGtlG-l8V9CXeL3botanhWViFfLjExeIWsZ0eHtCADV0VQoqgKEie4I_tb2IHeQ3v5SqfiSXN_moxCirDMNlgL0f8Pld7M8f0doBVTEvHIDw2mrZXh3yxOoqTcwcFrfYmBX5OdIo6lp-vnSPfBEK0RfS2whjh7LGYX2aRlhpaovMrkDDUJldegByGw_DOBzA907GB3dGbm-Qj1ZU6yh55N0n-kg3URQ',
        quantity: 1
      },
      {
        id: 'feat-2',
        title: 'Tas Bahu Terstruktur',
        price: 520000,
        variant: 'Kulit Hitam',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMDihVXdFucERVeySp-04oQCn047PC6PaBvqJS57jIhwtMsoDJOgeQou261bkrva5qg-xBUClLGaVQYqgbzKk6-Ys-jSup_IVr6DJ3c24Etw4A_7WGei3Y_jkFxTIbhhYE_nHSISuU2dhNrq_6NnM7_XEUE-ggdKTHjSrolVYYJwivAEJH1S0Yffuxru-G5UsPkvPBfMb9Ae_jNgb4_sdXweuIjxJw_cdvIuyUl29N_jrSIe92YpareA',
        quantity: 1
      }
    ],
    wishlist: new Set(['feat-1', 'new-2', 'new-6'])
  };

  // =========================================================================
  // Elemen DOM
  // =========================================================================
  const overlay = document.getElementById('drawer-overlay');
  const cartDrawer = document.getElementById('cart-drawer');
  const wishlistDrawer = document.getElementById('wishlist-drawer');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input-field');
  const toastNotice = document.getElementById('toast-notice');

  // Badge Counter
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const wishlistCountBadges = document.querySelectorAll('.wishlist-count-badge');

  // Kontainer Daftar
  const cartItemsContainer = document.getElementById('cart-items-list');
  const cartSubtotalEl = document.getElementById('cart-subtotal-val');
  const wishlistItemsContainer = document.getElementById('wishlist-items-list');

  // =========================================================================
  // Notifikasi Toast
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
  // Manajemen Panel & Drawer
  // =========================================================================
  function closeAllPanels() {
    overlay?.classList.remove('open');
    cartDrawer?.classList.remove('open');
    wishlistDrawer?.classList.remove('open');
    mobileNavDrawer?.classList.remove('open');
    searchModal?.classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  function openDrawer(drawer) {
    closeAllPanels();
    overlay?.classList.add('open');
    drawer?.classList.add('open');
    document.body.classList.add('modal-open');
  }

  // Tutup dengan klik overlay
  overlay?.addEventListener('click', closeAllPanels);

  // Tombol tutup panel
  document.querySelectorAll('[data-close-drawer]').forEach(btn => {
    btn.addEventListener('click', closeAllPanels);
  });

  // Tutup dengan tombol Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllPanels();
    }
  });

  // Buka Keranjang
  document.querySelectorAll('[data-trigger-cart]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      renderCart();
      openDrawer(cartDrawer);
    });
  });

  // Buka Daftar Keinginan
  document.querySelectorAll('[data-trigger-wishlist]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      renderWishlist();
      openDrawer(wishlistDrawer);
    });
  });

  // Buka Menu Mobile
  document.querySelectorAll('[data-trigger-mobile-nav]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer(mobileNavDrawer);
    });
  });

  // Buka Modal Pencarian
  document.querySelectorAll('[data-trigger-search]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeAllPanels();
      overlay?.classList.add('open');
      searchModal?.classList.add('open');
      document.body.classList.add('modal-open');
      setTimeout(() => searchInput?.focus(), 100);
    });
  });

  // Tombol Tutup Pencarian
  document.getElementById('search-modal-close')?.addEventListener('click', closeAllPanels);

  // =========================================================================
  // Operasi Keranjang Belanja
  // =========================================================================
  function renderCart() {
    if (!cartItemsContainer || !cartSubtotalEl) return;

    const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadges.forEach(b => b.textContent = totalQty);

    if (state.cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-state">
          <span class="material-symbols-outlined">shopping_bag</span>
          <p class="text-body-md font-medium text-on-surface">Tas belanja Anda masih kosong</p>
          <p class="text-body-sm mt-1">Temukan busana taktil dan aksesori esensial untuk rotasi gaya harian Anda.</p>
        </div>
      `;
      cartSubtotalEl.textContent = 'Rp 0';
      return;
    }

    let subtotal = 0;
    cartItemsContainer.innerHTML = state.cart.map(item => {
      subtotal += item.price * item.quantity;
      return `
        <div class="cart-item" data-id="${item.id}">
          <div class="cart-item-img">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
          </div>
          <div>
            <h4 class="text-body-md font-medium text-on-surface">${item.title}</h4>
            <p class="text-body-sm text-on-surface-variant">${item.variant}</p>
            <a href="https://s.shopee.co.id/2VrCqjmv7l" target="_blank" rel="noopener noreferrer" class="link-editorial text-body-sm" style="display: inline-flex; align-items: center; gap: 2px; margin-top: 3px; font-weight: 500;">
              <span>Beli di Shopee</span>
              <span class="material-symbols-outlined" style="font-size: 13px;">open_in_new</span>
            </a>
            <div class="qty-control">
              <button class="qty-btn" data-qty-delta="-1" aria-label="Kurangi jumlah">−</button>
              <span class="qty-number">${item.quantity}</span>
              <button class="qty-btn" data-qty-delta="1" aria-label="Tambah jumlah">+</button>
            </div>
          </div>
          <div style="text-align: right;">
            <p class="text-body-md font-medium text-on-surface">${formatRupiah(item.price * item.quantity)}</p>
            <button class="text-body-sm text-on-surface-variant hover:text-on-surface mt-2" data-cart-remove="${item.id}" style="text-decoration: underline; cursor: pointer;">
              Hapus
            </button>
          </div>
        </div>
      `;
    }).join('');

    cartSubtotalEl.textContent = formatRupiah(subtotal);

    // Pasang listener kuantitas
    cartItemsContainer.querySelectorAll('.cart-item').forEach(el => {
      const id = el.getAttribute('data-id');
      el.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const delta = parseInt(btn.getAttribute('data-qty-delta'), 10);
          updateCartQuantity(id, delta);
        });
      });
      el.querySelector('[data-cart-remove]')?.addEventListener('click', () => {
        removeFromCart(id);
      });
    });
  }

  function addToCart(product) {
    const existing = state.cart.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }
    renderCart();
    showToast(`Ditambahkan "${product.title}" ke tas.`);
    openDrawer(cartDrawer);
  }

  function updateCartQuantity(id, delta) {
    const item = state.cart.find(i => i.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      renderCart();
    }
  }

  function removeFromCart(id) {
    const item = state.cart.find(i => i.id === id);
    state.cart = state.cart.filter(i => i.id !== id);
    renderCart();
    if (item) {
      showToast(`Dihapus "${item.title}" dari tas.`);
    }
  }

  // Tombol Tambah Cepat di Kartu
  document.querySelectorAll('[data-quick-add]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('[data-product-id]');
      if (!card) return;

      const product = {
        id: card.getAttribute('data-product-id'),
        title: card.getAttribute('data-title'),
        price: parseFloat(card.getAttribute('data-price')),
        variant: card.getAttribute('data-variant') || 'Edisi Standar',
        image: card.querySelector('img')?.src || ''
      };
      addToCart(product);
    });
  });

  // Tombol Selesaikan Pembelian ke Shopee
  document.getElementById('cart-checkout-btn')?.addEventListener('click', (e) => {
    if (state.cart.length === 0) {
      e.preventDefault();
      showToast('Tas belanja Anda masih kosong.');
      return;
    }
    showToast('Mengarahkan ke Toko Resmi Shopee ByDelune...');
  });

  // =========================================================================
  // Operasi Daftar Keinginan (Wishlist)
  // =========================================================================
  function updateWishlistBadges() {
    wishlistCountBadges.forEach(b => b.textContent = state.wishlist.size);
    document.querySelectorAll('[data-wishlist-toggle]').forEach(btn => {
      const card = btn.closest('[data-product-id]');
      if (!card) return;
      const id = card.getAttribute('data-product-id');
      const icon = btn.querySelector('.material-symbols-outlined');
      if (state.wishlist.has(id)) {
        btn.classList.add('is-bookmarked');
        if (icon) {
          icon.classList.add('fill-icon');
          icon.textContent = 'favorite';
        }
      } else {
        btn.classList.remove('is-bookmarked');
        if (icon) {
          icon.classList.remove('fill-icon');
          icon.textContent = 'favorite';
        }
      }
    });
  }

  function toggleWishlist(id, title) {
    if (state.wishlist.has(id)) {
      state.wishlist.delete(id);
      showToast(`Dihapus "${title}" dari daftar keinginan.`);
    } else {
      state.wishlist.add(id);
      showToast(`Tersimpan "${title}" ke daftar keinginan.`);
    }
    updateWishlistBadges();
    if (wishlistDrawer?.classList.contains('open')) {
      renderWishlist();
    }
  }

  document.querySelectorAll('[data-wishlist-toggle]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('[data-product-id]');
      if (!card) return;
      const id = card.getAttribute('data-product-id');
      const title = card.getAttribute('data-title') || 'Produk';
      toggleWishlist(id, title);
    });
  });

  function renderWishlist() {
    if (!wishlistItemsContainer) return;
    updateWishlistBadges();

    if (state.wishlist.size === 0) {
      wishlistItemsContainer.innerHTML = `
        <div class="empty-state">
          <span class="material-symbols-outlined">favorite</span>
          <p class="text-body-md font-medium text-on-surface">Belum ada produk yang disimpan</p>
          <p class="text-body-sm mt-1">Ketuk ikon hati pada produk mana pun untuk menyimpan ke daftar keinginan Anda.</p>
        </div>
      `;
      return;
    }

    const items = [];
    state.wishlist.forEach(id => {
      const card = document.querySelector(`[data-product-id="${id}"]`);
      if (card) {
        items.push({
          id,
          title: card.getAttribute('data-title'),
          price: card.getAttribute('data-price'),
          variant: card.getAttribute('data-variant'),
          image: card.querySelector('img')?.src
        });
      }
    });

    wishlistItemsContainer.innerHTML = items.map(item => `
      <div class="cart-item" data-wish-id="${item.id}">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
        </div>
        <div>
          <h4 class="text-body-md font-medium text-on-surface">${item.title}</h4>
          <p class="text-body-sm text-on-surface-variant">${item.variant || 'Standar'}</p>
          <p class="text-body-md font-medium text-on-surface mt-1">${formatRupiah(item.price)}</p>
          <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; flex-wrap: wrap;">
            <a href="https://s.shopee.co.id/2VrCqjmv7l" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 0.35rem 0.75rem; font-size: 0.6875rem; text-decoration: none;">
              <span>Beli di Shopee</span>
              <span class="material-symbols-outlined" style="font-size: 12px; margin-left: 2px;">open_in_new</span>
            </a>
            <button class="btn-secondary" data-wish-to-cart="${item.id}" style="padding: 0.35rem 0.75rem; font-size: 0.6875rem;">
              Tambah ke Tas
            </button>
          </div>
        </div>
        <div style="text-align: right;">
          <button class="text-body-sm text-on-surface-variant hover:text-on-surface" data-wish-remove="${item.id}" style="text-decoration: underline; cursor: pointer;">
            Hapus
          </button>
        </div>
      </div>
    `).join('');

    wishlistItemsContainer.querySelectorAll('[data-wish-remove]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-wish-remove');
        toggleWishlist(id, 'Produk');
      });
    });

    wishlistItemsContainer.querySelectorAll('[data-wish-to-cart]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-wish-to-cart');
        const card = document.querySelector(`[data-product-id="${id}"]`);
        if (card) {
          addToCart({
            id,
            title: card.getAttribute('data-title'),
            price: parseFloat(card.getAttribute('data-price')),
            variant: card.getAttribute('data-variant') || 'Standar',
            image: card.querySelector('img')?.src
          });
        }
      });
    });
  }

  // =========================================================================
  // Filter Kategori Produk (Rilisan Terbaru)
  // =========================================================================
  const filterTabs = document.querySelectorAll('#filter-tabs .filter-tab');
  const productCards = document.querySelectorAll('#new-arrivals-grid > [data-category]');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      productCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // Pencarian Cepat Katalog
  // =========================================================================
  const searchResultsContainer = document.getElementById('search-results-list');
  const allProductData = Array.from(document.querySelectorAll('[data-product-id]')).map(el => ({
    id: el.getAttribute('data-product-id'),
    title: el.getAttribute('data-title') || '',
    price: el.getAttribute('data-price') || '',
    variant: el.getAttribute('data-variant') || '',
    image: el.querySelector('img')?.src || ''
  }));

  searchInput?.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!searchResultsContainer) return;

    if (!query) {
      searchResultsContainer.innerHTML = '<p class="text-body-sm text-on-surface-variant">Ketik di atas untuk mencari busana berdasarkan nama, bahan, atau warna.</p>';
      return;
    }

    const matches = allProductData.filter(p => 
      p.title.toLowerCase().includes(query) || p.variant.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      searchResultsContainer.innerHTML = `<p class="text-body-sm text-on-surface-variant">Tidak ada produk yang cocok dengan "${query}".</p>`;
      return;
    }

    searchResultsContainer.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
        ${matches.map(m => `
          <div class="cart-item" style="border: 1px solid var(--border-light); padding: 0.75rem; border-radius: var(--radius); cursor: pointer;" onclick="document.querySelector('[data-product-id=\\'${m.id}\\']')?.scrollIntoView({behavior: 'smooth'}); document.getElementById('search-modal-close')?.click();">
            <div class="cart-item-img" style="width: 50px;">
              <img src="${m.image}" alt="${m.title}" />
            </div>
            <div>
              <p class="text-body-sm font-medium text-on-surface">${m.title}</p>
              <p class="text-body-sm text-on-surface-variant">${formatRupiah(m.price)}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  });

  // =========================================================================
  // Berlangganan Warta (Newsletter)
  // =========================================================================
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterStatus = document.getElementById('newsletter-status');

  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    if (!input || !input.value) return;

    const email = input.value;
    input.disabled = true;
    const submitBtn = newsletterForm.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.textContent = 'Memproses...';

    setTimeout(() => {
      input.value = '';
      input.disabled = false;
      if (submitBtn) submitBtn.textContent = 'Terdaftar';
      if (newsletterStatus) {
        newsletterStatus.className = 'newsletter-status success';
        newsletterStatus.textContent = `Terima kasih. Alamat ${email} telah terdaftar di Warta ByDelune.`;
      }
      showToast('Selamat datang di jurnal Warta ByDelune.');
    }, 600);
  });

  // Jalankan render awal
  renderCart();
  updateWishlistBadges();
});
