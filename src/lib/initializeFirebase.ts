import { initializeApp } from "firebase/app";
import { firebaseConfig } from "$lib/firebaseConfig";

const app = initializeApp(firebaseConfig);

/* 
export default é frequentemente usado quando você deseja exportar 
uma única entidade como a principal exportação de um módulo. 
Isso simplifica as importações e deixa o código mais limpo em alguns casos.
*/
export default app;
