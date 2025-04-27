<script>
  let { src, title } = $props();
</script>

<div class="video_container">
  <iframe
    {title}
    width="100%"
    height="100%"
    {src}
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    frameborder="0"
  >
  </iframe>
</div>


<style>
  .video_container {
    position: relative;
    width: 100%;
    height: auto;
    aspect-ratio: 16/9;
    box-sizing: border-box;
  }
  iframe {
    border-radius: 16px;
  }
</style>
