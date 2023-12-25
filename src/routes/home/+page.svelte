<script>
  import { authSignOut } from "$lib/auth";
</script>
<h1>HOME</h1>

<div>
  <a href="/">Página de Login</a>
</div>

<button on:click={authSignOut} class="w-60 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
    Logout
</button>