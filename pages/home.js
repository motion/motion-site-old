view Home {
  <Header />
  <Welcome />
  <Diagram />
  <Install title />
  <Examples />
  <Features />
  <Performance />
  <DemoVideo />
  <Slack />
  <FAQ />
  <Signup />
  <Powered />
  <Footer />

  $ = {
    width: '100%',
    color: '#fff'
  }
}

view Home.Examples {
  <Contain alt>
    <section>
      <Interlude center left>
        Learn Flint in two minutes
      </Interlude>

      <DemoCounter />

    </section>

    <section>
      <Interlude center>
        Style views with ease...
      </Interlude>

      <DemoVenn />
    </section>

    <section>
      <Interlude center>
        Flint works with ES6, npm & React
      </Interlude>

      <DemoCircles />
    </section>
  </Contain>

  $ = {
    // padding: [0, 0, 40],
    margin: [0, 'auto', 40],
    width: '100%',
    maxWidth: 980,
    position: 'relative',
    zIndex: 0
  }

  $section = {
    position: 'relative'
  }
}

view Slack {
  <Contain id="slack">
    <Interlude center>Join us on Slack!</Interlude>
    <iframe seamless="seamless" src="https://flint-slack.herokuapp.com/"></iframe>
  </Contain>

  $iframe = {
    border: 'none',
    width: '100%',
    height: 240,
    overflow: 'hidden'
  }

  $ = {
    margin: [-20, 0, 20]
  }
}
