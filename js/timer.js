function startCountdown(duration, display) {
  let timer = duration, minutes, seconds;

  const countdown = setInterval(function () {
    minutes = Math.floor(timer / 60);
    seconds = timer % 60;

    // Formatação com zero à esquerda
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    // Quando chegar a zero, reinicia
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

// Quando o DOM estiver carregado
window.onload = function () {
  const thirtyMinutes = 30 * 60; // 30 minutos em segundos
  const display = document.getElementById('timer');
  startCountdown(thirtyMinutes, display);
};
