// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// (اختياري) إذا بدك Analytics صدّره باسم مختلف
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBYAeScG5E88_3ISohCm551dVVEDf6AkGw",
  authDomain: "style-loom-3a4e9.firebaseapp.com",
  projectId: "style-loom-3a4e9",
  // انتبه: اسم البكت غالبًا يكون appspot.com
  // إذا طالع عندك firebasestorage.app جرّب ترجع له من الإعدادات:
  storageBucket: "style-loom-3a4e9.appspot.com",
  messagingSenderId: "605712494044",
  appId: "1:605712494044:web:390041dee3e53c8f1fb319",
  measurementId: "G-3J6LJX82BF"
};

const app = initializeApp(firebaseConfig);

// هذا اللي بدنا نستخدمه بكل مكان
export const db = getFirestore(app);

// (اختياري)
// export const analytics = getAnalytics(app);
