
<script>
  let menuItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];
</script>

<nav>
  <ul>
    {#each menuItems as item}
      <li><a href={item.url}>{item.name}</a></li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    background-color: #f2f2f2;
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
    color: #333;
    font-size: larger;
  }
</style>
