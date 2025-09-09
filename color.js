function getRandomColor() {
  const chars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateColors() {
  const palette = document.getElementById('palette');
  const numColors = Math.min(Math.max(document.getElementById('numColors').value, 1), 10);
  palette.innerHTML = '';

  for (let i = 0; i < numColors; i++) {
    const color = getRandomColor();
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = color;

    colorBox.innerHTML = `<span>${color}</span><div class="tooltip">Copied!</div>`;

    // Click to copy
    colorBox.addEventListener('click', () => {
      navigator.clipboard.writeText(color);
      colorBox.classList.add('copied');
      setTimeout(() => colorBox.classList.remove('copied'), 1000);
    });

    palette.appendChild(colorBox);
  }
}

// Generate palette on page load
window.onload = generateColors;
