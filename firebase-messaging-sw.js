// Firebase की लाइब्रेरी इम्पोर्ट करें
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Firebase को शुरू करें - आपकी असली डिटेल्स के साथ
firebase.initializeApp({
  apiKey: "AIzaSyCFpmW9ZvsFai6vc3-GosZxY0TU7ORmEqU",
  projectId: "rajavideo-f0804",
  messagingSenderId: "1000952755183",
  appId: "1:1000952755183:web:96aba391983d11315bfc1a"
});

const messaging = firebase.messaging();

// बैकग्राउंड नोटिफिकेशन के लिए (जब यूजर ब्राउज़र बंद कर देता है)
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || 'https://www.gstatic.com/images/branding/product/2x/gshield_96dp.png',
    click_action: payload.data.url || 'https://rajahribabakumar-hub.github.io/Nob/' 
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// नोटिफिकेशन पर क्लिक करने पर लिंक खोलना
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const urlToOpen = event.notification.click_action || 'https://rajahribabakumar-hub.github.io/Nob/';
  event.waitUntil(
    clients.openWindow(urlToOpen)
  );
});
