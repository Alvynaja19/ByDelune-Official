/**
 * BYDELUNE: Logika Aplikasi Storefront
 * Fitur Daftar Keinginan (Wishlist), Filter Katalog, Pencarian Cepat, dan Integrasi Shopee.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Helper Format Rupiah
  const formatRupiah = (num) => {
    return 'Rp ' + Number(num).toLocaleString('id-ID');
  };

  // =========================================================================
  // State: Daftar Keinginan (Wishlist)
  // =========================================================================
  const state = {
    wishlist: new Set(['feat-1', 'new-2', 'new-6'])
  };

  // =========================================================================
  // Elemen DOM
  // =========================================================================
  const overlay = document.getElementById('drawer-overlay');
  const wishlistDrawer = document.getElementById('wishlist-drawer');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input-field');
  const toastNotice = document.getElementById('toast-notice');

  // Badge Counter
  const wishlistCountBadges = document.querySelectorAll('.wishlist-count-badge');

  // Kontainer Daftar Keinginan
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
          <div style="margin-top: 0.75rem;">
            <a href="https://s.shopee.co.id/2VrCqjmv7l" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 0.4rem 0.85rem; font-size: 0.6875rem; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
              <span>Beli di Shopee</span>
              <span class="material-symbols-outlined" style="font-size: 13px;">open_in_new</span>
            </a>
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
  updateWishlistBadges();
});
