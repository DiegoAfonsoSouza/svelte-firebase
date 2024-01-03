import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import app from "$lib/initializeFirebase";
import { isAuthenticated } from "./stores";
export const auth = getAuth(app);

// export function validateSession(id: string) {
//   const sesstion = get(sessionsStore);
//   const sesstionResult = sessions.find
// }

/* Estado do Usuário */
auth.onAuthStateChanged(authUser => {
  isAuthenticated.set(!!authUser);
  console.log("auth: " + !!authUser);
  if (authUser) {
      console.log();
      // goto("/home");
  } else if (!authUser) {
    console.log();
    // goto("/");
  }
});
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       isAuthenticated.set(!!user); /* !! garante a conversão para um valor booleano */
//       console.log("usuário logado: " + user.uid);
//       console.log("current user: " + auth.currentUser?.email);
//     } else {
//       // User is signed out
//       console.log("Usuário deslogado.");
//       console.log("current user: " + auth.currentUser);
//       isAuthenticated.set(false);
//     }
//   });

/* Autenticar usuário */
export async function authSignIn(emailInput: string, passwordInput: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, emailInput, passwordInput);
    // localStorage.setItem('firebaseToken', await userCredential.user.getIdToken());
    alert("Bem Vindo " + userCredential.user.email);
  } catch (error: any) {
    if (error.code === "auth/invalid-credential") {
      alert("Usuário/Senha Invalidos.");
    } else if (error.code === "auth/invalid-email") {
      alert("Email Invalido.");
    } else {
      alert("Erro desconhecido: " + error.code);
    }
  }
}
/* Autenticar usuário com google */
export async function authSignInGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    const userCredentialGoogle = await signInWithPopup(auth, provider);
    console.log("Login com google: " + userCredentialGoogle);
    window.location.href = '/home';
  } catch (error: any) {
    alert("Erro: " + error.code);
  }
}
/* Deslogar usuário */
// Outra abordagem com .then .catch
/* export function authSignOut() {
  signOut(auth)
    .then(() => {
      alert("LogOut realizado com sucesso!");
    })
    .catch((error) => {
      alert("ERRO: " + error.mensage);
    });
} */
export function authSignOut() {
  try {
    signOut(auth);
    alert("LogOut realizado com sucesso!");
  } catch (error: any) {
    alert("Erro: " + error.code);
  }
}