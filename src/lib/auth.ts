import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "$lib/initializeFirebase";

const auth = getAuth();

/* Estado do Usuário */
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("usuário logado: " + uid);
    console.log("email: " + user.email);
  } else {
    // User is signed out
    console.log("Usuário deslogado.");
    
  }
});

/* Autenticar usuário */
export async function authSignIn(emailInput: string, passwordInput: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      emailInput,
      passwordInput
    );
    const user = userCredential.user;
    alert("Bem Vindo " + user.email);
    return true;
  } catch (error: any) {
    if (error.code === "auth/invalid-credential") {
      alert("Usuário/Senha Invalidos.");
    } else if (error.code === "auth/invalid-email") {
      alert("Email Invalido.");
    } else {
      alert("Erro desconhecido: " + error.code);
    }

    return false;
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