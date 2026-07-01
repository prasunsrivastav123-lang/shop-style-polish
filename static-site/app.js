const products = [
  {
    id: "denim-long-dress",
    name: "Flora Muse Blazer Dress",
    category: "Dresses",
    price: 2399,
    compare: 2999,
    rating: "5.0",
    reviews: 4,
    tag: "Offer",
   image: "assets/flora-muse-1.png",
    images: ["assets/flora-muse-1.png", "assets/flora-muse-2.png", "assets/flora-muse-3.jpg", "assets/flora-muse-4.jpeg", "assets/flora-muse-5.jpeg"],
    colors: [
      { name: "Violet", swatch: "#800080", images: ["assets/flora-muse-1.jpg", "assets/flora-muse-2.jpg", "assets/flora-muse-3.jpg", "assets/flora-muse-4.jpeg", "assets/flora-muse-5.jpeg"] },
      { name: "Royal Blue", swatch: "#4169E1", images: ["assets/flora1.jpeg", "assets/flora2.jpeg", "assets/flora3.jpeg", "assets/flora4.jpeg", "assets/flora5.jpeg"] }
    ],
    description: "Introducing the Flora Muse Blazer Dress \u2014 a playful blend of tailored elegance and feminine charm. Designed in a flattering blazer-style silhouette with delicate floral detailing, statement sleeves, functional pockets, soft lining, and refined finishing for an elevated look. Perfect for brunch dates, intimate celebrations, vacations, daytime events, caf\u00e9 outings, and elegant gatherings. A timeless statement piece created to make everyday dressing feel effortlessly graceful and beautifully unique."
  },
  {
    id: "celeste-ruched-sleeve-dress",
    name: "Celeste Ruched Sleeve Dress",
    category: "Dresses",
    price: 2899,
    compare: 3625,
    rating: "5.0",
    reviews: 3,
    tag: "New",
    image: "assets/celeste-1.png",
    images: ["assets/celeste-1.png", "assets/celeste-2.png", "assets/celeste-3.png", "assets/celeste-4.png"],
    description: "Introducing the Celeste Ruched Sleeve Dress \u2014 where tailored structure meets soft femininity. Designed in a chic blazer-style silhouette with statement ruched sleeves, smooth lining for comfort, functional pockets, and refined collar pasting for a polished finish. Perfect for brunch dates, birthday celebrations, intimate events, resort evenings, work lunches, and elegant day outings. A timeless piece made to feel effortless, elevated, and beautifully put together wherever you wear it."
  },
  {
    id: "scarlet-kiss-dress",
    name: "Scarlet Kiss Dress",
    category: "Dresses",
    price: 2799,
    compare: 3200,
    rating: "5.0",
    reviews: 2,
    tag: "New",
    image: "assets/scarlet-1.jpg",
    images: ["assets/scarlet-1.jpg", "assets/scarlet-2.jpg", "assets/scarlet-3.png", "assets/scarlet-4.png", "assets/scarlet-5.png"],
    description: "A stunning crimson midi dress featuring a gathered crossover bodice, soft draped sleeves, and a flowy silhouette. Designed to flatter every curve while offering effortless elegance for cocktail nights, festive occasions, and special celebrations."
  },
  {
    id: "sunshine-marigold-dress",
    name: "Sunshine Marigold Dress",
    category: "Dresses",
    price: 2299,
    compare: 2650,
    rating: "5.0",
    reviews: 2,
    tag: "New",
    image: "assets/sunshine-yellow-1.jpg",
    images: ["assets/sunshine-yellow-1.jpg", "assets/sunshine-yellow-2.png", "assets/sunshine-yellow-3.png", "assets/sunshine-yellow-4.png", "assets/sunshine-yellow-5.png", "assets/sunshine-yellow-6.jpg"],
    colors: [
      { name: "Yellow", swatch: "#f5c518", images: ["assets/sunshine-yellow-1.jpg", "assets/sunshine-yellow-2.png", "assets/sunshine-yellow-3.png", "assets/sunshine-yellow-4.png", "assets/sunshine-yellow-5.png", "assets/sunshine-yellow-6.jpg"] },
      { name: "Orange", swatch: "#e87722", images: ["assets/sunshine-marigold-1.png", "assets/sunshine-marigold-2.png", "assets/sunshine-marigold-3.png"] }
    ],
    description: "\u201cMade for sunshine, compliments, and brunch plans.\u201d \u2600\ufe0f\ud83c\udf3c\u2728\n\nThe Sunshine Marigold Dress is a charming brunch-ready outfit featuring a flowy silhouette, elegant short jacket overlay, floral detailing, functional pockets, and soft lining. Designed for comfort, confidence, and effortless style. Available in Yellow and Orange."
  },
  {
  id: "ivory-coord-set",
  name: "Ivory Elegance Co-Ord Set",
  category: "Co-Ords",
  price: 3299,
  compare: 3199,
  rating: "5.0",
  reviews: 8,
  tag: "New",
  image: "assets/1.1.jpeg",
  images: [
    "assets/1.1.jpeg",
    "assets/1.2.PNG",
  ],
 description: "A stylish denim co-ord set designed for effortless everyday dressing. Comfortable, versatile, and easy to style for casual outings, travel, or weekend plans."

  //description: "A premium two-piece co-ord set featuring a relaxed-fit shirt and matching trousers. Crafted from soft breathable fabric for effortless style, perfect for brunches, travel, work and evening outings."
},

{
  id: "ivory-coord-set2",
  name: "Ivory Elegance Co-Ord Set",
  category: "Co-Ords",
  price: 3299,
  compare: 3199,
  rating: "5.0",
  reviews: 8,
  tag: "New",
  image: "assets/2.1.jpeg",
  images: [
    "assets/2.1.jpeg",
    "assets/2.2.PNG",
  ],
 
 description: "A stylish denim co-ord set designed for effortless everyday dressing. Comfortable, versatile, and easy to style for casual outings, travel, or weekend plans."

  //description: "A premium two-piece co-ord set featuring a relaxed-fit shirt and matching trousers. Crafted from soft breathable fabric for effortless style, perfect for brunches, travel, work and evening outings."
},
{
  id: "urban-denim-coord",
  name: "Urban Denim Dresses",
  category: "Denim",
  price: 2999,
  compare: 3499,
  rating: "5.0",
  reviews: 8,
  tag: "New",
  image: "assets/D1.jpeg",
  images: ["assets/D1.jpeg"],
  description: "A timeless denim dress with a flattering fit and everyday comfort. Perfect for casual days, brunch dates, and effortless street-style looks."
},

{
  id: "classic-blue-coord",
  name: "Classic Blue Denim Dresses",
  category: "Denim",
  price: 2999,
  compare: 3499,
  rating: "5.0",
  reviews: 10,
  tag: "Trending",
  image: "assets/D2.PNG",
  images: ["assets/D2.PNG"],
  description: "A timeless denim dress with a flattering fit and everyday comfort. Perfect for casual days, brunch dates, and effortless street-style looks."
},

{
  id: "midnight-denim-coord",
  name: "Midnight Denim Dresses",
  category: "Denim",
  price: 2999,
  compare: 3499,
  rating: "5.0",
  reviews: 12,
  tag: "Best Seller",
  image: "assets/D3.jpeg",
  images: ["assets/D3.jpeg"],
  description: "A timeless denim dress with a flattering fit and everyday comfort. Perfect for casual days, brunch dates, and effortless street-style looks."
},

{
  id: "skyline-coord-set",
  name: "Skyline Denim Dresses",
  category: "Denim",
  price: 2999,
  compare: 3499,
  rating: "5.0",
  reviews: 6,
  tag: "New",
  image: "assets/D4.PNG",
  images: ["assets/D4.PNG"],
  description: "A timeless denim dress with a flattering fit and everyday comfort. Perfect for casual days, brunch dates, and effortless street-style looks."
},

{
  id: "everyday-denim-coord",
  name: "Everyday Denim Dresses",
  category: "Denim",
  price: 2999,
  compare: 3499,
  rating: "5.0",
  reviews: 9,
  tag: "Offer",
  image: "assets/D5.PNG",
  images: ["assets/D5.PNG"],
  description: "A timeless denim dress with a flattering fit and everyday comfort. Perfect for casual days, brunch dates, and effortless street-style looks."
},

{
  id: "vintage-wash-coord",
  name: "Vintage Wash Denim Dresses",
  category: "Denim",
  price: 2999,
  compare: 3499,
  rating: "5.0",
  reviews: 11,
  tag: "Trending",
  image: "assets/D6.PNG",
  images: ["assets/D6.PNG"],
  description: "A timeless denim dress with a flattering fit and everyday comfort. Perfect for casual days, brunch dates, and effortless street-style looks."
},

{
  id: "weekend-denim-coord",
  name: "Weekend Denim Dresses",
  category: "Denim",
  price: 2999,
  compare: 3499,
  rating: "5.0",
  reviews: 7,
  tag: "New",
  image: "assets/D7.jpeg",
  images: ["assets/D7.jpeg"],
  description: "A timeless denim dress with a flattering fit and everyday comfort. Perfect for casual days, brunch dates, and effortless street-style looks."
},

{
  id: "signature-denim-coord",
  name: "Signature Denim Dresses",
  category: "Denim",
  price: 2999,
  compare: 3499,
  rating: "5.0",
  reviews: 13,
  tag: "Best Seller",
  image: "assets/D8.PNG",
  images: ["assets/D8.PNG"],
  description: "A timeless denim dress with a flattering fit and everyday comfort. Perfect for casual days, brunch dates, and effortless street-style looks."
}



];

const categories = [
  { name: "Co-Ords", image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=700&q=85" },
  { name: "Dresses", image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&w=700&q=85" },
{
  name: "Denim",
  image: ["assets/ldki.jpeg"]
}
];

const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL"];
const exactMeasurements = ["Standard size", "Bust", "Waist", "Hip", "Shoulder", "Sleeve length", "Dress length", "Full body measurements"];
const currency = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

function getCart() {
  return JSON.parse(localStorage.getItem("adorCart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("adorCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = getCart().reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = count;
  });
}

function productUrl(product) {
  return `product.html?id=${product.id}`;
}

function discount(product) {
  return Math.round(((product.compare - product.price) / product.compare) * 100);
}

function renderProductCard(product) {
  return `
    <article class="product-card">
      <a href="${productUrl(product)}">
        <div class="image-wrap">
          <img src="${product.image}" alt="${product.name}" />
          <span class="badge">${product.tag}</span>
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="rating">${product.rating} / 5.0 (${product.reviews})</div>
          <div class="price">
            <span class="sale">${currency.format(product.price)}</span>
            <span class="compare">${currency.format(product.compare)}</span>
            <span class="discount">(${discount(product)}% OFF)</span>
          </div>
        </div>
      </a>
    </article>
  `;
}

function renderProductGrids() {
  document.querySelectorAll("[data-product-grid]").forEach((grid) => {
    const type = grid.dataset.productGrid;
    const urlCategory = new URLSearchParams(location.search).get("category");
    let list = products;
    if (type === "bestsellers") list = products.slice(0, 4);
    if (type === "deals") list = products.slice(2, 6);
    if (urlCategory) list = products.filter((product) => product.category === urlCategory);
    grid.innerHTML = list.map(renderProductCard).join("");
  });
}

function renderCategories() {
  const strip = document.querySelector("[data-category-strip]");
  if (!strip) return;
  strip.innerHTML = categories
    .map((category) => `<div class="category-item"><a class="category-card" href="categories.html?category=${encodeURIComponent(category.name)}"><img src="${category.image}" alt="${category.name}" /><span>${category.name}</span></a><p class="category-name">${category.name}</p></div>`)
    .join("");
}

function renderFilters() {
  const bar = document.querySelector("[data-filter-bar]");
  if (!bar) return;
  const selected = new URLSearchParams(location.search).get("category") || "All";
  const options = ["All", ...new Set(products.map((product) => product.category))];
  bar.innerHTML = options
    .map((option) => `<button class="${selected === option ? "active" : ""}" data-category="${option}">${option}</button>`)
    .join("");
  bar.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const category = button.dataset.category;
    location.href = category === "All" ? "categories.html" : `categories.html?category=${encodeURIComponent(category)}`;
  });
}

function renderProductDetail() {
  const mount = document.querySelector("[data-product-detail]");
  if (!mount) return;
  const id = new URLSearchParams(location.search).get("id") || products[0].id;
  const product = products.find((item) => item.id === id) || products[0];
  document.title = `${product.name} | Ador`;
  mount.innerHTML = `
    <section class="product-detail">
      <div class="product-gallery">
        <img src="${(product.images && product.images[0]) || product.image}" alt="${product.name}" data-main-image />
        ${product.images && product.images.length > 1 ? `<div class="thumb-row">${product.images.map((src, i) => `<button type="button" class="thumb${i === 0 ? " active" : ""}" data-thumb="${src}"><img src="${src}" alt="${product.name} ${i + 1}"/></button>`).join("")}</div>` : ""}
      </div>
      <div class="product-summary">
        <p class="rating">${product.rating} / 5.0 (${product.reviews} reviews)</p>
        <div class="product-facts">
          <h1 class="product-name">${product.name}</h1>
          <p class="product-category">${product.category}</p>
          <div class="price">
            <span class="sale">${currency.format(product.price)}</span>
            <span class="compare">${currency.format(product.compare)}</span>
            <span class="discount">${discount(product)}% off</span>
          </div>
          ${product.colors ? `<div class="color-options"><p class="option-title">Color: <span data-color-name>${product.colors[0].name}</span></p><div class="color-swatches">${product.colors.map((c, i) => `<button type="button" class="color-swatch${i === 0 ? " active" : ""}" data-color="${c.name}" data-color-images='${JSON.stringify(c.images)}' aria-label="${c.name}" title="${c.name}" style="background:${c.swatch}"></button>`).join("")}</div></div>` : ""}
          <div class="product-description">
            <h2 class="desc-heading">Description</h2>
            <p>${product.description}</p>
          </div>
        </div>
        <form data-add-form>
          <p class="option-title">Size</p>
          <div class="size-options">
            ${sizes.map((size, index) => `<label><input type="radio" name="size" value="${size}" ${index === 1 ? "checked" : ""} />${size}</label>`).join("")}
          </div>
          <label class="measurement-select">
            <p class="option-title">Exact measurements selection</p>
            <select name="measurementType">
              ${exactMeasurements.map((measurement) => `<option value="${measurement}">${measurement}</option>`).join("")}
            </select>
          </label>
          <label class="custom-size">
            <p class="option-title">Custom size notes</p>
            <textarea name="customSize" placeholder="Example: Bust 36, waist 30, hip 40, height 5'5. Leave blank for standard size."></textarea>
          </label>
          <a class="whatsapp-button" href="https://wa.link/eoqw3x" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.415h-.004c-3.849 0-6.986 3.136-6.991 6.984 0 1.38.405 2.72 1.17 3.87l-1.203 2.185 2.503-.657a6.982 6.982 0 0 0 3.519.903h.003a6.988 6.988 0 0 0 6.985-6.986c0-3.848-3.137-6.984-6.992-6.984"/></svg>
            Need Custom Fitting? Chat with us
          </a>
          <div class="quantity">
            <label>
              <p class="option-title">Qty</p>
              <input name="quantity" type="number" min="1" value="1" />
            </label>
            <button class="button primary full" type="submit">Add to cart</button>
          </div>
        </form>
        <div class="product-meta">
          <p>Free delivery above Rs. 1499. Easy exchange and return.</p>
          <p>Need a special fit? Add custom size notes before adding to cart.</p>
        </div>
      </div>
    </section>
  `;

  mount.querySelectorAll("[data-thumb]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-thumb");
      const main = mount.querySelector("[data-main-image]");
      if (main) main.src = src;
      mount.querySelectorAll(".thumb").forEach((t) => t.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  mount.querySelectorAll("[data-color]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const imgs = JSON.parse(btn.getAttribute("data-color-images"));
      const name = btn.getAttribute("data-color");
      const main = mount.querySelector("[data-main-image]");
      if (main) main.src = imgs[0];
      const nameEl = mount.querySelector("[data-color-name]");
      if (nameEl) nameEl.textContent = name;
      const thumbRow = mount.querySelector(".thumb-row");
      if (thumbRow) {
        thumbRow.innerHTML = imgs.map((src, i) => `<button type="button" class="thumb${i === 0 ? " active" : ""}" data-thumb="${src}"><img src="${src}" alt="${name} ${i + 1}"/></button>`).join("");
        thumbRow.querySelectorAll("[data-thumb]").forEach((t) => {
          t.addEventListener("click", () => {
            const src = t.getAttribute("data-thumb");
            if (main) main.src = src;
            thumbRow.querySelectorAll(".thumb").forEach((x) => x.classList.remove("active"));
            t.classList.add("active");
          });
        });
      }
      mount.querySelectorAll(".color-swatch").forEach((s) => s.classList.remove("active"));
      btn.classList.add("active");
    });
  });


  mount.querySelector("[data-add-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    addToCart({
      id: product.id,
      size: form.get("size"),
      measurementType: form.get("measurementType"),
      customSize: String(form.get("customSize") || "").trim(),
      quantity: Math.max(1, Number(form.get("quantity") || 1))
    });
    location.href = "cart.html";
  });
}

function addToCart(item) {
  const cart = getCart();
  const key = `${item.id}-${item.size}-${item.measurementType}-${item.customSize}`;
  const existing = cart.find((entry) => `${entry.id}-${entry.size}-${entry.measurementType}-${entry.customSize}` === key);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push(item);
  }
  saveCart(cart);
}

function renderCart() {
  const mount = document.querySelector("[data-cart-page]");
  if (!mount) return;
  const cart = getCart();
  if (!cart.length) {
    mount.innerHTML = `<div class="empty-state"><h2>Your cart is empty</h2><p>Find your next party-ready piece.</p><a class="button primary" href="categories.html">Continue shopping</a></div>`;
    return;
  }
  const detailed = cart.map((item) => ({ ...item, product: products.find((product) => product.id === item.id) })).filter((item) => item.product);
  const subtotal = detailed.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  mount.innerHTML = `
    <div class="cart-items">
      ${detailed
        .map(
          (item, index) => `
          <article class="cart-item">
            <img src="${item.product.image}" alt="${item.product.name}" />
            <div>
              <h3>${item.product.name}</h3>
              <p>Size: ${item.size}</p>
              ${item.measurementType ? `<p>Measurement: ${item.measurementType}</p>` : ""}
              ${item.customSize ? `<p>Custom: ${item.customSize}</p>` : ""}
              <p>Qty: ${item.quantity}</p>
              <button data-remove="${index}" type="button">Remove</button>
            </div>
            <strong class="sale">${currency.format(item.product.price * item.quantity)}</strong>
          </article>
        `
        )
        .join("")}
    </div>
    <aside class="cart-summary">
      <h2>Order Summary</h2>
      <div><span>Subtotal</span><strong>${currency.format(subtotal)}</strong></div>
      <div><span>Shipping</span><strong>${subtotal >= 1499 ? "Free" : currency.format(99)}</strong></div>
      <div><span>Total</span><strong>${currency.format(subtotal + (subtotal >= 1499 ? 0 : 99))}</strong></div>
      <button class="button primary full" type="button">Checkout</button>
    </aside>
  `;
  mount.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove]");
    if (!button) return;
    const nextCart = getCart();
    nextCart.splice(Number(button.dataset.remove), 1);
    saveCart(nextCart);
    renderCart();
  });
}

function renderRefundPolicy() {
  document.querySelectorAll(".site-footer").forEach((footer) => {
    if (footer.querySelector(".refund-policy")) return;
    const policy = document.createElement("details");
    policy.className = "refund-policy";
    policy.innerHTML = `
      <summary>Return & Exchange Policy</summary>
      <div>
        <p>At Ador, every piece is thoughtfully made according to your selected measurements and customization details. Because of this personalised process, each outfit is crafted specifically for you.</p>
        <p>Since we take time to confirm your exact sizing and preferences before production, we ensure that your outfit is made with the right fit in mind from the very beginning.</p>
        <h3>Careful Size Confirmation</h3>
        <p>Every order is personally checked and confirmed so that your measurements and customization details are accurately understood before we begin making your outfit.</p>
        <h3>Made-to-Fit Approach</h3>
        <p>As each piece is created based on your provided measurements, we aim to deliver a fit that aligns closely with your body shape and preferences.</p>
        <h3>Alteration Support</h3>
        <p>In case any minor adjustment is needed, alteration assistance is available so your outfit fits you perfectly and feels just right.</p>
        <p>At Ador, our focus is always on getting the fit right from the start, so you receive a piece that feels truly made for you.</p>
      </div>
    `;
    const shipping = document.createElement("details");
    shipping.className = "refund-policy";
    shipping.innerHTML = `
      <summary>Shipping, Alteration & Exchange Policy</summary>
      <div>
        <p>At Ador, every outfit is thoughtfully crafted with care and attention to detail. We are committed to ensuring a smooth and satisfying shopping experience for all our customers.</p>
        <ul class="policy-jump">
          <li><a href="#policy-delivery">Delivery Timeline</a></li>
          <li><a href="#policy-custom">Customized Outfits</a></li>
          <li><a href="#policy-alteration">Free Alterations</a></li>
          <li><a href="#policy-support">Customer Support</a></li>
        </ul>
        <h3 id="policy-delivery"><a href="#policy-delivery">Delivery Timeline</a></h3>
        <ul>
          <li><strong>Standard Orders:</strong> Delivered within 15 days.</li>
          <li><strong>Custom-Made Orders:</strong> Delivered within 20–25 days, depending on the customization requirements.</li>
        </ul>
        <h3 id="policy-custom"><a href="#policy-custom">Customized Outfits</a></h3>
        <p>As customized outfits are specially made according to your measurements and preferences, we do not offer returns or exchanges on custom-made pieces.</p>
        <h3 id="policy-alteration"><a href="#policy-alteration">Free Alterations</a></h3>
        <p>Your perfect fit is important to us. In case of any measurement-related issues, we provide alterations completely free of cost.</p>
        <ul>
          <li>Alterations are usually completed within 1–2 working days after the outfit reaches us.</li>
          <li>Our team will guide you through the alteration process to ensure the best possible fit.</li>
        </ul>
        <h3 id="policy-support"><a href="#policy-support">Customer Support</a></h3>
        <p>Need assistance? We're always happy to help.</p>
        <p>📞 WhatsApp: <a href="https://wa.me/919330305686" target="_blank" rel="noopener">+91 93303 05686</a></p>
      </div>
    `;
    const copyright = footer.querySelector(".copyright, .site-footer > p:last-child");
    footer.insertBefore(policy, copyright || null);
    footer.insertBefore(shipping, copyright || null);
  });
}

function renderSearch() {
  const triggers = document.querySelectorAll(".header-search");
  if (!triggers.length) return;
  const overlay = document.createElement("div");
  overlay.className = "search-overlay";
  overlay.innerHTML = `
    <div class="search-panel" role="dialog" aria-label="Search">
      <div class="search-bar">
        <svg class="search-bar-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        <input type="search" placeholder="Search products or categories" aria-label="Search" data-search-input />
        <button type="button" class="search-close" aria-label="Close search">&times;</button>
      </div>
      <div class="search-results" data-search-results>
        <p class="search-hint">Try "saree", "lehenga", or a category name.</p>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  const input = overlay.querySelector("[data-search-input]");
  const results = overlay.querySelector("[data-search-results]");
  const open = () => {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => input.focus(), 30);
  };
  const close = () => {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  };
  triggers.forEach((t) => t.addEventListener("click", open));
  overlay.querySelector(".search-close").addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      results.innerHTML = `<p class="search-hint">Try "saree", "lehenga", or a category name.</p>`;
      return;
    }
    const cats = categories.filter((c) => c.name.toLowerCase().includes(q));
    const prods = products.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).slice(0, 8);
    if (!cats.length && !prods.length) {
      results.innerHTML = `<p class="search-hint">No matches for "${q}".</p>`;
      return;
    }
    let html = "";
    if (cats.length) {
      html += `<div class="search-group"><h4>Categories</h4><div class="search-cats">` +
        cats.map((c) => `<a href="categories.html?category=${encodeURIComponent(c.name)}" class="search-cat"><img src="${c.image}" alt=""><span>${c.name}</span></a>`).join("") +
        `</div></div>`;
    }
    if (prods.length) {
      html += `<div class="search-group"><h4>Products</h4><div class="search-prods">` +
        prods.map((p) => `<a href="product.html?id=${p.id}" class="search-prod"><img src="${p.image}" alt=""><div><span class="search-prod-name">${p.name}</span><span class="search-prod-price">${currency.format(p.price)}</span></div></a>`).join("") +
        `</div></div>`;
    }
    results.innerHTML = html;
  });
}

function renderMobileMenu() {
  const triggers = document.querySelectorAll(".nav-toggle");
  if (!triggers.length) return;
  const links = [
    { href: "index.html", label: "Home" },
    { href: "categories.html", label: "Categories" },
    { href: "about.html", label: "The Ador Edit" },
    { href: "contact.html", label: "Contact" },
    { href: "cart.html", label: "Cart" },
  ];
  const drawer = document.createElement("div");
  drawer.className = "mobile-drawer";
  drawer.innerHTML = `
    <div class="mobile-drawer-panel" role="dialog" aria-label="Menu">
      <div class="mobile-drawer-head">
        <strong>Ador</strong>
        <button type="button" class="mobile-drawer-close" aria-label="Close menu">&times;</button>
      </div>
      <nav class="mobile-drawer-nav">
        ${links.map((l) => `<a href="${l.href}">${l.label}</a>`).join("")}
      </nav>
    </div>
  `;
  document.body.appendChild(drawer);
  const open = () => { drawer.classList.add("open"); document.body.style.overflow = "hidden"; };
  const close = () => { drawer.classList.remove("open"); document.body.style.overflow = ""; };
  triggers.forEach((t) => t.addEventListener("click", open));
  drawer.querySelector(".mobile-drawer-close").addEventListener("click", close);
  drawer.addEventListener("click", (e) => { if (e.target === drawer) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

renderCategories();
renderFilters();
renderProductGrids();
renderProductDetail();
renderCart();
renderRefundPolicy();
renderSearch();
renderMobileMenu();
updateCartCount();

