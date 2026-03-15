const STORAGE_KEYS = {
  auth: "gmTailorsAdminAuth",
  orders: "gmTailorsOrders",
  inventory: "gmTailorsInventory",
  services: "gmTailorsServices",
};

const DEMO_CREDENTIALS = {
  username: "admin",
  password: "1234",
};

const defaultOrders = [
  {
    id: "ord-1001",
    customer: "Rahul Deshmukh",
    phone: "9876543210",
    email: "rahul.d@example.com",
    garment: "Suit",
    status: "In Progress",
    dueDate: "2026-03-18",
    amount: 8200,
    measurements: "Chest 40, Waist 34, Sleeve 25",
    notes: "Charcoal Italian blend, slim lapel, wedding fit",
    createdAt: "2026-03-10T09:00:00.000Z",
  },
  {
    id: "ord-1002",
    customer: "Aarav Patil",
    phone: "9988776655",
    email: "aarav.p@example.com",
    garment: "Shirt",
    status: "Ready",
    dueDate: "2026-03-16",
    amount: 1850,
    measurements: "Collar 15, Chest 39, Sleeve 24.5",
    notes: "Oxford cotton, French cuffs",
    createdAt: "2026-03-11T12:10:00.000Z",
  },
  {
    id: "ord-1003",
    customer: "Kabir Shah",
    phone: "9123456780",
    email: "kabir.s@example.com",
    garment: "Sherwani",
    status: "Pending",
    dueDate: "2026-03-22",
    amount: 14500,
    measurements: "Chest 42, Shoulder 18, Length 42",
    notes: "Ivory tone with hand embroidery",
    createdAt: "2026-03-12T15:35:00.000Z",
  },
  {
    id: "ord-1004",
    customer: "Neil Kulkarni",
    phone: "9011223344",
    email: "neil.k@example.com",
    garment: "Pant",
    status: "Delivered",
    dueDate: "2026-03-14",
    amount: 2100,
    measurements: "Waist 32, Hip 39, Length 40",
    notes: "Navy wool stretch, flat front",
    createdAt: "2026-03-08T11:45:00.000Z",
  },
];

const defaultInventory = [
  {
    id: "inv-201",
    name: "Italian Wool Navy",
    category: "Fabric",
    quantity: 14,
    unit: "meters",
    price: 1850,
    restockDate: "2026-03-20",
    supplier: "Regal Fabrics",
    threshold: 10,
  },
  {
    id: "inv-202",
    name: "Mother of Pearl Buttons",
    category: "Accessory",
    quantity: 90,
    unit: "pcs",
    price: 32,
    restockDate: "2026-04-04",
    supplier: "Classic Trims",
    threshold: 50,
  },
  {
    id: "inv-203",
    name: "Tuxedo Ready Blazer",
    category: "Ready Item",
    quantity: 3,
    unit: "pcs",
    price: 5600,
    restockDate: "2026-03-19",
    supplier: "In-house",
    threshold: 4,
  },
  {
    id: "inv-204",
    name: "Linen Sand Fabric",
    category: "Fabric",
    quantity: 7,
    unit: "meters",
    price: 1220,
    restockDate: "2026-03-17",
    supplier: "Urban Looms",
    threshold: 8,
  },
];

const defaultServices = [
  {
    id: "svc-301",
    name: "Bespoke Suit",
    price: 7800,
    timeline: "7 days",
    description: "Full measurement session, trial fitting, handcrafted finishing.",
  },
  {
    id: "svc-302",
    name: "Wedding Sherwani",
    price: 14500,
    timeline: "12 days",
    description: "Premium ceremonial tailoring with embroidery coordination.",
  },
  {
    id: "svc-303",
    name: "Express Alteration",
    price: 900,
    timeline: "24 hours",
    description: "Priority hem, taper, fit correction and pressing support.",
  },
];

let state = {
  orders: [],
  inventory: [],
  services: [],
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAdminDashboard);
} else {
  initAdminDashboard();
}

function initAdminDashboard() {
  if (!document.getElementById("loginSection") || !document.getElementById("dashboardSection")) {
    return;
  }

  hydrateState();
  bindAuth();
  bindNavigation();
  bindOrderForm();
  bindInventoryForm();
  bindServiceForm();
  bindFilters();
  updateLoginStats();
  setTodayChip();

  if (localStorage.getItem(STORAGE_KEYS.auth) === "true") {
    showDashboard();
  } else {
    showLogin();
  }
}

function hydrateState() {
  state.orders = loadCollection(STORAGE_KEYS.orders, defaultOrders);
  state.inventory = loadCollection(STORAGE_KEYS.inventory, defaultInventory);
  state.services = loadCollection(STORAGE_KEYS.services, defaultServices);
}

function loadCollection(key, fallback) {
  try {
    const existing = JSON.parse(localStorage.getItem(key) || "null");
    if (Array.isArray(existing)) {
      return existing;
    }
  } catch (error) {
    // Ignore invalid storage and restore defaults.
  }

  const legacy = loadLegacyCollection(key);
  if (legacy) {
    localStorage.setItem(key, JSON.stringify(legacy));
    return legacy;
  }

  localStorage.setItem(key, JSON.stringify(fallback));
  return [...fallback];
}

function loadLegacyCollection(key) {
  const legacyMap = {
    [STORAGE_KEYS.orders]: "orders",
    [STORAGE_KEYS.inventory]: "inventory",
    [STORAGE_KEYS.services]: "services",
  };

  const legacyKey = legacyMap[key];
  if (!legacyKey) {
    return null;
  }

  try {
    const existing = JSON.parse(localStorage.getItem(legacyKey) || "null");
    if (Array.isArray(existing)) {
      if (key === STORAGE_KEYS.orders) {
        return existing.map((order, index) => ({
          id: order.id || createId(`ord${index}`),
          customer: order.customer || order.name || "Customer",
          phone: order.phone || "",
          email: order.email || "",
          garment: capitalize(order.garment || "Suit"),
          status: order.status || "Pending",
          dueDate: order.dueDate || order.date || "",
          amount: Number(order.amount || 0),
          measurements: order.measurements || "",
          notes: order.notes || "",
          createdAt: order.createdAt || new Date().toISOString(),
        }));
      }

      if (key === STORAGE_KEYS.inventory) {
        return existing.map((item, index) => ({
          id: item.id || createId(`inv${index}`),
          name: item.name || item.itemName || "Inventory Item",
          category: item.category || "Fabric",
          quantity: Number(item.quantity || 0),
          unit: item.unit || "pcs",
          price: Number(item.price || 0),
          restockDate: item.restockDate || "",
          supplier: item.supplier || "Unknown supplier",
          threshold: Number(item.threshold || 5),
        }));
      }

      return existing;
    }
  } catch (error) {
    return null;
  }

  return null;
}

function bindAuth() {
  const loginForm = document.getElementById("loginForm");
  const loginSubmitBtn = document.getElementById("loginSubmitBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  const handleLogin = (event) => {
    event.preventDefault();
    const username = document.getElementById("username")?.value.trim();
    const password = document.getElementById("password")?.value.trim();
    const message = document.getElementById("loginMessage");

    if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
      localStorage.setItem(STORAGE_KEYS.auth, "true");
      if (message) {
        message.textContent = "";
      }
      showDashboard();
      return;
    }

    if (message) {
      message.textContent = "Invalid credentials. Use the configured admin login.";
    }
  };

  loginForm?.addEventListener("submit", handleLogin);
  loginSubmitBtn?.addEventListener("click", handleLogin);

  logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEYS.auth);
    showLogin();
  });
}

function showDashboard() {
  const loginSection = document.getElementById("loginSection");
  const dashboardSection = document.getElementById("dashboardSection");
  if (!loginSection || !dashboardSection) {
    return;
  }

  loginSection.hidden = true;
  loginSection.style.display = "none";
  dashboardSection.hidden = false;
  dashboardSection.style.display = "grid";
  renderAll();
}

function showLogin() {
  const loginSection = document.getElementById("loginSection");
  const dashboardSection = document.getElementById("dashboardSection");
  if (!loginSection || !dashboardSection) {
    return;
  }

  loginSection.hidden = false;
  loginSection.style.display = "grid";
  dashboardSection.hidden = true;
  dashboardSection.style.display = "none";
}

function bindNavigation() {
  const links = Array.from(document.querySelectorAll(".nav-link"));
  links.forEach((link) => {
    link.addEventListener("click", () => {
      const section = link.dataset.section || "dashboard";
      links.forEach((item) => item.classList.toggle("is-active", item === link));
      document.querySelectorAll(".panel-section").forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.panel === section);
      });
    });
  });
}

function bindOrderForm() {
  const form = document.getElementById("orderForm");
  const resetBtn = document.getElementById("orderResetBtn");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const order = {
      id: document.getElementById("orderId")?.value || createId("ord"),
      customer: valueOf("orderCustomer"),
      phone: valueOf("orderPhone"),
      email: valueOf("orderEmail"),
      garment: valueOf("orderGarment"),
      status: valueOf("orderStatus"),
      dueDate: valueOf("orderDueDate"),
      amount: Number(valueOf("orderAmount")),
      measurements: valueOf("orderMeasurements"),
      notes: valueOf("orderNotes"),
      createdAt: new Date().toISOString(),
    };

    const existingIndex = state.orders.findIndex((item) => item.id === order.id);
    if (existingIndex >= 0) {
      order.createdAt = state.orders[existingIndex].createdAt;
      state.orders[existingIndex] = order;
    } else {
      state.orders.unshift(order);
    }

    persist(STORAGE_KEYS.orders, state.orders);
    form.reset();
    setValue("orderId", "");
    setOrderSubmitLabel("Save Order");
    renderAll();
    focusSection("orders");
  });

  resetBtn?.addEventListener("click", () => {
    form?.reset();
    setValue("orderId", "");
    setOrderSubmitLabel("Save Order");
  });
}

function bindInventoryForm() {
  const form = document.getElementById("inventoryForm");
  const resetBtn = document.getElementById("inventoryResetBtn");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const item = {
      id: document.getElementById("inventoryId")?.value || createId("inv"),
      name: valueOf("inventoryName"),
      category: valueOf("inventoryCategory"),
      quantity: Number(valueOf("inventoryQuantity")),
      unit: valueOf("inventoryUnit"),
      price: Number(valueOf("inventoryPrice")),
      restockDate: valueOf("inventoryRestockDate"),
      supplier: valueOf("inventorySupplier"),
      threshold: Number(valueOf("inventoryThreshold")),
    };

    const existingIndex = state.inventory.findIndex((entry) => entry.id === item.id);
    if (existingIndex >= 0) {
      state.inventory[existingIndex] = item;
    } else {
      state.inventory.unshift(item);
    }

    persist(STORAGE_KEYS.inventory, state.inventory);
    form.reset();
    setValue("inventoryId", "");
    setInventorySubmitLabel("Save Item");
    renderAll();
    focusSection("inventory");
  });

  resetBtn?.addEventListener("click", () => {
    form?.reset();
    setValue("inventoryId", "");
    setInventorySubmitLabel("Save Item");
  });
}

function bindServiceForm() {
  const form = document.getElementById("serviceForm");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    state.services.unshift({
      id: createId("svc"),
      name: valueOf("serviceName"),
      price: Number(valueOf("servicePrice")),
      timeline: valueOf("serviceTimeline"),
      description: valueOf("serviceDescription"),
    });
    persist(STORAGE_KEYS.services, state.services);
    form.reset();
    renderServices();
  });
}

function bindFilters() {
  document.getElementById("orderStatusFilter")?.addEventListener("change", renderOrders);
  document.getElementById("inventoryCategoryFilter")?.addEventListener("change", renderInventory);
  document.getElementById("globalSearch")?.addEventListener("input", () => {
    renderOrders();
    renderInventory();
    renderCustomers();
  });
}

function renderAll() {
  renderDashboard();
  renderOrders();
  renderCustomers();
  renderInventory();
  renderServices();
  updateLoginStats();
}

function renderDashboard() {
  const deliveredOrders = state.orders.filter((order) => order.status === "Delivered").length;
  const totalRevenue = state.orders.reduce((sum, order) => sum + Number(order.amount || 0), 0);
  const lowStockItems = state.inventory.filter((item) => Number(item.quantity) <= Number(item.threshold));
  const activeOrders = state.orders.filter((order) => order.status !== "Delivered").length;
  const customers = buildCustomers();
  const deliveryRate = state.orders.length
    ? Math.round((deliveredOrders / state.orders.length) * 100)
    : 0;

  const stats = [
    { label: "Active Orders", value: activeOrders, note: "Currently in production" },
    { label: "Total Revenue", value: formatCurrency(totalRevenue), note: "Across all saved orders" },
    { label: "Customers", value: customers.length, note: "Unique client profiles" },
    { label: "Low Stock", value: lowStockItems.length, note: "Items at or below threshold" },
  ];

  const statsGrid = document.getElementById("statsGrid");
  if (statsGrid) {
    statsGrid.innerHTML = stats
      .map(
        (stat) => `
          <article class="stat-card">
            <h3>${escapeHtml(stat.label)}</h3>
            <strong>${escapeHtml(String(stat.value))}</strong>
            <p class="muted-copy">${escapeHtml(stat.note)}</p>
          </article>
        `,
      )
      .join("");
  }

  const summary = document.getElementById("heroSummary");
  if (summary) {
    summary.textContent = `${activeOrders} active orders, ${lowStockItems.length} low-stock materials, and ${customers.length} client profiles are being tracked in real time.`;
  }

  const rateEl = document.getElementById("deliveryRate");
  const progressRing = document.querySelector(".progress-ring");
  if (rateEl) {
    rateEl.textContent = `${deliveryRate}%`;
  }
  if (progressRing) {
    progressRing.style.background = `radial-gradient(circle closest-side, #fff 70%, transparent 72%), conic-gradient(var(--success) ${deliveryRate * 3.6}deg, rgba(37, 111, 84, 0.16) 0deg)`;
  }

  const health = document.getElementById("sidebarHealth");
  if (health) {
    health.textContent = lowStockItems.length > 2 ? "Watch restocking" : "Stable";
  }

  renderActivityFeed();
  renderDeliveryQueue();
  renderLowStock();
}

function renderActivityFeed() {
  const feed = document.getElementById("activityFeed");
  if (!feed) {
    return;
  }

  const items = state.orders
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5)
    .map(
      (order) => `
        <div class="activity-item">
          <div>
            <strong>${escapeHtml(order.customer)}</strong>
            <p class="muted-copy">${escapeHtml(order.garment)} order updated for ${formatDate(order.dueDate)}.</p>
          </div>
          <span class="badge ${statusClass(order.status)}">${escapeHtml(order.status)}</span>
        </div>
      `,
    );

  feed.innerHTML = items.length ? items.join("") : '<div class="empty-state">No order activity yet.</div>';
}

function renderDeliveryQueue() {
  const container = document.getElementById("deliveryQueue");
  if (!container) {
    return;
  }

  const queue = state.orders
    .filter((order) => order.status !== "Delivered")
    .slice()
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 4)
    .map(
      (order) => `
        <div class="stack-item">
          <h4>${escapeHtml(order.customer)} <span class="badge ${statusClass(order.status)}">${escapeHtml(order.status)}</span></h4>
          <p class="muted-copy">${escapeHtml(order.garment)} | ${formatDate(order.dueDate)} | ${formatCurrency(order.amount)}</p>
        </div>
      `,
    );

  container.innerHTML = queue.length ? queue.join("") : '<div class="empty-state">No pending deliveries.</div>';
}

function renderLowStock() {
  const container = document.getElementById("lowStockList");
  if (!container) {
    return;
  }

  const items = state.inventory
    .filter((item) => Number(item.quantity) <= Number(item.threshold))
    .slice()
    .sort((a, b) => Number(a.quantity) - Number(b.quantity))
    .map(
      (item) => `
        <div class="stack-item">
          <h4>${escapeHtml(item.name)} <span class="badge low">Low</span></h4>
          <p class="muted-copy">${escapeHtml(item.category)} | ${escapeHtml(String(item.quantity))} ${escapeHtml(item.unit)} left | Restock ${formatDate(item.restockDate)}</p>
        </div>
      `,
    );

  container.innerHTML = items.length ? items.join("") : '<div class="empty-state">Stock levels are healthy.</div>';
}

function renderOrders() {
  const tableBody = document.getElementById("ordersTableBody");
  if (!tableBody) {
    return;
  }

  const statusFilter = document.getElementById("orderStatusFilter")?.value || "all";
  const query = globalQuery();
  const filtered = state.orders.filter((order) => {
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    const haystack = `${order.customer} ${order.phone} ${order.email} ${order.garment} ${order.measurements} ${order.notes}`.toLowerCase();
    return matchesStatus && haystack.includes(query);
  });

  tableBody.innerHTML = filtered.length
    ? filtered
        .map(
          (order) => `
            <tr>
              <td>
                <strong>${escapeHtml(order.customer)}</strong><br />
                <span class="muted-copy">${escapeHtml(order.phone)}<br />${escapeHtml(order.email)}</span>
              </td>
              <td>${escapeHtml(order.garment)}</td>
              <td>${formatDate(order.dueDate)}</td>
              <td>
                <select class="inline-select" data-order-status="${escapeHtml(order.id)}">
                  ${["Pending", "In Progress", "Ready", "Delivered"]
                    .map(
                      (status) =>
                        `<option value="${status}" ${status === order.status ? "selected" : ""}>${status}</option>`,
                    )
                    .join("")}
                </select>
              </td>
              <td>${formatCurrency(order.amount)}</td>
              <td>${escapeHtml(order.measurements)}</td>
              <td>
                <div class="table-actions">
                  <button type="button" data-order-edit="${escapeHtml(order.id)}">Edit</button>
                  <button type="button" data-order-delete="${escapeHtml(order.id)}">Delete</button>
                </div>
              </td>
            </tr>
          `,
        )
        .join("")
    : '<tr><td colspan="7"><div class="empty-state">No orders match the current filters.</div></td></tr>';

  tableBody.querySelectorAll("[data-order-status]").forEach((select) => {
    select.addEventListener("change", (event) => {
      const id = event.target.getAttribute("data-order-status");
      const order = state.orders.find((item) => item.id === id);
      if (!order) {
        return;
      }
      order.status = event.target.value;
      persist(STORAGE_KEYS.orders, state.orders);
      renderAll();
    });
  });

  tableBody.querySelectorAll("[data-order-edit]").forEach((button) => {
    button.addEventListener("click", () => editOrder(button.getAttribute("data-order-edit")));
  });

  tableBody.querySelectorAll("[data-order-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      state.orders = state.orders.filter((order) => order.id !== button.getAttribute("data-order-delete"));
      persist(STORAGE_KEYS.orders, state.orders);
      renderAll();
    });
  });
}

function renderCustomers() {
  const customerCards = document.getElementById("customerCards");
  const topCustomers = document.getElementById("topCustomers");
  if (!customerCards || !topCustomers) {
    return;
  }

  const query = globalQuery();
  const customers = buildCustomers().filter((customer) => {
    const haystack = `${customer.name} ${customer.phone} ${customer.email} ${customer.favoriteGarment}`.toLowerCase();
    return haystack.includes(query);
  });

  customerCards.innerHTML = customers.length
    ? customers
        .map(
          (customer) => `
            <article class="customer-card">
              <h4>${escapeHtml(customer.name)}</h4>
              <div class="customer-meta">
                <span>${escapeHtml(customer.phone)}</span>
                <span>${escapeHtml(customer.email)}</span>
                <span>${escapeHtml(String(customer.orders))} orders | ${formatCurrency(customer.spend)}</span>
                <span>Most requested: ${escapeHtml(customer.favoriteGarment)}</span>
              </div>
            </article>
          `,
        )
        .join("")
    : '<div class="empty-state">No customers match the current search.</div>';

  const leaders = buildCustomers()
    .slice(0, 4)
    .map(
      (customer) => `
        <div class="stack-item">
          <h4>${escapeHtml(customer.name)}</h4>
          <p class="muted-copy">${formatCurrency(customer.spend)} lifetime spend | ${escapeHtml(customer.favoriteGarment)}</p>
        </div>
      `,
    );

  topCustomers.innerHTML = leaders.length ? leaders.join("") : '<div class="empty-state">No customer history yet.</div>';
}

function renderInventory() {
  const tableBody = document.getElementById("inventoryTableBody");
  if (!tableBody) {
    return;
  }

  const categoryFilter = document.getElementById("inventoryCategoryFilter")?.value || "all";
  const query = globalQuery();
  const filtered = state.inventory.filter((item) => {
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    const haystack = `${item.name} ${item.category} ${item.unit} ${item.supplier}`.toLowerCase();
    return matchesCategory && haystack.includes(query);
  });

  tableBody.innerHTML = filtered.length
    ? filtered
        .map(
          (item) => `
            <tr>
              <td>
                <strong>${escapeHtml(item.name)}</strong><br />
                <span class="muted-copy">Reorder at ${escapeHtml(String(item.threshold))}</span>
              </td>
              <td>${escapeHtml(item.category)}</td>
              <td>${escapeHtml(String(item.quantity))}</td>
              <td>${escapeHtml(item.unit)}</td>
              <td>${escapeHtml(item.supplier)}</td>
              <td>${formatDate(item.restockDate)}</td>
              <td>${formatCurrency(Number(item.quantity) * Number(item.price))}</td>
              <td>
                <div class="table-actions">
                  <button type="button" data-inventory-edit="${escapeHtml(item.id)}">Edit</button>
                  <button type="button" data-inventory-delete="${escapeHtml(item.id)}">Delete</button>
                </div>
              </td>
            </tr>
          `,
        )
        .join("")
    : '<tr><td colspan="8"><div class="empty-state">No inventory items match the current filters.</div></td></tr>';

  tableBody.querySelectorAll("[data-inventory-edit]").forEach((button) => {
    button.addEventListener("click", () => editInventory(button.getAttribute("data-inventory-edit")));
  });

  tableBody.querySelectorAll("[data-inventory-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      state.inventory = state.inventory.filter((item) => item.id !== button.getAttribute("data-inventory-delete"));
      persist(STORAGE_KEYS.inventory, state.inventory);
      renderAll();
    });
  });
}

function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) {
    return;
  }

  grid.innerHTML = state.services
    .map(
      (service) => `
        <article class="service-card">
          <h4>${escapeHtml(service.name)}</h4>
          <div class="service-meta">
            <span>${formatCurrency(service.price)}</span>
            <span>${escapeHtml(service.timeline)}</span>
            <span>${escapeHtml(service.description)}</span>
          </div>
          <div class="table-actions">
            <button type="button" data-service-delete="${escapeHtml(service.id)}">Delete</button>
          </div>
        </article>
      `,
    )
    .join("");

  grid.querySelectorAll("[data-service-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      state.services = state.services.filter((service) => service.id !== button.getAttribute("data-service-delete"));
      persist(STORAGE_KEYS.services, state.services);
      renderServices();
    });
  });
}

function buildCustomers() {
  const customerMap = new Map();

  state.orders.forEach((order) => {
    const existing = customerMap.get(order.phone) || {
      name: order.customer,
      phone: order.phone,
      email: order.email,
      spend: 0,
      orders: 0,
      garments: {},
    };

    existing.spend += Number(order.amount || 0);
    existing.orders += 1;
    existing.garments[order.garment] = (existing.garments[order.garment] || 0) + 1;
    customerMap.set(order.phone, existing);
  });

  return Array.from(customerMap.values())
    .map((customer) => ({
      ...customer,
      favoriteGarment: Object.entries(customer.garments).sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A",
    }))
    .sort((a, b) => b.spend - a.spend);
}

function editOrder(id) {
  const order = state.orders.find((item) => item.id === id);
  if (!order) {
    return;
  }

  setValue("orderId", order.id);
  setValue("orderCustomer", order.customer);
  setValue("orderPhone", order.phone);
  setValue("orderEmail", order.email);
  setValue("orderGarment", order.garment);
  setValue("orderStatus", order.status);
  setValue("orderDueDate", order.dueDate);
  setValue("orderAmount", String(order.amount));
  setValue("orderMeasurements", order.measurements);
  setValue("orderNotes", order.notes);
  setOrderSubmitLabel("Update Order");
  focusSection("orders");
  document.getElementById("orderCustomer")?.focus();
}

function editInventory(id) {
  const item = state.inventory.find((entry) => entry.id === id);
  if (!item) {
    return;
  }

  setValue("inventoryId", item.id);
  setValue("inventoryName", item.name);
  setValue("inventoryCategory", item.category);
  setValue("inventoryQuantity", String(item.quantity));
  setValue("inventoryUnit", item.unit);
  setValue("inventoryPrice", String(item.price));
  setValue("inventoryRestockDate", item.restockDate);
  setValue("inventorySupplier", item.supplier);
  setValue("inventoryThreshold", String(item.threshold));
  setInventorySubmitLabel("Update Item");
  focusSection("inventory");
  document.getElementById("inventoryName")?.focus();
}

function focusSection(sectionName) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.section === sectionName);
  });
  document.querySelectorAll(".panel-section").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.panel === sectionName);
  });
}

function updateLoginStats() {
  const ordersStat = document.querySelector('[data-login-stat="orders"]');
  const clientsStat = document.querySelector('[data-login-stat="clients"]');
  const deliveryStat = document.querySelector('[data-login-stat="delivery"]');

  if (ordersStat) {
    ordersStat.textContent = String(state.orders.length);
  }
  if (clientsStat) {
    clientsStat.textContent = String(buildCustomers().length);
  }
  if (deliveryStat) {
    const delivered = state.orders.filter((order) => order.status === "Delivered").length;
    const rate = state.orders.length ? Math.round((delivered / state.orders.length) * 100) : 0;
    deliveryStat.textContent = `${rate}%`;
  }
}

function persist(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function setTodayChip() {
  const chip = document.getElementById("todayChip");
  if (!chip) {
    return;
  }

  chip.textContent = new Date().toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function valueOf(id) {
  return document.getElementById(id)?.value.trim() || "";
}

function setValue(id, value) {
  const field = document.getElementById(id);
  if (field) {
    field.value = value;
  }
}

function setOrderSubmitLabel(label) {
  const button = document.getElementById("orderSubmitBtn");
  if (button) {
    button.textContent = label;
  }
}

function setInventorySubmitLabel(label) {
  const button = document.getElementById("inventorySubmitBtn");
  if (button) {
    button.textContent = label;
  }
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));
}

function formatDate(value) {
  if (!value) {
    return "Not set";
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function createId(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

function capitalize(value) {
  const stringValue = String(value || "").trim();
  if (!stringValue) {
    return "";
  }

  return stringValue.charAt(0).toUpperCase() + stringValue.slice(1).toLowerCase();
}

function globalQuery() {
  return (document.getElementById("globalSearch")?.value || "").trim().toLowerCase();
}

function statusClass(status) {
  switch (status) {
    case "Pending":
      return "pending";
    case "In Progress":
      return "progress";
    case "Ready":
      return "ready";
    case "Delivered":
      return "delivered";
    default:
      return "";
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
