<script>
  import ImageCard from "./ImageCard.svelte";
</script>

<section>
  <ImageCard
    img="image_row/IMG_0885.webp"
    title="GETTING STARTED"
    text="Learn to solve the Rubik's Cube, and get started with the hobby!"
    link="/"
  ></ImageCard>
  <ImageCard
    img="image_row/IMG_6900.webp"
    title="COMPETITIONS"
    text="Learn more about WCA competitions, and find one near you!"
    link="/"
  ></ImageCard>
  <ImageCard
    img="image_row/team_nz.webp"
    title="TOP CUBERS"
    text="New Zealand has some of the best speedcubers in the world!"
    link="/"
  ></ImageCard>
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    section {
      flex-direction: column;
    }
  }
</style>
