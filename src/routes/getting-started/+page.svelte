<svelte:head>
  <title>Getting Started | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import "../../app.css";
  import ContentColumn from "../../components/ContentColumn.svelte";
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
  import PageTitle from "../../components/PageTitle.svelte";
  import CubeClubsGrid from "../../components/getting-started/CubeClubsGrid.svelte";
  import EventsInfo from "../../components/getting-started/EventsInfo.svelte";
  import StoresGrid from "../../components/getting-started/StoresGrid.svelte";
  import Video from "../../components/Video.svelte";
  let imagePath = "/getting_started/getting_started.webp";
  let title = "GETTING STARTED";

</script>
<Header></Header>
<PageTitle {title} {imagePath}>
  <p>The Rubik's Cube has been puzzling millions of people for over 50 years! 
    Here, you can learn how to solve it, as well as a variety of other puzzles.
    <br /><br />
    You can also learn more about the sport of speedcubing, find resources on how to get faster, and more.
    <br /><br />
    Happy cubing!
  </p>
</PageTitle>
<ContentColumn>
  <h2 class="title">HOW TO SOLVE THE RUBIK'S CUBE</h2>
  <Video src="https://www.youtube.com/embed/1t1OL2zN0LQ"></Video>
  <h2 class="title">SPEEDCUBING</h2>
  <p>So you've learned to solve the Rubik's Cube. What next? Well, solving it faster, of course! 
    Speedcubing is solving the Rubik's Cube and other similar puzzles (called "twisty puzzles") 
    as quickly as possible. If you've ever timed yourself solving and tried to beat your fastest
    time, you're already a speedcuber!<br /><br />
    Speedcubing is both a hobby and a competitive sport. Many people enjoy different aspects of 
    speedcubing- whether that's just getting faster at the classic 3×3 Rubik's Cube, learning to
    solve a variety of different puzzles, or challenging themselves by solving it one-handed
    or even blindfolded!<br /><br />
    Speedcubing New Zealand organises competitions, where cubers gather to race against the clock.
    Competitions are far more than just that though- these events are where you can make friends
    who share the same passion, learn new skills, try different cubes, and challenge yourself to 
    improve! For most people, competitions are more about socialising and trying to beat your own 
    personal records than about winning. If you're a cuber, come along! We promise you won't regret 
    it. <br /><br />
    The World Cube Association is the worldwide governing body for speedcubing. Founded in 2004, 
    it now spans over 120 countries, with more than 250,000 competitors and over 13,000 official 
    competitions to date! There are 17 WCA-recognised events- learn to solve and improve at each 
    of them below:</p>

    <EventsInfo></EventsInfo>
    <p class="records_link">
      See the New Zealand National Records for each event <a
        class="blueLink"
        href="./nzs-best"
      >here</a
      >.
    </p>
    <h2 class="title">CUBE CLUBS</h2>
    <p>In addition to official SNZ-run competitions, there are several unofficial cube clubs around 
      New Zealand. These are not associated with SNZ, but can be a great way to get to get to know 
      other cubers, without the pressure of an official competition. Find your nearest club here:</p>
    <CubeClubsGrid></CubeClubsGrid>

    <h2 class="title">CUBE STORES</h2>
    <p class="stores_text">There are two great New Zealand-based speedcube stores:</p>
    <StoresGrid></StoresGrid>
</ContentColumn>
<Footer></Footer>

<style>
  .records_link, .stores_text{
    text-align: center;
  }
</style>