view Diagram {
  <section>
    <title>Browser</title>
    <Icon.Browser />
    <p>
      Listens to compiler, <strong>hot reloads</strong> individual files.
      Runtime & compile errors inline. Inspect & <strong>jump to views</strong> in your editor.
    </p>
  </section>

  <section>
    <title>Editor</title>
    <Icon.Editor />
    <p>
      Talks to your compiler for <strong>live updates</strong> as you type.&nbsp;
      <strong>Focus mode</strong> for fast number/color selects.
      Listens for inline errors from compiler.
    </p>
  </section>

  <section>
    <title>Compiler</title>
    <Icon.Console />
    <p>
      Statically extracts JS and CSS into individual files, sends them to browser.&nbsp;
      <strong>Automatic npm installs</strong>, injects into running app.
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
    width: '28%',
    alignItems: 'center',
    padding: [0, 20],
    margin: 'auto',
    maxWidth: 400,

    [device.small]: {
      width: '90%',
      padding: 0,
      marginBottom: 20
    }
  }

  $p = {
    fontSize: 14,
    textAlign: 'center'
  }

  $title = {
    fontFamily: font.title,
    color: '#000'
  }

  $strong = {
    color: color.brand1
  }
}