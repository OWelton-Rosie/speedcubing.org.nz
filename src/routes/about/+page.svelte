<svelte:head>
  <title>About | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import "../../app.css";
  import History from "../../components/about-us/History.svelte";
  import SiteInfo from "../../components/about-us/SiteInfo.svelte";
  import TeamGrid from "../../components/about-us/TeamGrid.svelte";
  import ContentColumn from "../../components/ContentColumn.svelte";
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
  import PageTitle from "../../components/PageTitle.svelte";
  let title = "ABOUT US";
  let imagePath = "/about_us/about_us.jpg";
</script>
<Header></Header>
<PageTitle {title} {imagePath}>
  <p>The New Zealand speedcubing community has a rich history, dating back over 
    15 years! Learn more about it and the team behind Speedcubing New Zealand here.</p>
</PageTitle>
<ContentColumn>
  <TeamGrid></TeamGrid>
  <History></History>
  <SiteInfo></SiteInfo>
</ContentColumn>
<Footer></Footer>