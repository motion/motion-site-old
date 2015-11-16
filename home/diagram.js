view Diagram {
  <Contain>
    <line />

    <section>
      <title>Browser</title>
      <Icon.Browser />
      <p>
        <strong>Smart hot reloads</strong> individual views.
        Handles runtime & compile errors. Inspect views to see in editor.
      </p>
    </section>

    <section>
      <title>Compiler</title>
      <Icon.Console />
      <p>
        Splits JS and CSS, passes to browser individually.&nbsp;
        <strong>Automatic npm installs</strong>, injected into running app.
      </p>
    </section>

    <section>
      <title>Editor</title>
      <Icon.Editor />
      <p>
        <strong>Live updates</strong> as you type.&nbsp;
        <strong>Focus</strong> for fast number/color changes.
        Shows inline errors from compiler.
      </p>
    </section>
  </Contain>

  $ = {
    flexFlow: 'row',
    padding: [0, 0, 40, 0],
    margin: [0, 0, 40, 0],
    color: '#555',
    alignItems: 'space-around',
    justifyContent: 'center',
    position: 'relative',
    borderBottom: '1px solid #eee',

    [device.small]: {
      width: 'auto',
      flexFlow: 'column',
      alignItems: 'center'
    }
  }

  $section = {
    width: '30%',
    alignItems: 'center',
    padding: [0, 20],
    maxWidth: 400,
    alignSelf: 'flex-start',
    position: 'relative',
    zIndex: 10,

    [device.small]: {
      margin: 'auto',
      width: '90%',
      padding: [0, 20],
      marginBottom: 30
    }
  }

  $p = {
    fontSize: 15,
    textAlign: 'center'
  }

  $title = {
    fontFamily: font.title,
    color: '#000',
    fontSize: 18,
    margin: [-2, 0, 4, 0]
  }

  $strong = {
    color: color.brand1
  }

  $line = {
    height: 1,
    position: 'absolute',
    top: 90,
    left: '20%',
    right: '20%',
    background: '#eee',
    zIndex: 0,

    [device.small]: {
      display: 'none'
    }
  }
}