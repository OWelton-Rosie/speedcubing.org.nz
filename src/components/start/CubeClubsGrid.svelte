<script>
  import CubeClubCard from "./CubeClubCard.svelte";

</script>
<section>
  <div class="container">
    <div><CubeClubCard title="Kapiti Cubers" location="Paraparaumu, Wellington" src="cube_clubs/kapiti.png"></CubeClubCard></div>
    <div><CubeClubCard title="Kapiti Cubers" location="Paraparaumu, Wellington" src="cube_clubs/kapiti.png"></CubeClubCard></div>
    <div><CubeClubCard title="Kapiti Cubers" location="Paraparaumu, Wellington" src="cube_clubs/kapiti.png"></CubeClubCard></div>
    <div><CubeClubCard title="Kapiti Cubers" location="Paraparaumu, Wellington" src="cube_clubs/kapiti.png"></CubeClubCard></div>
    <div><CubeClubCard title="Kapiti Cubers" location="Paraparaumu, Wellington" src="cube_clubs/kapiti.png"></CubeClubCard></div>
    <div><CubeClubCard title="Kapiti Cubers" location="Paraparaumu, Wellington" src="cube_clubs/kapiti.png"></CubeClubCard></div>
    <div><CubeClubCard title="Kapiti Cubers" location="Paraparaumu, Wellington" src="cube_clubs/kapiti.png"></CubeClubCard></div>
    <div><CubeClubCard title="Kapiti Cubers" location="Paraparaumu, Wellington" src="cube_clubs/kapiti.png"></CubeClubCard></div>
  </div>
</section>

<style>
  .container{
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
</style>