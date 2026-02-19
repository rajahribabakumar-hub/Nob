importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCFpmW9ZvsFai6vc3-GosZxY0TU7ORmEqU",
  authDomain: "rajavideo-f0804.firebaseapp.com",
  projectId: "rajavideo-f0804",
  storageBucket: "rajavideo-f0804.firebasestorage.app",
  messagingSenderId: "1000952755183",
  appId: "1:1000952755183:web:96aba391983d11315bfc1a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {

  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: payload.notification.icon || "/icon.png"
    }
  );

});
