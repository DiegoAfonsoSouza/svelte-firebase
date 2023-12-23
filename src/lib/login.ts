import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

/* Autenticar usuário */
export function authSignIn (emailInput: string, passwordInput: string) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, emailInput, passwordInput)
    .then((userCredential) => {
      let user = userCredential.user;
      alert("Bem Vindo " + user.email);
    })
    .catch((error) => {
      console.error(error.code);
      console.error(error.message);
      alert("ERRO: " + error.message);
    });
}

/* Deslogar usuário */
export function authSignOut () {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
