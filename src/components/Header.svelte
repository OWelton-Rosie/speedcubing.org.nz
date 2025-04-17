<script>
  let menuOpen = false;
</script>

<header class="header">
  <div class="header">
    <a href="/"><img src="logo/Full_white.webp" alt="SNZ logo" /></a>
    <button
      class="hamburger"
      on:click={() => (menuOpen = !menuOpen)}
      aria-label="menu"
    >
      <i class="bi bi-list"></i>
    </button>

    <div class="nav" class:open={menuOpen}>
      <a href="/">GETTING STARTED</a>
      <a href="./competitions">COMPETITIONS</a>
      <a href="./faq">TOP CUBERS</a>
      <a href="./contact">ABOUT</a>
      <a href="./faq">FAQ</a>
      <a href="./shop">SHOP</a>
      <a href="./contact">CONTACT</a>
    </div>
  </div>
</header>

<style>
  .header {
    position: sticky;
    z-index: 100;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #101010;
    height: 100px;
  }

  .nav {
    display: flex;
    flex-direction: row;
  }

  .hamburger {
    display: none;
    background: none;
    border: none;
    font-size: 48px;
    padding: 8px;
    cursor: pointer;
    user-select: none;
    font-weight: 100;
    color: white;
  }

  img {
    width: 90px;
    padding: 16px;
  }

  .nav a {
    font-family: "Public Sans", sans-serif;
    font-weight: 300;
    font-size: 14px;
    padding: 0px 16px;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }

  .nav a:hover {
    color: #aaaaaa;
    transition: color 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    .header {
      justify-content: space-between;
      width: 100%;
    }
    .nav {
      display: none;
      position: absolute;
      top: 100px;
      flex-direction: column;
      align-items: center;
      background-color: #1a1a1b;
      width: 100%;
    }
    .nav a {
      padding: 12px;
    }
    .nav.open {
      display: flex;
    }
    .hamburger {
      display: block;
    }
  }
</style>
