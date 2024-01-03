<script>
  import { goto } from "$app/navigation";
  import { auth, authSignOut } from "$lib/auth"
  import { isAuthenticated } from "$lib/stores";

  function goLogin() {
    goto('/');
  }
  console.log("/home/+page.svelte: " + !!isAuthenticated);
</script>
<h1>HOME</h1>

<button on:click={goLogin} class="w-60 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-500 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
  Pagina de Login
</button>

<main>
  {#if $isAuthenticated}
    <p>O usuário está autenticado.</p>
    <p>ID: {auth.currentUser?.uid}</p>
    <p>Nome: {auth.currentUser?.displayName}</p>
    <p>Email: {auth.currentUser?.email}</p>
  {:else}
    <p>O usuário não está autenticado.</p>
  {/if}
</main>

<button on:click={authSignOut} class="w-60 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
    LogOut
</button>