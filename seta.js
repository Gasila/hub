const container = document.querySelector('.container');

  const arrow = document.createElement('div');
  arrow.classList.add('arrow-dinamica');
  container.appendChild(arrow);

  const offsetInicio = -5;
  const encurtarFinal = 100;

  const getCenterOfFoto = () => {
    const center = document.querySelector('.foto-centro');
    const rect = center.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 - containerRect.left,
      y: rect.top + rect.height / 2 - containerRect.top,
    };
  };

  const getCenterOfIcon = (el) => {
    const rect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2 - containerRect.left,
      y: rect.top + rect.height / 2 - containerRect.top,
    };
  };

  const angleMap = {
    youtube: 143,
    instagram: -145,
    lista: 95,
    twitch: 35,
    links: -97,
    steam: -35,
  };

  document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      const centerFoto = getCenterOfFoto();
      const centerIcon = getCenterOfIcon(icon);

      const deltaX = centerIcon.x - centerFoto.x;
      const deltaY = centerIcon.y - centerFoto.y;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      const iconClass = [...icon.classList].find(cls => angleMap[cls] !== undefined);
      const angle = angleMap[iconClass] || 0;

      arrow.style.top = `${centerFoto.y + offsetInicio}px`;
      arrow.style.left = `${centerFoto.x}px`;
      arrow.style.height = `${distance - encurtarFinal}px`;
      arrow.style.transform = `rotate(${angle}deg)`;
      arrow.style.opacity = 1;
    });

    icon.addEventListener('mouseleave', () => {
      arrow.style.height = '0px';
      arrow.style.opacity = 0;
    });
});