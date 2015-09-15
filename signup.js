view SignupForm {
  <form action="//flintlang.us11.list-manage.com/subscribe/post?u=d6ee317984756a7f0f5e9378b&amp;id=dcc2cefed5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
      <div class="mc-field-group">
        <input type="text" placeholder="Name" name="NAME" class="" id="mce-NAME" />
      </div>
      <div class="mc-field-group">
        <input type="email" placeholder="Contact (email or handle)" name="EMAIL" class="required email" id="mce-EMAIL" />
      </div>
      <div if={false} class="mc-field-group">
        <textarea name="ABOUT" class="" placeholder="What are you most interested in with Flint? Any feedback?" id="mce-ABOUT"></textarea>
      </div>
      <hide id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
      </hide>
      <hide style="position: absolute; left: -5000px;">
        <input type="text" name="b_d6ee317984756a7f0f5e9378b_dcc2cefed5" tabindex="-1" value="" />
      </hide>
      <center class="clear">
        <submit-input
          class="button"
          type="submit"
          value="Sign up!"
          style={{
            border: 'none',
            color: '#fff',
            fontWeight: 'bold',
            background: `linear-gradient(#E86C3D, #DC405B)`,
            padding: 10,
            fontSize: 22,
            width: '50%',
            marginTop: 20
          }}
          name="subscribe" id="mc-embedded-subscribe" />
      </center>
    </div>
  </form>

  $hide = {
    display: 'none'
  }

  $form = {
    minWidth: 300,
    margin: 'auto'
  }

  input = {
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
    background: '#fff',
    padding: 10,
    color: '#666',
    border: '1px solid #ccc'
  }

  $input = input

  $textarea = [input, {
    border: '1px solid #ccc',
    height: 150
  }]

  $label = {
    margin: [10, 0]
  }
}
