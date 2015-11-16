view Diagram {
  <section>
    <title>Browser</title>
    <Icon.Browser />
    <p>
      <strong>Smart hot reloads</strong> individual files.
      Handles runtime & compile errors. Inspect views to see in editor.
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

  <section>
    <title>Compiler</title>
    <Icon.Console />
    <p>
      Splits JS and CSS, passes files to browser individually.&nbsp;
      <strong>Automatic npm installs</strong>, injected into running app.
    </p>
  </section>

  $ = {
    flexFlow: 'row',
    margin: 'auto',
    maxWidth: 1000,
    padding: [0, 0, 40, 0],
    color: '#555',
    alignItems: 'space-around',
    justifyContent: 'center',

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
}