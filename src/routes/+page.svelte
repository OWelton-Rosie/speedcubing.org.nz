<svelte:head>
  <title>Home | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import PostContainer from '$lib/components/posts/PostContainer.svelte';
  import Carousel from "./home/Carousel.svelte";
  import Hero from "./home/Hero.svelte";
  import ImageLinks from "./home/ImageLinks.svelte";
  import Subscribe from "./home/Subscribe.svelte";
  
</script>

<Carousel></Carousel>
<Hero></Hero>
<ImageLinks></ImageLinks>
<PostContainer></PostContainer>
<Subscribe></Subscribe>
