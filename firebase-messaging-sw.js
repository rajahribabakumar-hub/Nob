// Firebase की लाइब्रेरी इम्पोर्ट करें
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Firebase को शुरू करें (आपकी डिटेल्स के साथ)
firebase.initializeApp({
  messagingSenderId: "1000952755183" // आपका सेंडर आईडी
});

const messaging = firebase.messaging();

// बैकग्राउंड नोटिफिकेशन के लिए
messaging.setBackgroundMessageHandler(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || 'https://www.gstatic.com/images/branding/product/2x/gshield_96dp.png',
    data: payload.data // इसमें आपका विज्ञापन लिंक होगा
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// नोटिफिकेशन पर क्लिक करने पर क्या हो
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  
  // अगर आपने मैसेज के साथ कोई खास लिंक भेजा है, तो वो खुलेगा
  const targetUrl = event.notification.data && event.notification.data.url 
                    ? event.notification.data.url 
                    : 'https://rajahribabakumar-hub.github.io/Nob/'; // डिफ़ॉल्ट लिंक

  event.waitUntil(
    clients.openWindow(targetUrl)
  );
});
