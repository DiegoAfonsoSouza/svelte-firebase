import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB32M8mBM3ueZcPrIWBnzMMtZ3yEaVKLcY",
    authDomain: "gastos-mensal-app.firebaseapp.com",
    projectId: "gastos-mensal-app",
    storageBucket: "gastos-mensal-app.appspot.com",
    messagingSenderId: "774265427602",
    appId: "1:774265427602:web:fe071720b1251ab69b384b",
    measurementId: "G-C2NBHQWST3"
  };

const app = initializeApp(firebaseConfig);

/* 
export default é frequentemente usado quando você deseja exportar 
uma única entidade como a principal exportação de um módulo. 
Isso simplifica as importações e deixa o código mais limpo em alguns casos.
*/
export default app;
