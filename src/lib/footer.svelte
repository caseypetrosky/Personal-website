<script>
	import { sveltekit } from '@sveltejs/kit/vite';
    import {Github, Linkedin} from 'lucide-svelte';
</script>


<footer class="text-center flex justify-center items-center flex-col mt-10 mb-2 gap-2" >
    <p>© 2023 Casey Petrosky</p>

    <a class="linkedin flex"href="https://www.linkedin.com/in/caseypetrosky/">
        <Linkedin/> 
        <h3 class="pl-2">
            Linkedin
        </h3>
    </a>
    <a class="github flex"href="https://github.com/caseypetrosky">
        <Github/> 
        <h3 class="pl-2">
            GitHub
        </h3>
    </a>
    <p class="text-sm">This website is built using SvelteKit and hosted on Vercel</p>
    
</footer>

<style>
    a {
        cursor: pointer;
    }

    .linkedin:hover {
        color: rgb(28, 10, 143);
        text-shadow: 0 0 3px rgb(28, 10, 143, .3);
    }

    .github:hover {
        color: rgb(71, 71, 72);
        text-shadow: 0 0 3px rgba(54, 54, 54, 0.3);
    }
</style>
