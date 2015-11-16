view Diagram {
  <Contain>
    <line />

    <section class="side">
      <col>
        <title>Browser</title>
        <Icon.Browser class="icon" />
      </col>
      <p>
        <strong>Smarter reloads</strong> hot swap instantly without losing state.
        Run & compile errors. Jump to editor from any view.
      </p>
    </section>

    <section class="point">
      <title>Compiler</title>
      <Icon.Flint class="icon" />
      <p>
        Inline styles that static extract to CSS.&nbsp;
        <strong>Automatic npm installs</strong>, injected into running app.
      </p>
    </section>

    <section class="side right">
      <col>
        <title>Editor</title>
        <Icon.Editor class="icon" />
      </col>
      <p>
        <strong>Live updates</strong> as you type.&nbsp;
        <strong>Focus</strong> mode: drag your numbers & colors.
        Inline errors from compiler.
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
    textAlign: 'center',

    [device.small]: {
      margin: 'auto',
      width: '90%',
      padding: [0, 20],
      marginBottom: 30
    }
  }

  let sidePull = -100

  $side = {
    flexFlow: 'row-reverse',
    width: '60%',
    margin: [0, sidePull, 0, 0],
    textAlign: 'right'
  }

  $right = {
    flexFlow: 'row',
    margin: [0, 0, 0, sidePull],
    textAlign: 'left'
  }

  $point = {
    margin: [200, 0, 0]
  }

  $col = {
    flexFlow: 'column'
  }

  $p = {
    margin: [20, 0, 0],
    fontSize: 15
  }

  $title = {
    fontFamily: font.title,
    textAlign: 'center',
    color: '#555',
    fontSize: 17,
    margin: [-5, 0, 4, 0]
  }

  $icon = {
    margin: [0, 12]
  }

  $strong = {
    color: color.brand1
  }

  $line = {
    height: 1,
    position: 'absolute',
    top: 90,
    left: '40%',
    right: '40%',
    background: '#eee',
    zIndex: 0,

    [device.small]: {
      display: 'none'
    }
  }
}