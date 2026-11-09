'use strict';

const toggle = document.getElementById('mobileToggle');
const nav = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  toggle.setAttribute('aria-label', expanded ? 'Abrir menú' : 'Cerrar menú');
  nav.classList.toggle('open', !expanded);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
  });
});

const REFERENCE_DATE = '2026-11-08';
const inventory = {
  paracetamol: [
    { id: 'PT-024', expiration: '2026-12-15', stock: 85 },
    { id: 'PT-030', expiration: '2027-03-20', stock: 120 },
    { id: 'PT-019', expiration: '2026-10-15', stock: 18 },
  ],
  ibuprofeno: [
    { id: 'IB-038', expiration: '2027-02-20', stock: 110 },
    { id: 'IB-041', expiration: '2027-01-07', stock: 35 },
    { id: 'IB-047', expiration: '2027-05-04', stock: 0 },
  ],
  amoxicilina: [
    { id: 'AM-045', expiration: '2027-05-05', stock: 74 },
    { id: 'AM-049', expiration: '2027-03-01', stock: 42 },
    { id: 'AM-051', expiration: '2026-11-02', stock: 12 },
  ]
};

const dateString = (value) => {
  const [year, month, day] = value.split('-').map(Number);
  return new Intl.DateTimeFormat('es-PE', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(year, month - 1, day));
};

function renderFEFO() {
  const product = document.getElementById('producto').value;
  const rows = [...inventory[product]].sort((a, b) => a.expiration.localeCompare(b.expiration));
  const eligible = rows.filter((lot) => lot.expiration >= REFERENCE_DATE && lot.stock > 0);
  const prioritized = eligible[0];
  const container = document.getElementById('lotes');
  container.replaceChildren();

  rows.forEach((lot) => {
    const expired = lot.expiration < REFERENCE_DATE;
    const unavailable = lot.stock === 0;
    const isFirst = prioritized?.id === lot.id;
    const status = expired ? 'Vencido' : unavailable ? 'Sin stock' : isFirst ? 'Prioritario' : 'Disponible';
    const row = document.createElement('div');
    row.className = `lote-row${expired ? ' expired' : ''}${unavailable ? ' unavailable' : ''}${isFirst ? ' first' : ''}`;
    const symbol = document.createElement('span');
    symbol.className = 'lote-icon';
    symbol.textContent = isFirst ? '✳' : '▥';
    const name = document.createElement('div');
    name.className = 'lote-name';
    const strong = document.createElement('strong');
    strong.textContent = `Lote ${lot.id}`;
    const small = document.createElement('small');
    small.textContent = `${lot.stock} unidades`; 
    name.append(strong, small);
    const time = document.createElement('time');
    time.className = 'lote-date';
    time.dateTime = lot.expiration;
    time.textContent = dateString(lot.expiration);
    const badge = document.createElement('span');
    badge.className = 'lote-status';
    badge.textContent = status;
    row.append(symbol, name, time, badge);
    container.append(row);
  });

  const recommendation = document.getElementById('recomendacion');
  if (prioritized) {
    recommendation.replaceChildren();
    const title = document.createElement('b');
    title.textContent = `✓ Recomendar primero el lote ${prioritized.id}`;
    const detail = document.createElement('span');
    detail.textContent = ` — vence el ${dateString(prioritized.expiration)} y dispone de ${prioritized.stock} unidades.`;
    recommendation.append(title, detail);
  } else {
    recommendation.textContent = 'No hay lotes vigentes y disponibles para recomendar.';
  }
}

document.getElementById('evaluar').addEventListener('click', renderFEFO);
document.getElementById('producto').addEventListener('change', renderFEFO);
renderFEFO();

const form = document.getElementById('contactForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('nombre');
  const email = document.getElementById('email');
  const feedback = document.getElementById('formFeedback');
  if (!name.value.trim()) {
    feedback.textContent = 'Escribe tu nombre para continuar.';
    name.focus();
    return;
  }
  if (!email.validity.valid || !email.value.trim()) {
    feedback.textContent = 'Ingresa un correo electrónico válido.';
    email.focus();
    return;
  }
  feedback.textContent = `Gracias, ${name.value.trim()}. Este es un formulario de demostración: no se ha enviado ningún mensaje.`;
  form.reset();
});
