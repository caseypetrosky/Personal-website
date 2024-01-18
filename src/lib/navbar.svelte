<script>
  let menuItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];
</script>


<nav style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);" class="p-2">
  <ul style="display: flex; justify-content: center; gap: 1rem;">
    {#each menuItems as item}
      <li><a class="text-xl" href={item.url}>{item.name}</a></li>
    {/each}
  </ul>
</nav>

<style>
 
  li {
    margin-right: 10px;
  }

  a {
    text-decoration: none;
    color: #222; /* Softer color */
    transition: color 0.3s; /* Smooth transition for hover */
  }

  a:hover {
    color: black; /* Slightly darker on hover */
  }
</style>
