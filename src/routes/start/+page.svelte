<script>
  import "../../app.css";
  import ContentColumn from "../../components/ContentColumn.svelte";
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
  import PageTitle from "../../components/PageTitle.svelte";
  import CubeClubsGrid from "../../components/start/CubeClubsGrid.svelte";
  import EventsInfo from "../../components/start/EventsInfo.svelte";
  import StoresGrid from "../../components/start/StoresGrid.svelte";
  import Video from "../../components/Video.svelte";
  let imagePath = "/image_row/IMG_0885.webp";
  let title = "GETTING STARTED";

</script>
<Header></Header>
<PageTitle {title} {imagePath}>
  <h4>The Rubik's Cube has been puzzling millions of people for over 50 years! 
    Here, you can learn how to solve it, as well as a variety of other puzzles.
    <br /><br />
    You can also learn more about the sport of speedcubing, find resources on how to get faster, and more.
    <br /><br />
    Happy cubing!
  </h4>
</PageTitle>
<ContentColumn>
  <h1>HOW TO SOLVE THE RUBIK'S CUBE</h1>
  <Video src="https://www.youtube.com/embed/1t1OL2zN0LQ"></Video>
  <h1>SPEEDCUBING</h1>
  <h4>So you've learned to solve the Rubik's Cube. What next? Well, solving it faster, of course! 
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
    of them below:</h4>

    <EventsInfo></EventsInfo>
    <h4>
      See the New Zealand National Records for each event <a
        class="blueLink"
        href="./nzs-best"
      >here</a
      >.
    </h4>
    <h1>CUBE CLUBS</h1>
    <h4>In addition to official SNZ-run competitions, there are several unofficial cube clubs around 
      New Zealand. These are not associated with SNZ, but can be a great way to get to get to know 
      other cubers, without the pressure of an official competition. Find your nearest club here:</h4>
    <CubeClubsGrid></CubeClubsGrid>

    <h1>CUBE STORES</h1>
    <h4>There are two great New Zealand-based speedcube stores:</h4>
    <StoresGrid></StoresGrid>
</ContentColumn>
<Footer></Footer>