<script>
  import Video from "../Video.svelte";
</script>

<section>
  <div class="inner">
    <h1>YOUR FIRST COMPETITION</h1>
    <h4>
      Before the competition we'll send you an email with all the information
      you need to know.<br />We'll also run a tutorial for new competitors on
      the day, to make sure you know how everything works and have a great
      experience. To make sure you're extra prepared though, we'd also suggest
      reading the official
      <a
        class="blueLink"
        href="https://documents.worldcubeassociation.org/edudoc/competitor-tutorial/tutorial.pdf"
        >competitor tutorial</a
      >, and watching the following video:
    </h4>
    <div class="box">
      <Video
        title="WCA Competitor Tutorial"
        src="https://www.youtube.com/embed/dPL3eV-A0ww"
      ></Video>
    </div>
    <h4>
      Still have questions? Check out our <a href="./faq" class="blueLink"
        >FAQ page</a
      >
      to find answers to all sorts of common questions, or feel free to
      <a href="./contact" class="blueLink">contact us</a>.
    </h4>
    <br />
    <br />
    <h1>ORGANISING A COMPETITION</h1>
    <h4>
      Want a competition in your area? We're always on the lookout for more keen
      organisers!<br /><br />
      The most important part is finding a venue that's availalbe on a suitable weekend,
      and in the right size/price range. You can usually look at past competitions
      to get an idea of the number of competitors you should expect for your area.
      After that, a good rule of thumb is that a vvenue needs to be 4 square meters
      per competitor, and cost no more than $30 per competitor.<br /><br />If
      you think you've found a suitable venue and want to go further, please
      read our
      <a href="organiser_guide.pdf" class="blueLink">organiser guide</a> to learn
      more, and contact us with the venue details so we can guide you through the
      rest of the process!
    </h4>
  </div>
</section>

<style>
  section {
    background-color: var(--colorBlack2);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .inner {
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 50%;
  }
  .box {
    position: relative;
    height: auto;
    aspect-ratio: 16/9;
    padding: 24px;
  }
  @media screen and (max-width: 768px) {
    .inner {
      width: 100%;
    }
  }
</style>
