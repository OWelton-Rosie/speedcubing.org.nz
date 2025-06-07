<svelte:head>
  <title>Competitions | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import "../../app.css";
  import CompSection from "../../components/competitions/CompSection.svelte";
  import Tutorial from "../../components/competitions/Tutorial.svelte";
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
  import ImageSlider from "../../components/ImageSlider.svelte";
  import PageTitle from "../../components/PageTitle.svelte";
  import Video from "../../components/Video.svelte";
  let imagePath = "/competitions/title_bg.webp";
  let title = `COMPETITIONS`;
</script>

<Header></Header>
<PageTitle {imagePath} {title}>
  <p>
    Competitions are one of the best ways to get involved in speedcubing! Don't
    be fooled by the name - more than anything, these are social events where
    you can get to know other people who share the same awesome hobby. Newcomers
    consistenty have an amazing experience, and often make lifelong friends
    here.<br /><br />Competitions are generally open to anyone, regardless of
    age or level of experience. If you can solve a cube, you're more than
    welcome to participate!<br /><br />Our competitions are officially
    recognised by the
    <a
      href="https://www.worldcubeassociation.org/"
      target="_blank"
      class="blueLink">World Cube Association</a
    >, the governing body for speedcubing worldwide.
  </p>
</PageTitle>
<CompSection></CompSection>
<ImageSlider></ImageSlider>
<Tutorial></Tutorial>
<Footer></Footer>
