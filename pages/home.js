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

  $ = { width: '100%' }
}

view Video {
  <browser />
  <editor />

  $ = {
    flexFlow: 'row',
    justifyContent: 'center'
  }

  const shared = {
    width: 498,
    margin: [50, 4, 0],
    borderRadius: 10,
    height: 410,
    boxShadow: '0 0 6px rgba(0,0,0,0.1)'
  }

  $editor = [shared, {

  }]

  $browser = [shared, {

  }]
}

view Intro {
  <Contain yield />

  $ = {
    fontWeight: 300,
    fontSize: 28,
    padding: [20, 0],
    margin: [30, 0],
    border: '1px dotted #ddd',
    borderLeft: 'none',
    borderRight: 'none'
  }

  $Contain = {
    textAlign: 'center'
  }

  $p = {
    margin: [7, 0]
  }

  $strong = {
    fontSize: 34,
    marginBottom: 12,
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