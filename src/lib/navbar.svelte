<script>
  let menuItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];
</script>

<nav class="bg-gray-400 shadow-sm">
  <ul>
    {#each menuItems as item}
      <li><a class="text-xl" href={item.url}>{item.name}</a></li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    padding: 10px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

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
