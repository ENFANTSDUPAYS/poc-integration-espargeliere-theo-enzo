// ---- FAQ Logic ----
function toggleFaq(btn) {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector('i');
  const isOpen = content.classList.contains('open');

  // Ferme tous les autres onglets FAQ
  document.querySelectorAll('.faq-content.open').forEach(c => {
    c.classList.remove('open');
    c.style.maxHeight = '0px';
  });
  
  // Remet toutes les flèches à leur position initiale
  document.querySelectorAll('#faq button[onclick="toggleFaq(this)"] i').forEach(s => {
    s.style.transform = '';
  });

  // Ouvre l'onglet cliqué s'il était fermé
  if (!isOpen) {
    content.classList.add('open');
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.style.transform = 'rotate(180deg)';
  }
}

// ---- Exécution au chargement de la page ----
document.addEventListener("DOMContentLoaded", function() {
  
  // -- Mobile Menu Logic --
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if(mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // -- Popup Logic --
  const popup = document.getElementById('talknotes-popup');
  const closeBtn = document.getElementById('close-popup');
  const backdrop = document.getElementById('popup-backdrop');
  const openPopupButtons = document.querySelectorAll('.open-popup-btn');

  // Fonction pour ouvrir
  const openPopup = (e) => {
    e.preventDefault(); 
    popup.classList.remove('hidden');
    popup.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Bloque le scroll en arrière-plan
  };

  // Fonction pour fermer
  const closePopup = () => {
    popup.classList.add('hidden');
    popup.classList.remove('flex');
    document.body.style.overflow = ''; // Restaure le scroll
  };

  // Ajoute l'événement sur tous les boutons "Get Talknotes +"
  openPopupButtons.forEach(btn => {
    btn.addEventListener('click', openPopup);
  });

  // Fermeture via le bouton X ou le clic sur le fond grisé
  if (closeBtn) closeBtn.addEventListener('click', closePopup);
  if (backdrop) backdrop.addEventListener('click', closePopup);
});