view Diagram {
  <Contain maxWidth="1300">
    <line class="across" />

    <section class="side">
      <col>
        <title>Browser</title>
        <Icon.Browser class="icon" />
      </col>
      <p>
        <strong>Smart reloads</strong> hot swap instantly and keep state.
        Inline <strong>safe</strong> errors. <strong>Inspect & jump</strong> to editor.
      </p>
    </section>

    <line class="slantl" />

    <section class="point">
      <Icon.Flint class="icon" />
      <title class="below">Compiler</title>
      <p>
        Fast build system, statically extracts CSS for insane hot reloads.&nbsp;
        <strong>Automatic npm installs</strong>, injected into running app.
      </p>
    </section>

    <line class="slantr" />

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
    color: '#555',
    alignItems: 'space-around',
    justifyContent: 'center',
    position: 'relative',

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
    padding: [0],
    margin: [0, sidePull, 0, 0],
    textAlign: 'right'
  }

  $right = {
    flexFlow: 'row',
    margin: [0, 0, 0, sidePull],
    textAlign: 'left'
  }

  $point = {
    margin: [170, -50, 0]
  }

  $col = {
    flexFlow: 'column'
  }

  $p = {
    margin: [20, 0, 0],
    fontSize: 15,
    lineHeight: 1.7,
    color: '#616161'
  }

  $title = {
    fontFamily: font.title,
    textAlign: 'center',
    color: '#333',
    fontSize: 17,
    margin: [-5, 0, 0, 0]
  }

  $below = {
    margin: [10, 0, -15],
  }

  $icon = {
    margin: [0, 12]
  }

  $strong = {
    color: color.brand1
  }

  $line = {
    height: 1,
    width: 200,
    position: 'absolute',
    background: '#eee',
    zIndex: 0,

    [device.small]: {
      display: 'none'
    }
  }

  $across = {
    top: 90,
    left: '40%',
  }

  $slantl = {
    top: '40%',
    left: '50%',
    margin: [0, 0, 0, -130],
    width: 140,
    transform: {
      rotate: `48deg`
    }
  }

  $slantr = {
    top: '40%',
    right: '50%',
    margin: [0, -130, 0, 0],
    width: 140,
    transform: {
      rotate: `-48deg`
    }
  }
}