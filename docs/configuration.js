view Docs.Configuration {
  <Title>Configuration</Title>
  <IntroText>
    Configuration is located in <code>.flint/config.js</code>
  </IntroText>

  <Code
    source={`
      // showing default values

      module.exports = {

       // enforce a port
       port: 4000,

       // can disable flint router and route="" property
       routing: true,

       // babel configuration
       // you can import and use npm plugins here
       babel: {
         plugins: []
       },


       // using "build" or "run"
       // you can target a specific environment
       run: {

         // prop hashing for smart hot reloads at slower initial load speed
         disablePropsHashing: false,

         // pretty code output in dev,
         pretty: false

       },

       build: {
         minify: true
       }

      }
    `}
  />

  <br />
  <br />

}