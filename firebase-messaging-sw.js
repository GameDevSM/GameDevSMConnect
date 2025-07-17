// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAAYRSx8u01nap8sbcuILJHqaG_oJ7mhyU",
  authDomain: "gamedevsm-chat.firebaseapp.com",
  projectId: "gamedevsm-chat",
  messagingSenderId: "1031310470966",
  appId: "1:1031310470966:web:315037842d6c508ebccd97"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, { body });
});
