<script>
  let { img, title, text, link } = $props();
</script>

<section>
    <a href={link}>
      <img alt="cuber" src={img} />
      <div class="textBoxes">
        <h4>{title}</h4>
        <h5>{text}</h5>
      </div>
    </a>
</section>

<style>
  section {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  h4,
  h5 {
    margin: auto;
    text-align: center;
    padding: 8px;
    background-color: var(--colorBlack3);
    color: white;
  }
  .textBoxes {
    position: absolute;
    transform: translateX(-50%);
    transform: translateY(-120%);
    display: flex;
    flex-direction: column;
    gap: 20px 0px;
    width: 100%;
  }
  img {
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.3s ease;
    width: 100%;
    height: 100%;
  }
  img:hover {
    transform: scale(1.1);
  }
</style>
