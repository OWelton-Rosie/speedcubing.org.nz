<svelte:head>
  <title>Admin | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import "../../app.css";
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
</script>
<Header></Header>
<iframe src="https://snzportal.netlify.app/" title="SNZ Portal"></iframe>

<style>
  iframe{
    width: 100vw;
    height: calc(100vh - 100px);
    border: none;
  }
</style>