<script>
  import "bootstrap-icons/font/bootstrap-icons.css";
  const { person, shrink } = $props();
  const { name, bio, file, wcaid, instagram, youtube } = person;
</script>


<section class="card" class:shrink={shrink}>
  <div class="img-box">
    <img src="/nzs_best/bio_photos/{file}" alt="person" class="img" class:full-width={shrink}>
    <div class="name-box"><p>{name}</p></div>
  </div>
  
  <div class="bio">
    <p>{@html bio}</p>
    <span class="icons">
      <a href="https://www.worldcubeassociation.org/persons/{wcaid}" aria-label="WCA icon" target="_blank">
        <img src="/icons/wca.png" class="icon" alt="WCA Icon">
      </a>
      {#if instagram}
        <a href={instagram} aria-label="instagram" target="_blank">
          <i class="bi bi-instagram icon"></i>
        </a>
      {/if}
      {#if youtube}
        <a href={youtube} aria-label="youtube" target="_blank">
          <i class="bi bi-youtube icon"></i>
        </a>
      {/if}
    </span>
  </div>
</section>

<style>
  .card {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 70%;
    flex-shrink: 0;
    flex-grow: 0;
    height: 100%;
    /* transition: all 0.5s ease; */
    transition: all 0.5s ease;
  }

  .img-box {
    position: relative;
  }

  .name-box{
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: var(--colorBlack3);
    padding: 12px 32px;
    text-align: center;
  }

  .name-box p {
    font-family: "Spartan MB", sans-serif;
  }

  .shrink {
    height: 60%;
    opacity: 0.15;
  }

  .shrink .bio{
    overflow: hidden;
  }

  .icons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .icon{
    display: inline-block;
    width: 1em;
    font-size: 2em;
    padding: 8px 16px;
    color: white;
  }

  .img-box {
    width: 50%;
    position: relative;
  }

  .img {
    object-fit: cover;
    object-position: center;
    display: block;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
  }

  .bio {
    width: 50%;
    padding: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
    background-color: var(--colorBlack3);
  }

  @media screen and (max-width: 992px){
    .card {
      flex-direction: column;
    }
    .img-box, .bio {
      width: 100%;
    }
  }
</style>