
<section>
  <p>Make sure to include details about your potential venue, location and dates.</p><br/>

  <form name="contact" id="contact-form" netlify>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" />
  
    <label for="email">Email</label>
    <input type="email" id="email" name="email" />
  
    <label for="message">Message</label>
    <textarea id="message" name="message"></textarea>
  
    <input type="submit" value="Submit" class="btn" />
  </form>
</section>

<style>
  section{
    padding: 32px 0px;
  }
  form {
    display: flex;
    justify-content: left;
    flex-direction: column;
    /* padding: 16px 8px; */
  }
  input[type="text"], input[type="email"], textarea{
    border: none;
    border-bottom: 1px solid var(--colorGrey2);
    background: none;
    padding: 8px;
    color: var(--colorGrey2);
    border-radius: 0px;
    font-size: clamp(1rem, 1.2vw, 1.3rem);
    background-color: beige;
    margin-bottom: 12px;
  }
</style>