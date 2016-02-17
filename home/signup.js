import { color } from '../constants'

view Home.Signup {
  <Feature dark>
    <Row center centered>
      <Col class="text">
        <Title light>Motion Beta</Title>
        <IntroText light>
          Motion Beta is starting with Native support. We're looking for developers to help build out the best possible native experience.
        </IntroText>
      </Col>

      <Col center>
        <SignupForm />
      </Col>
    </Row>
  </Feature>

  $text = {
    width: 300,
    marginRight: 100
  }
}

view SignupForm {
  <form action="//motionlang.us11.list-manage.com/subscribe/post?u=d6ee317984756a7f0f5e9378b&amp;id=dcc2cefed5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
      <div class="mc-field-group">
        <input type="text" placeholder="Name" name="NAME" class="" id="mce-NAME" />
      </div>
      <div class="mc-field-group">
        <input type="email" placeholder="Email" name="EMAIL" class="required email" id="mce-EMAIL" />
      </div>
      <div if={false} class="mc-field-group">
        <textarea name="ABOUT" class="" placeholder="What are you most interested in with Motion? Any feedback?" id="mce-ABOUT"></textarea>
      </div>
      <hide id="mce-responses" class="clear">
        <div class="response" id="mce-error-response"></div>
        <div class="response" id="mce-success-response"></div>
      </hide>
      <hide>
        <input type="text" name="b_d6ee317984756a7f0f5e9378b_dcc2cefed5" tabindex="-1" value="" />
      </hide>
      <center class="clear">
        <input
          type="submit"
          class="button"
          type="submit"
          value="Sign up!"
          style={{
            border: 'none',
            color: '#fff',
            fontWeight: 'bold',
            background: `linear-gradient(left, #E86C3D, #DC405B)`,
            padding: 10,
            fontSize: 22,
            width: '50%'
          }}
          name="subscribe" id="mc-embedded-subscribe" />
      </center>
    </div>
  </form>

  $hide = {
    display: 'none'
  }

  $form = {
    width: 300,
    margin: 'auto'
  }

  $input = {
    width: '100%',
    marginBottom: 10,
    borderRadius: 5,
    background: '#fff',
    padding: 10,
    color: '#666',
    border: '1px solid #ccc'
  }

  $button = {
    margin: 'auto',
    background: color.brand2
  }
}
