import { style, color, routes, font, device } from '../constants'

view Home.Platform {
  let hoverIndex = false

  <Feature odd col dark stars pad>
    <Title light>A connected environment</Title>
    <IntroText light center>
      Motion is bringing unity to React tooling
    </IntroText>
    <Row class="content">
      <Col class="diagram">
        <wrap>
          <Diagram hoverIndex={hoverIndex} />

          <Attr style={{ top: 0, left: -200 }} alt="Updates your app with each character, avoids writing to file system.">Live updates as you type</Attr>
          <Attr style={{ top: 100, left: -200 }} alt="Child and view state is smartly preserved while editing, enabled by compiler.">Smart Hot Reloads</Attr>
          <Attr style={{ top: 200, left: -200 }} alt="While you Focus, Motion avoids file watchers & streams updates at fast as they happen."> Drag numbers and colors</Attr>
          <Attr style={{ top: 0, right: -200 }} alt="Errors are recovered from, displayed in your browser, and avoid breaking your app."> Helpful errors</Attr>
          <Attr style={{ top: 100, right: -200 }} alt="Right click on any part of your app and jump to the appropriate view in your editor."> Jump to DOM or style</Attr>
          <Attr style={{ top: 200, right: -200 }} alt="Static changes don't even reload Javascript for insane hot reload performance.">Static CSS extraction</Attr>
          <Attr style={{ top: 300, left: '50%', width: 400, textAlign: 'center', marginLeft: -200 }} alt="Motion scans your code as you type, installs any found npm packages & injects them into your app: no state lost."> Automatic npm installs</Attr>
        </wrap>
      </Col>
    </Row>
    <Watch onClick={Motion.router.link('/docs/intro')}>
      Read more
    </Watch>
  </Feature>

  $wrap = {
    position: 'relative',
    margin: 'auto',
  }

  $Attr = {
    position: 'absolute',

    [device.small]: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      textAlign: "center",
    }
  }

  $content = {
    margin: [60, 0],
    padding: [0, 80],

    [device.small]: {
      margin: [20, 0],
      flexFlow: 'column',
    }
  }

  $subtitle = {
    fontSize: 16
  }

  $sections = {
    margin: [0, 0, 0, 0],
    width: '30%',

    [device.small]: {
      width: 'auto',
      margin: 'auto'
    }
  }

  $diagram = {
    margin: 'auto',
    // padding: [0, 200]
  }

  $Text = {
    fontSize: 15,
    lineHeight: 1.5,
    fontWeight: 300
  }

  $section = {
    padding: [5, 15],
    cursor: 'pointer',
    borderRadius: 3,
    width: '100%',

    hover: {
      background: 'rgba(0,0,0,0.05)'
    },

    [device.small]: {
      marginTop: 20,
    }
  }

  $IntroText = {
    margin: [0, 0, 0],
  }

  $Diagram = {
    margin: [20, 'auto', 20],
  }

  $Title = {
    [device.small]: {
      textAlign: 'center'
    }
  }
}