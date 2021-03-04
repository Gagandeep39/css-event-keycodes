const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
    <!-- Key -->
    <div class="key">
      ${event.key === ' ' ? 'Space' : event.key}
      <small> event.key </small>
    </div>

    <!-- Key Code -->
    <!-- Officially Depracated -->
    <div class="key">
      ${event.keyCode}
      <small> event.keyCode </small>
    </div>

    <!-- Event Code -->
    <div class="key">
      ${event.code}
      <small> event.code </small>
    </div>
  `;
});
