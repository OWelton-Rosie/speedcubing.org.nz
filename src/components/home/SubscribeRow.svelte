<script>
  import Button from "../Button.svelte";
</script>

<section>
  <div class="container">
    <h1>SUBSCRIBE</h1>
    <h4>
      Sign up with your email address to receive competition announcements and
      updates about SNZ!
    </h4>
    <div class="signup">
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email Address" />
      </form>
      <Button text="SIGN UP" link="/"></Button>
    </div>
    <div class="socials">
      <a href="https://facebook.com/SpeedcubingNZ" aria-label="facebook">
        <i class="bi bi-envelope-fill icon"></i></a
      >
      <a href="https://instagram.com/SpeedcubingNZ" aria-label="instagram">
        <i class="bi bi-instagram icon"></i></a
      >
      <a href="https://instagram.com/SpeedcubingNZ" aria-label="instagram">
        <i class="bi bi-facebook icon"></i></a
      >
      <a href="https://instagram.com/SpeedcubingNZ" aria-label="instagram">
        <i class="bi bi-youtube icon"></i></a
      >
    </div>
  </div>
</section>

<style>
  .container {
    margin: 0 auto;
    text-align: center;
    padding: 32px;
  }
  .signup {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding: 8px;
  }
  .socials {
    padding: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
  .icon {
    color: #fff;
    font-size: 2.5rem;
  }
  input {
    border: none;
    border-bottom: 1px solid #ababab;
    background: none;
    padding: 8px;
    color: #ababab;
    width: 130px;
  }
  form {
    display: flex;
    gap: 32px;
  }
  input:focus {
    outline: none;
    box-shadow: none;
  }
  section {
    background-color: #1a1a1b;
    color: white;
  }
  h1 {
    margin: 0;
    font-size: 2.2rem;
    font-weight: 500;
  }
  h4 {
    margin: 0;
    padding: 16px;
    font-size: 0.9rem;
    font-weight: 100;
    color: #dbdbdb;
  }
  @media screen and (max-width: 768px) {
    form,
    .signup {
      flex-direction: column;
    }
  }
</style>
