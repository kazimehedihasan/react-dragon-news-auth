
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5t8sldRyoEzuicQC5GxlqUtopigFDrWY",
  authDomain: "react-dragon-news-auth.firebaseapp.com",
  projectId: "react-dragon-news-auth",
  storageBucket: "react-dragon-news-auth.appspot.com",
  messagingSenderId: "750044483429",
  appId: "1:750044483429:web:77f4f5d3f33234b21f5b8c"
};


const app = initializeApp(firebaseConfig);
export default app;