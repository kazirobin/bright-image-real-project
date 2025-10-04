function reveal(e, container) {
  const after = container.querySelector('.after');
  const mask = container.querySelector('.mask');
  const rect = container.getBoundingClientRect();

  // Support both mouse and touch
  let clientX;
  if (e.type.startsWith('touch')) {
    if (e.touches.length > 0) {
      clientX = e.touches[0].clientX;
    } else {
      return;
    }
  } else {
    clientX = e.clientX;
  }

  let x = clientX - rect.left;
  x = Math.max(0, Math.min(x, rect.width));
  const percent = (x / rect.width) * 100;

  after.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  mask.style.left = `${percent}%`;
}
