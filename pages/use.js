view Use {
  let isReact = true
  let small = true
  let wait = true

  <Head
    title="Let us do it for you"
    subtitle="Flint Developer Team will convert your React application to use Flint for you"
  />
  <Page>
    <Title>Tell us about your company</Title>
    <size>
      <buttons>
        <Button onClick={() => small = true}
                style={{ opacity: small ? 1 : .6 }}
                class={{selected: small }}>
          Raised less than $5,000,000
          <and>&</and>
          Less than 20 employees
        </Button>
        <Button onClick={() => small = false}
                style={{ opacity: !small ? 1 : .6 }}
                class={{selected: !small }}>
          Raised less than $5,000,000
          <and>&</and>
          Less than 20 employees
        </Button>
      </buttons>
      <buttons>
        <Button onClick={() => wait = true}
                style={{ opacity: wait ? 1 : .6 }}
                class={{selected: wait }}>
          I'm okay waiting three days
        </Button>
        <Button onClick={() => wait = false}
                style={{ opacity: !wait ? 1 : .6 }}
                class={{selected: !wait }}>
          I need it overnight
        </Button>
      </buttons>
      <br />
      <Text>We'll will convert your codebase to Flint for ${(small ? 100 : 500) * (wait ? 1 : 2)}.</Text>
      <Text>Just add us to your Github project and we'll submit a pull request.</Text>
      <Text>The payment will be refunded if we cannot convert your application for some reason</Text>
      <Text>(insert quote about how flint made user twice as effective)</Text>
      <Text>(insert little calculator of "if this saves your x engineers x time, you made up this price in x minutes"</Text>
    </size>
  </Page>

  $buttons = {
    flexFlow: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
  }

  $Button = {
    lineHeight: 1.3,
    width: 400,
    transition: 'all 300ms ease-in',
    hover: { opacity: 1 },
  }

  $selected = {
    opacity: 1,
    transform: { scale: 1.1 },
  }

  $check = {
    flexFlow: 'row'
  }

  $button = {

  }

  $p = { marginLeft: 10 }

  $isReact = {
    marginTop: 17,
    marginLeft: 20,
  }

  $contain = {
    padding: [50, 100],
    fontSize: 20,
    lineHeight: '2.2rem',
    color: '#545454'
  }
}
