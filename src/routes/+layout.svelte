<script>
    import "../app.css";
    import Navbar from "../lib/navbar.svelte";
    import {Github, LinkedinIcon} from 'lucide-svelte';
  </script>
  
  <div></div>
  <Navbar />
  <slot />
  <footer class="text-center">
    <p>© 2023 Casey Petrosky</p>
    <h3 class=""><a class="linkedin"href="https://www.linkedin.com/in/caseypetrosky/">LinkedIn</a></h3>
    <h3 class=""><a class="github"href="https://github.com/caseypetrosky">GitHub</a></h3>
<Github></Github>

<LinkedinIcon/>
  </footer>

  <style>
    a{
  cursor: pointer;
}

.linkedin:hover{
  color:rgb(28, 10, 143);
  text-shadow: 0 0 3px rgb(28, 10, 143, .3);
}
.github:hover{
  color:rgb(71, 71, 72);
  text-shadow: 0 0 3px rgba(54, 54, 54, 0.3);
}


  </style>