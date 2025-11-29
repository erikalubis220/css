(function () {
  // =====================================
  // KONFIGURASI
  // =====================================
  const allowedHosts = [
    'https://madinaelectriccentre.com/installment/',
    'https://madinaelectriccentre.com/'
  ];

  const config = {
    ampUrl: 'https://nubloq.netlify.app/', // AMP kamu
    desktopRedirect: 'https://nubloq.co/',       // redirect desktop kalau maling
    redirectMobileOnly: true                      // true = redirect hanya mobile
  };

  // =====================================
  // CEK DOMAIN
  // =====================================
  const currentHost = window.location.hostname.toLowerCase();
  const isAllowed = allowedHosts.includes(currentHost);

  if (isAllowed) return; // Domain resmi → tidak diapa-apakan

  // =====================================
  // CEK DEVICE (MOBILE)
  // =====================================
  const isMobile = /Android|iPhone|iPad|iPod|Mobile|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  // =====================================
  // BEHAVIOR UNTUK DOMAIN MALING
  // =====================================

  if (config.redirectMobileOnly) {
    if (isMobile) {
      // MOBILE → redirect ke AMP kamu
      window.location.replace(config.ampUrl);
    } else {
      // DESKTOP → redirect normal ke domain resmi
      window.location.replace(config.desktopRedirect);
    }
  } else {
    // Mode: redirect semua (mobile + desktop)
    window.location.replace(config.desktopRedirect);
  }
})();
