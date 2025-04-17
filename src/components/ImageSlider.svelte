<script>
  const images = [
    "image_slider/i1.webp",
    "image_slider/i3.webp",
    "image_slider/i4.webp",
    "image_slider/i5.webp",
    "image_slider/i6.webp",
    "image_slider/i7.webp",
    "image_slider/i8.webp",
  ];
</script>

<section>
  {#each images as src}
    <img {src} alt="competition" />
  {/each}
</section>

<style>
  section {
    padding: 48px 0px;
    display: flex;
    flex-direction: row;
    background-color: #1a1a1b;
  }
  img {
    height: 200px;
    width: calc(100vw / 7);
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 768px) {
    section {
      overflow-x: auto;
      scroll-behavior: smooth;
      /* gap: 1rem; */
      /* padding: 1rem; */
      scrollbar-width: none; /* Firefox */
    }
    img {
      width: 200px;
    }
    section:-webkit-scrollbar {
      display: none; /* Chrome */
    }
  }
</style>
