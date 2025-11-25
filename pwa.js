const installButton = document.getElementById('install-app');
let deferredPrompt;

function getServiceWorkerPath() {
  const currentUrl = new URL(window.location.href);
  const swUrl = new URL('sw.js', currentUrl);
  return swUrl.toString();
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  const swPath = getServiceWorkerPath();

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(swPath)
      .then((registration) => {
        console.log('SW registered:', registration);

        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                newWorker.postMessage({ type: 'SKIP_WAITING' });
              }
            });
          }
        });
      })
      .catch((err) => console.log('SW registration failed:', err));
  });

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload();
  });
}

function setupInstallPrompt() {
  if (!installButton) return;

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installButton.classList.remove('hidden');
  });

  installButton.addEventListener('click', async () => {
    if (!deferredPrompt) return;

    installButton.disabled = true;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    deferredPrompt = null;
    installButton.disabled = false;

    if (outcome !== 'accepted') {
      installButton.classList.add('hidden');
    }
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    installButton.classList.add('hidden');
  });
}

registerServiceWorker();
setupInstallPrompt();
