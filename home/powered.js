import { style, color, routes, font, device } from '../constants'

export const Powered = () => $(
  <Interlude>Powered by the node community</Interlude>

  <Contain>
    <cloud>
      <a href="http://facebook.github.io/react" target="_blank"><img src="/assets/images/logos/react.svg" /></a>
      <a href="http://npmjs.com" target="_blank"><img src="/assets/images/logos/npm.svg" /></a>
      <a href="http://babeljs.io" target="_blank"><img src="/assets/images/logos/babel.svg" /></a>
      <a href="https://webpack.github.io/" target="_blank"><img src="/assets/images/logos/webpack.svg" /></a>
      <a href="http://gulpjs.com/" target="_blank"><img src="/assets/images/logos/gulp.svg" /></a>
      <a href="https://github.com/postcss/autoprefixer" target="_blank"><img src="/assets/images/logos/autoprefixr.svg" /></a>
      <a href="http://projects.formidablelabs.com/radium/" target="_blank"><img src="/assets/images/logos/radium.png" /></a>
    </cloud>
  </Contain>

  cloud: {
    flexFlow: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '60%',
    margin: [-30, 'auto', 30]
  }

  const size  = 100

  img: {
    width: size,
    maxHeight: size,
    margin: [0, 20, 20],
    alignSelf: 'center'
  }

  a: {
    alignSelf: 'center'
  }
}