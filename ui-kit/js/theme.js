/* ОСНОВНАЯ РАБОТА: реализуйте переключение темы без библиотеки.
 * "auto" означает отсутствие атрибута data-theme у <html>.
 * В таком случае тёмную тему применяет CSS media query.
 * Настройку нужно сохранять в localStorage (ключ "atlas-theme").
 */
const root = document.documentElement;
const themeSelect = document.querySelector('#theme-select');
const demoAction = document.querySelector('#demo-action');
const demoFeedback = document.querySelector('#demo-feedback');

function applyTheme(choice) {
  if (choice === 'auto') {root.removeAttribute('data-theme')}
  else { root.dataset.theme = choice}
  themeSelect.value = choice
}

let saved = 'auto';
try {
    saved = localStorage.getItem('atlas-theme');
}
catch {}

if (!['auto', 'light', 'dark'].includes(saved)) { saved = 'auto'}
applyTheme(saved);
themeSelect.addEventListener('change', () => {
    applyTheme(themeSelect.value);
    try { localStorage.setItem('atlas-theme', themeSelect.value) } catch {}
});
// Подсказка: если localStorage недоступен, оставьте интерфейс рабочим.

/* Обратная связь от кнопки — уже готова. */
demoAction.addEventListener('click', () => {
  demoFeedback.textContent = 'Демонстрация: действие выполнено, новая заявка создана.';
});

/* САМОСТОЯТЕЛЬНАЯ РАБОТА: переключатель плотности и сохранение выбора. */
const densitySelect = document.querySelector('#density-select');

function applyDensity(choice) {
  if (choice === 'normal') { root.removeAttribute('data-density'); }
  else { root.dataset.density = choice; }
  densitySelect.value = choice;
}

let savedDensity = 'normal';
try {
  savedDensity = localStorage.getItem('atlas-density');
} catch {}

if (!['normal', 'compact'].includes(savedDensity)) { savedDensity = 'normal'; }
applyDensity(savedDensity);

densitySelect.addEventListener('change', () => {
  applyDensity(densitySelect.value);
  try { localStorage.setItem('atlas-density', densitySelect.value); } catch {}
});

