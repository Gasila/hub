function loadPlaylist(playlistId) {
  const iframe = document.getElementById('playlistFrame');
  const placeholder = document.querySelector('.video-placeholder');

  iframe.src = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
  iframe.style.display = 'block'; // garante que o vídeo apareça
  if (placeholder) {
    placeholder.style.display = 'none'; // esconde a mensagem
  }
}