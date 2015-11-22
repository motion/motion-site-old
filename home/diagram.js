view Attr {
  let hovered = false

  <attr onMouseEnter={() => hovered = true} onMouseLeave={() => hovered = false}>
    <text>{view.props.children}</text>
    <Overlay active={hovered}>
      {view.props.alt}
    </Overlay>
  </attr>

  $ = {
    display: 'inline',
    position: 'relative',
    zIndex: 10000
  }

  $text = [{
    display: 'inline',
    color: color.brand2,
    fontWeight: 600,
    cursor: 'pointer'
  }, hovered && {
    fontWeight: 800,
    textDecoration: 'underline'
  }]
}

view Diagram {
  let hover = false

  function sectionHover(i) {
    return {
      onMouseEnter: () => hover = i,
      onMouseLeave: () => hover = false
    }
  }

  <Contain maxWidth="1300">
    <line class="across" />

    <section {...sectionHover(1)} class="side">
      <col>
        <title>Browser</title>
        <Icon.Browser class="icon" highlight={hover == 1} />
      </col>
      <p>
        <Attr alt="When combined with Live updates, smart reloads allow a faster, simpler way to program.">Smart reloads</Attr> hot swap instantly and keep state.
        Inline <Attr alt="Errors are recovered from automatically, displayed in your browser, and your app won't flicker or break.">safe</Attr> errors. <Attr alt="Right click on any part of your app and jump to the appropriate view in your editor.">Inspect & jump</Attr> to editor.
      </p>
    </section>

    <line class="slantl" />

    <section {...sectionHover(2)} class="point">
      <col class="reverse">
        <title class="pointTitle">Compiler</title>
        <Icon.Flint class="icon" highlight={hover == 2} />
      </col>
      <p>
        <Attr alt="Parses your static styles. Injects them without reloading JS for super fast reloads.">Statically extracts CSS</Attr> and automatically <Attr alt="Flint scans your code as you type, installs any found npm packages & injects them into your app: no refresh needed.">installs npm packages</Attr>.
      </p>
    </section>

    <line class="slantr" />

    <section {...sectionHover(3)} class="side right">
      <col>
        <title>Editor</title>
        <Icon.Editor class="icon" highlight={hover == 3} />
      </col>
      <p>
        <Attr alt="Updates your app with each character, avoids writing to file system.">Live coding</Attr> with Atom.&nbsp;
        <Attr alt="While you Focus, Flint avoids file watchers & streams updates at fast as they happen.">Focus</Attr> mode lets you drag your numbers and colors. Instant inline errors.
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
    zIndex: 1000,

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
      width: '100%',
      padding: [0, 20],
      marginBottom: 30,
      flexFlow: 'row',
      textAlign: 'left'
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
    textAlign: 'left',
  }

  $point = {
    maxWidth: 320,
    margin: [170, -30, 0]
  }

  $pointTitle = {
    margin: [10, 0, -10],

    [device.small]: {
      margin: [10, 0]
    }
  }

  $col = {
    flexFlow: 'column',
    width: '100%',

    [device.small]: {
      width: 350,
      marginLeft: -50
    }
  }

  $reverse = {
    flexFlow: 'column-reverse',

    [device.small]: {
      flexFlow: 'column',
      marginLeft: -50, // bug in flint! this should come from $col
    }
  }

  $p = {
    margin: [20, 0, 0],
    fontSize: 15,
    lineHeight: 1.6,
    color: '#616161'
  }

  $title = {
    fontFamily: font.title,
    textAlign: 'center',
    color: '#333',
    fontSize: 17,
    margin: [-5, 0, 0, 0]
  }

  $icon = {
    margin: [0, 'auto', 0]
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