<script>
    import "../app.css";
    import Navbar from "../lib/navbar.svelte";
    import Footer from "$lib/footer.svelte";
  </script>
  
  <div class="bg-gray-300 flex flex-col min-h-screen">
    <Navbar />
    <div class="flex-grow">
      <slot />
      
    </div>
    <Footer />
  </div>