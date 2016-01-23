view Transition {
  <Head
    title="Moving your React app to Flint"
    subtitle="Flint runs on React, so migrating an existing React stack is possible. Follow these instructions."
  />
  <Page>
    <SubTitle>Video Tutorial</SubTitle>
    <iframe width="1280" height="720" src="https://www.youtube-nocookie.com/embed/-nZa0RLGQRI?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

    <br />

    <Text>
      Moving to Flint from your current React build system is relatively easy.
      We are still working on supporting a wider variety of configurations, but are eager
      to get them all working. If you're having trouble migrating, please join our Slack and
      open a ticket on our Github.
    </Text>

    <Text>
      A fuller set of examples is coming soon!
    </Text>
    <Home.Community />
  </Page>

  const dim = () => {
    const wide = Math.min(window.innerWidth, 900)
    const dim = { width: 1280, height: 720 }
    const ratio = wide / dim.width

    return {
      width: Math.round(ratio * dim.width),
      height: Math.round(ratio * dim.height)
    }
  }

  $iframe = {
    width: dim().width,
    height: dim().height
  }
}