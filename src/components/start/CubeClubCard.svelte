<script>
  let {title, location, src} = $props();
</script>

<a href="https://kapiticubers.wordpress.com/" aria-label="Kapiti Cubers" target="_blank">
<section>
    <img alt="Club" {src}>
    <h3>{title}</h3>
    <i>{location}</i>
</section>
</a>


<style>
  img{
    height: 100px;
    width: 100px;
    object-fit: cover;
    user-select: none;
  }
  section{
    padding: 16px 8px;
    background-color: #4a4a4b;
    border-radius: 8px;
  }
  h3{
    margin-top: 16px;
  }
  i{
    color: var(--colorGrey2);
  }
  a{
    text-decoration: none;
  }
</style>