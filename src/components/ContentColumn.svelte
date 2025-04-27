<script>
  let {children} = $props();
</script>

<section class="container">
  <div class="content">
    {@render children()}
  </div>
</section>

<style>
  .container{
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: var(--colorBlack2);
  }

  .content{
    width: 65%;
    padding: 16px;
    box-sizing: border-box;
  }

  @media screen and (max-width: 768px){
    .content{
      width: 100%;
    }
  }
</style>
