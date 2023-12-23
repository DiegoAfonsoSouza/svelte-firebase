<script>
    import { initializeApp } from 'firebase/app';
    import { firebaseConfig } from "$lib/firebaseConfig";
    import Login from "$lib/Login.svelte";

    const app = initializeApp(firebaseConfig);

    // console.log(app);
</script>

<Login />
