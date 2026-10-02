/**
 * BYDELUNE: Storefront Engine & Interactivity
 * Figma Catalog 1:1 Implementation, Dual Currency (AED / IDR),
 * Wishlist Drawer, Search Modal, Quick View, and Shopee Direct Storefront.
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. PRODUCT CATALOG DATA (12 Products from Figma Export)
  // =========================================================================
  const products = [
    // Grid 1: Paling Diminati
    {
      id: 'prod-01',
      name: 'Bonjour Cable Sweater',
      category: 'Hoodie & Rajut',
      collection: 'Paling Diminati',
      badge: 'Paling Diminati',
      priceAED: 349,
      priceIDR: 1485000,
      image: 'Blus%20Renda%20Hitam%20Transparan%20Elegan.png',
      description: 'Sweater rajut kabel tebal yang dibuat dari 100% wol merino bersumber etis. Dilengkapi manset berusuk, kerah bulat santai, dan bordir tulisan halus yang elegan.',
      sizes: ['S', 'M', 'L', 'XL'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-02',
      name: 'Blow Up Tee',
      category: 'Kaos',
      collection: 'Paling Diminati',
      badge: 'Paling Diminati',
      priceAED: 315,
      priceIDR: 1340000,
      image: 'Duster%20Renda%20Gading%20Motif%20Bunga.png',
      description: 'Kaos polo bernuansa vintage dengan garis hijau balap dan ekru dua warna. Katun jersey organik 280gsm berkualitas tinggi dengan konstruksi kerah terbuka.',
      sizes: ['S', 'M', 'L', 'XL'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-03',
      name: 'Washed Zip Hoodie',
      category: 'Hoodie & Rajut',
      collection: 'Paling Diminati',
      badge: 'Paling Diminati',
      priceAED: 374,
      priceIDR: 1590000,
      image: 'Gaun%20Renda%20Hitam%20Bermotif%20Bunga.png',
      description: 'Hoodie mineral wash dengan efek pudar alami dan ritsleting logam ganda. Potongan santai dengan bahu turun dan tudung tebal berlapis ganda.',
      sizes: ['S', 'M', 'L', 'XL'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-04',
      name: 'Matcha Club Tee',
      category: 'Kaos',
      collection: 'Paling Diminati',
      badge: 'Paling Diminati',
      priceAED: 247,
      priceIDR: 1050000,
      image: 'Gaun%20Renda%20Hitam%20Transparan.png',
      description: 'Kaos berpotongan boxy dengan cetakan grafis cangkir keramik artistik. Dicuci enzim untuk tekstur lembut, katun organik bebas susut dengan kerah rusuk kokoh.',
      sizes: ['XS', 'S', 'M', 'L'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },

    // Grid 2: Esensial
    {
      id: 'prod-05',
      name: 'Sand Ribbed Tank',
      category: 'Wanita',
      collection: 'Esensial',
      badge: 'Esensial',
      priceAED: 166,
      priceIDR: 710000,
      image: 'images/product-05.webp?v=2',
      description: 'Atasan tank top rib halus dalam rona pasir hangat. Campuran katun organik elastis yang nyaman di tubuh dengan profil leher persegi rapi dan kelim mulus.',
      sizes: ['XS', 'S', 'M', 'L'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-06',
      name: 'Washed Denim Jacket',
      category: 'Pakaian Luar',
      collection: 'Esensial',
      badge: 'Esensial',
      priceAED: 400,
      priceIDR: 1700000,
      image: 'images/product-06.webp?v=2',
      description: 'Jaket denim selvedge warna arang dengan siluet boxy cropped, kancing shank perak antik, dan saku dada ganda berpenutup.',
      sizes: ['S', 'M', 'L', 'XL'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-07',
      name: 'Ivory Cable Sweater',
      category: 'Hoodie & Rajut',
      collection: 'Esensial',
      badge: 'Esensial',
      priceAED: 336,
      priceIDR: 1430000,
      image: 'images/product-07.webp?v=2',
      description: 'Pullover rajut kabel warna gading cropped berbahan campuran wol ringan dan sejuk. Tekstur kepang halus dengan garis leher bulat lembut dan lengan panjang berusuk.',
      sizes: ['XS', 'S', 'M', 'L'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-08',
      name: 'Skyline Oversized Long',
      category: 'Kaos',
      collection: 'Esensial',
      badge: 'Esensial',
      priceAED: 264,
      priceIDR: 1120000,
      image: 'images/product-08.webp?v=2',
      description: 'Kaos lengan panjang garis tebal warna biru laut dan putih bersih. Bahu turun santai dengan manset rusuk lebar dan kelim belah samping arsitektural.',
      sizes: ['S', 'M', 'L', 'XL'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },

    // Grid 3: Topi & Aksesori
    {
      id: 'prod-09',
      name: 'Pasta Club Cap',
      category: 'Topi',
      collection: 'Esensial',
      badge: 'Esensial',
      priceAED: 255,
      priceIDR: 1085000,
      image: 'images/product-09.webp?v=2',
      description: 'Topi trucker busa dua warna dengan visor hijau hutan dan jaring belakang putih. Dilengkapi bordir tulisan "Hot Girls Eat Pasta" dan penutup snapback.',
      sizes: ['One Size'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-10',
      name: 'Crimson Cord Cap',
      category: 'Topi',
      collection: 'Esensial',
      badge: 'Esensial',
      priceAED: 277,
      priceIDR: 1180000,
      image: 'images/product-10.webp?v=2',
      description: 'Topi dad cap 6-panel klasik berbahan corduroy merah crimson vintage. Penutup tali gesper kuningan dengan lubang ventilasi sewarna dan visor melengkung.',
      sizes: ['One Size'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-11',
      name: 'Cream Cord Cap',
      category: 'Topi',
      collection: 'Esensial',
      badge: 'Esensial',
      priceAED: 277,
      priceIDR: 1180000,
      image: 'images/product-11.webp?v=2',
      description: 'Topi kasual profil rendah yang dibuat dari corduroy krem berserat lebar. Mahkota lembut dengan tali belakang geser logam antik berukir.',
      sizes: ['One Size'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    },
    {
      id: 'prod-12',
      name: 'Olive Utility Cap',
      category: 'Topi',
      collection: 'Esensial',
      badge: 'Esensial',
      priceAED: 255,
      priceIDR: 1085000,
      image: 'images/product-12.webp?v=2',
      description: 'Topi camper militer 5-panel berbahan katun ripstop zaitun tahan percikan air. Profil rendah dengan tali klip anyaman nilon praktis.',
      sizes: ['One Size'],
      shopeeUrl: 'https://s.shopee.co.id/2VrCqjmv7l'
    }
  ];

  // =========================================================================
  // 2. APPLICATION STATE
  // =========================================================================
  const state = {
    currency: 'IDR', // Default IDR untuk audiens Indonesia
    wishlist: new Set(['prod-01', 'prod-03']),
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
  const wishlistDrawer = document.getElementById('wishlist-drawer');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const searchModal = document.getElementById('search-modal');
  const quickViewModal = document.getElementById('quickview-modal');
  const policyModal = document.getElementById('policy-modal');
  const toastNotice = document.getElementById('toast-notice');

  // Counters
  const wishlistCountBadges = document.querySelectorAll('.wishlist-count-badge');

  // Containers
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
    renderWishlist();

    // Re-render Quick View if open
    if (state.activeProduct) {
      const qvPrice = document.getElementById('quickview-price-val');
      if (qvPrice) qvPrice.textContent = formatPrice(state.activeProduct);
    }

    showToast(`Mata uang diperbarui ke ${curr}`);
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
      showToast(`Dihapus dari Wishlist: ${item.name}`);
    } else {
      state.wishlist.add(productId);
      showToast(`Disimpan ke Wishlist: ${item.name}`);
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
        btn.setAttribute('aria-label', 'Hapus dari wishlist');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-label', 'Simpan ke wishlist');
      }
    });
  }

  function renderWishlist() {
    if (!wishlistItemsList) return;

    if (state.wishlist.size === 0) {
      wishlistItemsList.innerHTML = `
        <div class="empty-state-box">
          <span class="material-symbols-outlined">favorite_border</span>
          <p class="text-body-md" style="font-weight: 500;">Wishlist Anda masih kosong</p>
          <p class="text-body-sm">Jelajahi katalog kami dan simpan siluet pakaian favorit Anda.</p>
          <button class="btn-pill-dark" style="margin-top: 1rem;" data-close-drawer onclick="document.querySelector('#most-wanted')?.scrollIntoView({behavior: 'smooth'})">
            Jelajahi Koleksi Utama
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
              <a href="${item.shopeeUrl}" target="_blank" rel="noopener noreferrer" class="btn-item-shopee" aria-label="Beli ${item.name} di Shopee">
                <span>Beli di Shopee</span>
                <span class="material-symbols-outlined" style="font-size: 13px;">open_in_new</span>
              </a>
              <button class="remove-btn" onclick="window.removeWishlistItem('${item.id}')" aria-label="Hapus ${item.name} dari wishlist">
                Hapus
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

  // Open Wishlist Trigger
  document.querySelectorAll('[data-trigger-wishlist]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      renderWishlist();
      openDrawer(wishlistDrawer);
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

    updateQuickViewWishlistState();
    closeAllPanels();
    overlay?.classList.add('open');
    quickViewModal?.classList.add('open');
    document.body.classList.add('modal-open');
  }

  // Quick View Wishlist Button
  const qvWishlistBtn = document.getElementById('quickview-wishlist-btn');
  const qvWishlistIcon = document.getElementById('quickview-wishlist-icon');
  const qvWishlistText = document.getElementById('quickview-wishlist-text');

  function updateQuickViewWishlistState() {
    if (!state.activeProduct || !qvWishlistBtn) return;
    const isSaved = state.wishlist.has(state.activeProduct.id);
    qvWishlistBtn.classList.toggle('active', isSaved);
    if (qvWishlistIcon) {
      qvWishlistIcon.textContent = isSaved ? 'favorite' : 'favorite_border';
    }
    if (qvWishlistText) {
      qvWishlistText.textContent = isSaved ? 'Tersimpan di Wishlist' : 'Simpan ke Wishlist';
    }
  }

  qvWishlistBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (!state.activeProduct) return;
    toggleWishlist(state.activeProduct.id);
    updateQuickViewWishlistState();
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
          <p class="text-body-md">Tidak ada produk yang cocok dengan "${query}".</p>
          <p class="text-body-sm">Coba cari "Sweater", "Hoodie", "Topi", atau "Kaos".</p>
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
      title: 'Kebijakan Privasi',
      content: `
        <p>ByDelune sangat menghargai kerahasiaan informasi pribadi Anda. Saat Anda mengirimkan pertanyaan, mendaftar kabar rilis lookbook, atau berbelanja melalui mitra resmi kami, data Anda dilindungi dengan standar keamanan tingkat tinggi.</p>
        <p style="margin-top: 1rem;">Kami tidak pernah menjual, menyewakan, atau membagikan riwayat penjelajahan Anda kepada pihak ketiga. Seluruh komunikasi disampaikan secara eksklusif untuk penyelesaian pesanan dan rilis produk terverifikasi.</p>
      `
    },
    terms: {
      title: 'Syarat dan Ketentuan',
      content: `
        <p>Seluruh pakaian yang diproduksi di bawah label ByDelune dibuat dalam jumlah musiman terbatas. Warna, tekstur, dan efek mineral wash memiliki karakteristik unik hasil dari teknik pewarnaan dan perajutan artisanal.</p>
        <p style="margin-top: 1rem;">Pesanan yang dilakukan melalui marketplace resmi kami (Shopee Official Store) dilindungi oleh perlindungan pembeli resmi, jaminan keaslian uang kembali, dan pengiriman ekspres terpercaya ke seluruh Indonesia.</p>
      `
    },
    legal: {
      title: 'Pemberitahuan Hukum & Keaslian',
      content: `
        <p>ByDelune adalah label gaya hidup esensial arsitektural. Seluruh aset visual, potongan siluet, dan dokumentasi lookbook editorial merupakan kekayaan intelektual resmi kami.</p>
        <p style="margin-top: 1rem;">Untuk kerja sama merek, pertanyaan media, atau peninjauan showroom, silakan hubungi tim kami melalui kanal sosial resmi atau layanan pelanggan toko resmi Shopee.</p>
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
      showToast(`Menampilkan seluruh koleksi ${targetSec}`);
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
  renderWishlist();

  // Update all product cards to match initial currency (IDR)
  document.querySelectorAll('.product-card').forEach(card => {
    const pid = card.dataset.productId;
    const item = products.find(p => p.id === pid);
    if (item) {
      const priceEl = card.querySelector('.product-price');
      if (priceEl) priceEl.textContent = formatPrice(item);
    }
  });

  console.log('ByDelune Storefront initialized with Indonesian localization.');
});
