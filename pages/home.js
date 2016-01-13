view Home {
  <Header />
  <Welcome />
  <Diagram />
  <Install title />
  <Home.Examples />
  <Features />
  <Performance />
  <DemoVideo />
  <Slack />
  <FAQ />
  <Signup />
  <Powered />
  <Footer />

  $ = {
    width: '100%'
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
