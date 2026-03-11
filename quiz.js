/**
 * Cuestionario por temas: 12 temas × 10 preguntas.
 * En cada carga se muestran 3 preguntas por tema (36 en total), en orden aleatorio.
 * BANCO_POR_TEMAS se define en datos-temas.js (cargar antes que este script).
 */

const PREGUNTAS_POR_TEMA = 3;

/** Baraja un array (Fisher-Yates). */
function barajar(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Obtiene las preguntas para este quiz: 3 de cada tema, orden final barajado.
 * @returns {Array} Lista de preguntas con { id, texto, opciones, correcta }
 */
function obtenerPreguntasParaQuiz() {
  if (typeof BANCO_POR_TEMAS === 'undefined') {
    console.error('BANCO_POR_TEMAS no está definido. Carga datos-temas.js antes que quiz.js.');
    return [];
  }

  const todas = [];
  for (const tema of BANCO_POR_TEMAS) {
    const preguntasTema = tema.preguntas || [];
    if (preguntasTema.length < PREGUNTAS_POR_TEMA) {
      console.warn(`Tema "${tema.nombre}" tiene menos de ${PREGUNTAS_POR_TEMA} preguntas.`);
    }
    const barajadas = barajar(preguntasTema);
    const elegidas = barajadas.slice(0, PREGUNTAS_POR_TEMA);
    todas.push(...elegidas);
  }
  return barajar(todas);
}

/** Genera el HTML de una pregunta (opciones ya barajadas para esa pregunta). */
function crearPreguntaHTML(pregunta, indiceGlobal) {
  const nombreCampo = `pregunta_${pregunta.id}`;
  const opcionesBarajadas = barajar(
    pregunta.opciones.map((texto, idx) => ({ texto, idxOriginal: idx }))
  );

  let html = `<div class="question-block" data-id="${pregunta.id}" data-correcta="${pregunta.correcta}">`;
  html += `<span class="question-label">${indiceGlobal + 1}. ${pregunta.texto}</span>`;
  html += '<ul class="options">';

  opcionesBarajadas.forEach((opt, pos) => {
    const value = opt.idxOriginal;
    const idOpt = `${nombreCampo}_${pos}`;
    html += `<li class="option" data-value="${value}">`;
    html += `<input type="radio" name="${nombreCampo}" id="${idOpt}" value="${value}" required>`;
    html += `<label for="${idOpt}">${opt.texto}</label>`;
    html += '</li>';
  });

  html += '</ul></div>';
  return html;
}

/** Renderiza el cuestionario: 3 de cada tema, orden aleatorio. */
function renderizarCuestionario() {
  const contenedor = document.getElementById('questions-container');
  if (!contenedor) return;

  const preguntasOrden = obtenerPreguntasParaQuiz();
  contenedor.innerHTML = preguntasOrden
    .map((p, i) => crearPreguntaHTML(p, i))
    .join('');

  contenedor.dataset.preguntasOrden = JSON.stringify(
    preguntasOrden.map(p => ({ id: p.id, correcta: p.correcta }))
  );

  contenedor.querySelectorAll('.option').forEach(li => {
    li.addEventListener('click', function (e) {
      if (e.target.tagName === 'INPUT') return;
      const radio = this.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });
}

/** Muestra el mensaje de resultado (éxito o error). */
function mostrarResultado(correctas, total, esExito) {
  const el = document.getElementById('result');
  if (!el) return;
  el.className = 'result card show ' + (esExito ? 'success' : 'error');
  el.innerHTML = `
    ${esExito ? '¡Respuestas correctas!' : 'Hay errores'}
    <div class="result-detail">${correctas} de ${total} respuestas correctas.</div>
  `;
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/** Marca visualmente opciones correctas/incorrectas en un bloque. */
function marcarBloque(block, valorCorrecto) {
  const radios = block.querySelectorAll('input[type="radio"]');
  radios.forEach(r => r.disabled = true);

  block.querySelectorAll('.option').forEach(li => {
    li.classList.add('disabled');
    const val = parseInt(li.dataset.value, 10);
    const valorCorrectoNum = parseInt(valorCorrecto, 10);
    const checked = li.querySelector('input').checked;
    if (val === valorCorrectoNum) {
      li.classList.add('correct');
    } else if (checked && val !== valorCorrectoNum) {
      li.classList.add('wrong');
    }
  });
}

/** Valida el formulario y muestra resultado. */
function validarYMostrar(e) {
  e.preventDefault();

  const form = document.getElementById('quiz-form');
  const contenedor = document.getElementById('questions-container');
  const submitBtn = document.getElementById('submit-btn');

  let orden;
  try {
    orden = JSON.parse(contenedor.dataset.preguntasOrden || '[]');
  } catch (_) {
    orden = [];
  }

  let correctas = 0;
  const bloques = contenedor.querySelectorAll('.question-block');

  bloques.forEach((block, i) => {
    const info = orden[i];
    if (!info) return;
    const nombreCampo = `pregunta_${info.id}`;
    const selected = form.querySelector(`input[name="${nombreCampo}"]:checked`);
    const valorSeleccionado = selected ? parseInt(selected.value, 10) : null;
    const esCorrecta = valorSeleccionado === info.correcta;
    if (esCorrecta) correctas++;
    marcarBloque(block, info.correcta);
  });

  const total = orden.length;
  submitBtn.disabled = true;
  mostrarResultado(correctas, total, correctas === total);
}

/** Inicialización al cargar la página. */
function init() {
  renderizarCuestionario();

  const form = document.getElementById('quiz-form');
  if (form) {
    form.addEventListener('submit', validarYMostrar);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
