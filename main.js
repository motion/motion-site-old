view Main {
  let hidePass = false

  let passCorrect = () => {
    hidePass = true
    localStorage.setItem('authed', true)
  }

  let correct = window.location.search == '?yc'
             || localStorage.getItem('authed') === 'true'

  if (correct) passCorrect()

  <Password onShow={passCorrect} if={!hidePass} />
  <Home route={routes.home} />
  <Examples route={routes.examples} />
  <Docs route={routes.docs} />

  $ = {
    color: color.text,
    fontSize: 16,
    lineHeight: '1.8rem',
    fontFamily: font.sansSerif,
    overflow: 'hidden',
    background: color.bg,
    position: 'relative'
  }
}

view Password {
  let password = ''

  const checkPass = () => {
    if (password.toLowerCase() == 'love') view.props.onShow()
  }

  on('mount', () => {
    view.refs.input.focus()
  })

  <password>
    <input
      ref="input"
      onEnter={checkPass}
      sync={password} />

    <p>Curious? <a href="http://flint-slack.herokuapp.com">Say hi in Slack</a></p>
  </password>

  $password = {
    position: 'fixed',
    top: 0, right: 0,
    left: 0, bottom: 0,
    background: '#eee',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center'
  }

  $input = {
    padding: 20,
    background: '#fff',
    border: '1px solid #ddd',
    fontSize: 22,
    margin: [0, 'auto'],
    textAlign: 'center'
  }
}