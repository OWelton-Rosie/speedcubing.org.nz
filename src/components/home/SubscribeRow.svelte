<script>
  import { supabase } from '$lib/supabase_client';
  import Button from "../Button.svelte";

  let myName = '';
  let myEmail = '';
  let loading = false;
  let message = '';
  let isError = false;

  let formProcessedOk = false;

  async function handleSubmit() {
    loading = true;
    message = '';
    isError = false;

    // upsert entry into Supabase
    const { data, error } = await supabase
      .from('update_subscription_emails')
      .upsert([{ email_address: myEmail, user_name: myName }]);

    if (error) {
      console.error('Error inserting data:', error);
      message = error.message;
      isError = true;
    } else {
      console.log('Email saved successfully:', data);
      message = 'Thank you for subscribing!';

      // clear form
      myName = '';
      myEmail = '';

      formProcessedOk = true;
    }

    loading = false;
  }
</script>

<section>
  <div class="container">
    <h1>SUBSCRIBE</h1>
    <h4>
      Sign up with your email address to receive competition announcements and
      updates about SNZ!
    </h4>
    <div class="signup">
      <form on:submit|preventDefault={handleSubmit}>
        <div>
          <input type="text" placeholder="Name" id="name" bind:value={myName} required/>
          <input type="email" placeholder="Email Address" id="email" bind:value={myEmail} required/>
        </div>

        {#if !formProcessedOk}
        <Button type="submit" disabled={loading} text="SIGN UP"></Button>
        {/if}
      </form>
    </div>

    <div>
      {#if loading}
      <h5>SAVING...</h5>
    {/if}
  
    {#if message}
      <p class={isError ? 'error' : 'success'}>{message}</p>
    {/if}
    </div>
  </div>
</section>

<!-- <style>
 
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="email"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .success {
    color: green;
    margin-top: 10px;
  }

  .error {
    color: red;
    margin-top: 10px;
  }
</style> -->

<style>
  .error {
    color: red;
    margin-top: 10px;
  }
  .success {
    color: white;
    margin-top: 10px;
  }

  .container {
    margin: 0 auto;
    text-align: center;
    padding: 32px;
  }
  .signup {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding: 8px;
  }
  input {
    border: none;
    border-bottom: 1px solid var(--colorGrey2);
    background: none;
    padding: 8px;
    color: var(--colorGrey2);
    width: 130px;
  }

  input[type="text"] {
    width: 130;
  }

  input[type="email"] {
    width: 250px;
  }
  
  form {
    display: flex;
    gap: 32px;
  }
  input:focus {
    outline: none;
    box-shadow: none;
  }
  section {
    background-color: var(--colorBlack2);
  }
  @media screen and (max-width: 768px) {
    form,
    .signup {
      flex-direction: column;
    }
  }
</style>

