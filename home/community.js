import { style, color, routes, font, device } from '../constants'

view Home.Community {
  <Feature narrow>
    <inner>
      <Col pad>
        <Title>Powered by Open</Title>
        <IntroText>
          Motion is and runs on open source. We work with the community on Github, and sponsor open source on Patreon.
        </IntroText>

        <Text>
          Join us on Slack and read our <Link to="/community">community guidelines</Link>.
        </Text>

        <cloud>
          <a href="http://facebook.github.io/react" target="_blank"><img src="/assets/images/logos/react.svg" /></a>
          <a href="http://npmjs.com" target="_blank"><img src="/assets/images/logos/npm.svg" /></a>
          <a href="http://babeljs.io" target="_blank"><img src="/assets/images/logos/babel.svg" /></a>
          <a href="https://webpack.github.io/" target="_blank"><img src="/assets/images/logos/webpack.svg" /></a>
          <a href="http://gulpjs.com/" target="_blank"><img src="/assets/images/logos/gulp.svg" /></a>
          <a href="https://github.com/postcss/autoprefixer" target="_blank"><img src="/assets/images/logos/autoprefixr.svg" /></a>
          <a href="http://projects.formidablelabs.com/radium/" target="_blank"><img src="/assets/images/logos/radium.png" /></a>
        </cloud>
      </Col>

      <Col class="example">
        <Slack />
      </Col>
    </inner>
  </Feature>

  $Feature = {
    overflow: 'hidden'
  }

  $inner = {
    flexFlow: 'row',

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $content = {
    justifyContent: 'center',

    [device.small]: {
      width: '100%',
      padding: 0
    }
  }

  $cloud = {
    flexFlow: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: [20, 'auto', 0]
  }

  const size  = 50

  $img = {
    width: size,
    maxHeight: size,
    margin: [0, 5, 20],
    filter: 'grayscale(100%) opacity(50%)',
    transition: 'all ease-in 400ms',
    hover: { filter: 'grayscale(0%) opacity(100%)' },
    alignSelf: 'center'
  }

  $a = {
    alignSelf: 'center'
  }
}
