/**
 * Hospital del Bosque - Main Application Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentView = 'login-view';
  let cart = [
    { id: 1, nombre: 'Amoxicilina 500mg', precio: 185.00, cantidad: 1 },
    { id: 2, nombre: 'Paracetamol 500mg', precio: 45.00, cantidad: 2 }
  ];

  // DOM Elements
  const loginWrapper = document.getElementById('login-wrapper');
  const appContainer = document.getElementById('app-container');
  const appSidebar = document.getElementById('app-sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const btnHamburger = document.getElementById('btn-hamburger');
  const btnCloseSidebar = document.getElementById('btn-close-sidebar');
  const btnMobileLogout = document.getElementById('btn-mobile-logout');
  const loginForm = document.getElementById('login-form');
  const navItems = document.querySelectorAll('.nav-item');
  const viewSections = document.querySelectorAll('.view-section');
  const btnLogout = document.getElementById('btn-logout');
  const toastContainer = document.getElementById('toast-container');

  // Modals
  const patientModal = document.getElementById('modal-patient');
  const recordDetailModal = document.getElementById('modal-record-detail');
  const btnOpenPatientModal = document.getElementById('btn-open-patient-modal');
  const formNewPatient = document.getElementById('form-new-patient');
  const modalCloseButtons = document.querySelectorAll('.modal-close, .btn-close-modal');

  // Expedientes Form
  const btnAddMedication = document.getElementById('btn-add-medication');
  const medicationsContainer = document.getElementById('medications-container');
  const formNewRecord = document.getElementById('form-new-record');
  const selectPatientRecord = document.getElementById('record-patient-select');

  // ==========================================
  // MOBILE DRAWER CONTROLS
  // ==========================================
  function openMobileSidebar() {
    if (appSidebar) appSidebar.classList.add('open');
    if (sidebarOverlay) sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileSidebar() {
    if (appSidebar) appSidebar.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (btnHamburger) {
    btnHamburger.addEventListener('click', openMobileSidebar);
  }

  if (btnCloseSidebar) {
    btnCloseSidebar.addEventListener('click', closeMobileSidebar);
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeMobileSidebar);
  }

  // ==========================================
  // VIEW NAVIGATION & ROUTING
  // ==========================================
  function navigateTo(viewId) {
    closeMobileSidebar();

    if (viewId === 'login-view') {
      loginWrapper.style.display = 'flex';
      appContainer.style.display = 'none';
      currentView = 'login-view';
      window.scrollTo(0, 0);
      return;
    }

    loginWrapper.style.display = 'none';
    appContainer.style.display = 'flex';

    // Hide all view sections
    viewSections.forEach(section => {
      section.style.display = 'none';
    });

    // Show target section
    const targetSection = document.getElementById(viewId);
    if (targetSection) {
      targetSection.style.display = 'block';
      currentView = viewId;
    }

    // Scroll to top of main content on navigation
    const mainContent = document.querySelector('.main-content');
    if (mainContent) mainContent.scrollTop = 0;
    window.scrollTo(0, 0);

    // Update active nav item
    navItems.forEach(item => {
      if (item.getAttribute('data-view') === viewId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Trigger re-renders if necessary
    if (viewId === 'pacientes-view') renderPacientesTable();
    if (viewId === 'expedientes-view') {
      populatePatientDropdown();
      renderExpedientesRecientes();
    }
    if (viewId === 'medicos-view') renderMedicosList();
    if (viewId === 'farmacia-view') renderFarmaciaPOS();
    if (viewId === 'laboratorio-view') renderLaboratorioTable();
    if (viewId === 'rrhh-view') renderRRHHTable();
    if (viewId === 'roles-view') renderRolesTable();
  }

  // Sidebar Nav Item Clicks
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = item.getAttribute('data-view');
      if (targetView) {
        navigateTo(targetView);
      }
    });
  });

  // Login Submission
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      navigateTo('dashboard-view');
      showToast('¡Acceso concedido! Bienvenido al sistema.', 'success');
    });
  }

  // Logout Buttons (Desktop + Mobile)
  function handleLogout() {
    navigateTo('login-view');
    showToast('Sesión finalizada correctamente.', 'info');
  }

  if (btnLogout) {
    btnLogout.addEventListener('click', handleLogout);
  }

  if (btnMobileLogout) {
    btnMobileLogout.addEventListener('click', handleLogout);
  }

  // Brand Logo Click in Sidebar -> Go to Dashboard
  const sidebarBrand = document.querySelector('.sidebar-brand');
  if (sidebarBrand) {
    sidebarBrand.addEventListener('click', () => {
      navigateTo('dashboard-view');
    });
  }

  // ==========================================
  // TOAST NOTIFICATION
  // ==========================================
  function showToast(message, type = 'success', duration = 4500) {
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'info' ? 'toast-info' : ''}`;
    
    // Icon SVG
    const iconSvg = type === 'success' 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;

    toast.innerHTML = `
      <span class="toast-icon">${iconSvg}</span>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, duration);
  }

  // ==========================================
  // PACIENTES TABLE RENDERING
  // ==========================================
  function renderPacientesTable() {
    const tableBody = document.getElementById('pacientes-table-body');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    HOSPITAL_DATA.pacientes.forEach((paciente) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight: 500; font-family: monospace; color: #475569;">${paciente.id}</td>
        <td style="font-weight: 600; color: #1e293b;">${paciente.nombre}</td>
        <td>${paciente.edad}</td>
        <td>${paciente.genero}</td>
        <td>${paciente.telefono}</td>
        <td>
          <button class="btn-icon-action btn-view-patient" data-id="${paciente.id}" title="Ver Expediente de ${paciente.nombre}">
            <svg viewBox="0 0 24 24" fill="#004b7a" width="20" height="20">
              <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>
            </svg>
          </button>
        </td>
      `;
      tableBody.appendChild(tr);
    });

    // Attach click handlers to folder actions
    document.querySelectorAll('.btn-view-patient').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openPatientDetail(id);
      });
    });
  }

  function openPatientDetail(patientId) {
    const paciente = HOSPITAL_DATA.pacientes.find(p => p.id === patientId);
    if (!paciente) return;

    const modalTitle = document.getElementById('patient-detail-title');
    const modalContent = document.getElementById('patient-detail-content');

    modalTitle.textContent = `Expediente: ${paciente.nombre}`;
    modalContent.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 20px; font-size: 13.5px;">
        <div><strong style="color:#64748b;">N° Identidad:</strong> <p style="font-weight:600; margin-top:2px;">${paciente.id}</p></div>
        <div><strong style="color:#64748b;">Edad:</strong> <p style="font-weight:600; margin-top:2px;">${paciente.edad}</p></div>
        <div><strong style="color:#64748b;">Género:</strong> <p style="font-weight:600; margin-top:2px;">${paciente.genero}</p></div>
        <div><strong style="color:#64748b;">Teléfono:</strong> <p style="font-weight:600; margin-top:2px;">${paciente.telefono}</p></div>
        <div><strong style="color:#64748b;">Tipo de Sangre:</strong> <p style="font-weight:600; color:#0284c7; margin-top:2px;">${paciente.tipo_sangre || 'O+'}</p></div>
        <div><strong style="color:#64748b;">Dirección:</strong> <p style="font-weight:600; margin-top:2px;">${paciente.direccion || 'Tegucigalpa, Honduras'}</p></div>
      </div>
      <h4 style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 10px; border-top: 1px solid #eef2f6; padding-top: 14px;">Consultas Registradas</h4>
      <div style="background: #f8fafc; border-radius: 8px; padding: 14px; border: 1px solid #e2e8f0; font-size: 13px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <span style="font-weight:700; color:#004b7a;">Consulta General / Control</span>
          <span style="color:#64748b; font-size:12px;">Última visita: 10/08/2026</span>
        </div>
        <p style="color:#475569; margin: 4px 0;">Signos vitales estables. Paciente en evolución clínica favorable según indicaciones médicas.</p>
      </div>
    `;

    openModal(recordDetailModal);
  }

  // ==========================================
  // EXPEDIENTES CLÍNICOS DYNAMICS
  // ==========================================
  function populatePatientDropdown() {
    if (!selectPatientRecord) return;
    selectPatientRecord.innerHTML = '<option value="">Seleccione un paciente...</option>';
    HOSPITAL_DATA.pacientes.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.nombre;
      opt.textContent = `${p.nombre} (${p.id})`;
      selectPatientRecord.appendChild(opt);
    });
  }

  function renderExpedientesRecientes() {
    const container = document.getElementById('expedientes-recientes-list');
    if (!container) return;

    container.innerHTML = '';
    HOSPITAL_DATA.expedientesRecientes.forEach(exp => {
      const item = document.createElement('div');
      item.className = 'expediente-item';
      item.innerHTML = `
        <div class="expediente-header">
          <span class="expediente-patient">${exp.paciente}</span>
          <span class="expediente-date">${exp.fecha}</span>
        </div>
        <span class="expediente-specialty">${exp.especialidad}</span>
        <p class="expediente-desc">${exp.motivo}</p>
      `;
      container.appendChild(item);
    });
  }

  // Add Dynamic Medication Row
  if (btnAddMedication) {
    btnAddMedication.addEventListener('click', (e) => {
      e.preventDefault();
      const newRow = document.createElement('div');
      newRow.className = 'medication-row';
      newRow.innerHTML = `
        <div class="medication-top-cols">
          <div class="form-group">
            <label class="form-label">Medicamento</label>
            <input type="text" class="form-control" placeholder="Ej. Ibuprofeno 400mg">
          </div>
          <div class="form-group">
            <label class="form-label">Cantidad</label>
            <input type="text" class="form-control" placeholder="Ej. 1">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Dosis y Frecuencia (Indicaciones)</label>
          <input type="text" class="form-control" placeholder="Ej. Tomar 1 tableta cada 8 horas">
        </div>
        <div style="display:flex; justify-content:flex-end;">
          <button type="button" class="btn-remove-med" style="background:none; border:none; color:#dc2626; font-size:12px; cursor:pointer; font-weight:600;">× Eliminar este medicamento</button>
        </div>
      `;
      medicationsContainer.appendChild(newRow);

      newRow.querySelector('.btn-remove-med').addEventListener('click', () => {
        newRow.remove();
      });
    });
  }

  // Submit New Expediente
  if (formNewRecord) {
    formNewRecord.addEventListener('submit', (e) => {
      e.preventDefault();
      const paciente = selectPatientRecord.value || 'Paciente Registrado';
      const especialidad = document.getElementById('record-specialty-select').value || 'Medicina General';
      const diagnostico = document.getElementById('record-diagnostico').value || 'Consulta y evaluación completada.';

      // Prepend to recent records
      const today = new Date();
      const dateStr = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

      HOSPITAL_DATA.expedientesRecientes.unshift({
        paciente: paciente,
        fecha: dateStr,
        especialidad: especialidad,
        motivo: diagnostico
      });

      renderExpedientesRecientes();
      formNewRecord.reset();
      showToast('Expediente clínico y receta médica guardados.', 'success');
    });
  }

  // ==========================================
  // MODALS HANDLING
  // ==========================================
  function openModal(modal) {
    if (modal) modal.classList.add('active');
  }

  function closeModal(modal) {
    if (modal) modal.classList.remove('active');
  }

  if (btnOpenPatientModal) {
    btnOpenPatientModal.addEventListener('click', () => {
      openModal(patientModal);
    });
  }

  modalCloseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      closeModal(modal);
    });
  });

  // Close on backdrop click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  // New Patient Form Submit
  if (formNewPatient) {
    formNewPatient.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = document.getElementById('new-patient-id').value;
      const nombre = document.getElementById('new-patient-nombre').value;
      const edad = document.getElementById('new-patient-edad').value + ' años';
      const genero = document.getElementById('new-patient-genero').value;
      const telefono = document.getElementById('new-patient-telefono').value;

      HOSPITAL_DATA.pacientes.unshift({
        id,
        nombre,
        edad,
        genero,
        telefono
      });

      renderPacientesTable();
      closeModal(patientModal);
      formNewPatient.reset();
      showToast(`Paciente ${nombre} registrado exitosamente.`, 'success');
    });
  }

  // ==========================================
  // MÉDICOS VIEW
  // ==========================================
  function renderMedicosList() {
    const grid = document.getElementById('medicos-grid');
    if (!grid) return;

    grid.innerHTML = '';
    HOSPITAL_DATA.medicos.forEach(medico => {
      let badgeClass = 'badge-success';
      if (medico.estado === 'En Consulta') badgeClass = 'badge-warning';
      if (medico.estado === 'En Procedimiento') badgeClass = 'badge-info';

      const card = document.createElement('div');
      card.className = 'doctor-card';
      card.innerHTML = `
        <div class="doctor-header">
          <div class="doctor-avatar">${medico.avatar}</div>
          <div class="doctor-info">
            <h4>${medico.nombre}</h4>
            <p>${medico.especialidad}</p>
          </div>
        </div>
        <div style="font-size: 13px; color: #475569;">
          <p><strong>Colegiación:</strong> ${medico.colegiado}</p>
          <p style="margin-top: 4px;"><strong>Horario:</strong> ${medico.horario}</p>
        </div>
        <div class="doctor-meta">
          <span>Estado actual:</span>
          <span class="badge ${badgeClass}">${medico.estado}</span>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // ==========================================
  // FARMACIA POS VIEW
  // ==========================================
  function renderFarmaciaPOS() {
    const productsGrid = document.getElementById('pos-products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';
    HOSPITAL_DATA.farmaciaProductos.forEach(prod => {
      const item = document.createElement('div');
      item.className = 'pos-product-card';
      item.innerHTML = `
        <div class="pos-product-image-wrapper">
          <img src="${prod.imagen}" alt="${prod.nombre}" class="pos-product-image" loading="lazy" onerror="this.src='https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=400'">
          <span class="pos-stock-tag">Stock: ${prod.stock}</span>
        </div>
        <div class="pos-product-body">
          <div>
            <div class="pos-product-title">${prod.nombre}</div>
            <div class="pos-product-category">${prod.categoria}</div>
          </div>
          <div class="pos-product-footer">
            <span class="pos-product-price">L. ${prod.precio.toFixed(2)}</span>
            <button type="button" class="btn-action-primary btn-add-to-cart" data-id="${prod.id}" style="padding: 6px 12px; font-size:12px;">+ Agregar</button>
          </div>
        </div>
      `;
      productsGrid.appendChild(item);
    });

    // Add to cart buttons
    document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        const product = HOSPITAL_DATA.farmaciaProductos.find(p => p.id === id);
        if (product) {
          const existing = cart.find(c => c.id === id);
          if (existing) {
            existing.cantidad += 1;
          } else {
            cart.push({ id: product.id, nombre: product.nombre, precio: product.precio, cantidad: 1 });
          }
          updatePOSCart();
          showToast(`+1 ${product.nombre} añadido al ticket.`, 'info', 2000);
        }
      });
    });

    updatePOSCart();
  }

  function updatePOSCart() {
    const cartContainer = document.getElementById('pos-cart-items');
    const subtotalEl = document.getElementById('pos-subtotal');
    const isvEl = document.getElementById('pos-isv');
    const totalEl = document.getElementById('pos-total');
    if (!cartContainer) return;

    cartContainer.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
      cartContainer.innerHTML = '<p style="color:#94a3b8; font-size:13px; text-align:center; padding: 20px 0;">No hay medicamentos en el ticket</p>';
    } else {
      cart.forEach((item, index) => {
        const itemTotal = item.precio * item.cantidad;
        subtotal += itemTotal;

        const row = document.createElement('div');
        row.className = 'pos-cart-item';
        row.innerHTML = `
          <div>
            <div style="font-weight:600; color:#1e293b;">${item.nombre}</div>
            <div style="color:#64748b; font-size:12px;">${item.cantidad} x L. ${item.precio.toFixed(2)}</div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-weight:700; color:#004b7a;">L. ${itemTotal.toFixed(2)}</span>
            <button class="btn-remove-cart-item" data-index="${index}" style="background:none; border:none; color:#ef4444; cursor:pointer; font-weight:bold; font-size:16px;">×</button>
          </div>
        `;
        cartContainer.appendChild(row);
      });
    }

    const isv = subtotal * 0.15;
    const total = subtotal + isv;

    if (subtotalEl) subtotalEl.textContent = `L. ${subtotal.toFixed(2)}`;
    if (isvEl) isvEl.textContent = `L. ${isv.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `L. ${total.toFixed(2)}`;

    document.querySelectorAll('.btn-remove-cart-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        cart.splice(idx, 1);
        updatePOSCart();
      });
    });
  }

  // POS Checkout Button
  const btnProcessSale = document.getElementById('btn-process-sale');
  if (btnProcessSale) {
    btnProcessSale.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('El ticket de venta está vacío.', 'info');
        return;
      }
      cart = [];
      updatePOSCart();
      showToast('Venta procesada exitosamente en Farmacia.', 'success');
    });
  }

  // ==========================================
  // LABORATORIO VIEW
  // ==========================================
  function renderLaboratorioTable() {
    const tbody = document.getElementById('laboratorio-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    HOSPITAL_DATA.laboratorioOrdenes.forEach(orden => {
      let badge = 'badge-success';
      if (orden.estado === 'En Proceso') badge = 'badge-warning';
      if (orden.estado === 'Pendiente') badge = 'badge-info';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-family: monospace; font-weight:600; color:#0284c7;">${orden.codigo}</td>
        <td style="font-weight:600;">${orden.examen}</td>
        <td>${orden.paciente}</td>
        <td>${orden.medico}</td>
        <td>${orden.fecha}</td>
        <td><span class="badge ${badge}">${orden.estado}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  // ==========================================
  // RRHH Y PLANILLAS VIEW
  // ==========================================
  function renderRRHHTable() {
    const tbody = document.getElementById('rrhh-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    HOSPITAL_DATA.rrhhPersonal.forEach(p => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-family: monospace; font-weight: 500;">${p.empId}</td>
        <td style="font-weight:600;">${p.nombre}</td>
        <td>${p.cargo}</td>
        <td><span class="badge badge-navy">${p.dpto}</span></td>
        <td style="font-weight:700; color:#004b7a;">${p.salario}</td>
        <td><span class="badge badge-success">${p.estado}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  // ==========================================
  // ROLES Y ACCESOS VIEW
  // ==========================================
  function renderRolesTable() {
    const tbody = document.getElementById('roles-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    HOSPITAL_DATA.rolesAccesos.forEach(r => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="font-weight:700; color:#1e293b;">${r.rol}</td>
        <td><span class="badge badge-navy">${r.usuarios} Usuarios</span></td>
        <td style="color:#64748b;">${r.descripcion}</td>
        <td>
          <button class="btn-action-primary" style="padding: 5px 12px; font-size:12px;">Configurar Permisos</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Initial render calls
  renderPacientesTable();
  renderExpedientesRecientes();
});
