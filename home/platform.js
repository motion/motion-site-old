import { style, color, routes, font, device } from '../constants'

view Home.Platform {
  let hoverIndex = false

  let sections = () => ([
    {
      title: 'Editor',
      description: <Text>
        Live updates <Attr alt="Updates your app with each character, avoids writing to file system.">as you type</Attr> let you edit your apps like a living document.
        <Attr alt="While you Focus, Motion avoids file watchers & streams updates at fast as they happen."> Drag numbers and colors</Attr>. Move between code and style with ease.
      </Text>
    },
    {
      title: 'Browser',
      description: <Text>
        <Attr alt="Child and view state is smartly preserved while editing, enabled by compiler.">Smart Hot Reloads</Attr> retain state better.
        <Attr alt="Errors are recovered from automatically, displayed in your browser, and your app won't flicker or break."> Helpful errors</Attr> keep you in flow.
        <Attr alt="Right click on any part of your app and jump to the appropriate view in your editor."> Jump to DOM or style</Attr> from any view for quick editing.
      </Text>
    },
    {
      title: 'Compiler',
      description: <Text>
        Inline styles with <Attr alt="Static style changes don't even reload Javascript for insane performance.">static CSS extraction</Attr>.
        <Attr alt="Motion scans your code as you type, installs any found npm packages & injects them into your app: no state lost."> Automatic npm installs</Attr> without touching your terminal or browser.
      </Text>
    },
  ])

  <Feature odd col dark>
    <Title light>Motion unites your tools in smart ways</Title>
    <Row class="small2">
      <Col centered class="diagram">
        <Diagram hoverIndex={hoverIndex} />
      </Col>
      <Col class="sections">
        <section repeat={sections()}>
          <IntroText light>{_.title}</IntroText>
          {_.description}
        </section>
      </Col>
    </Row>
  </Feature>

  $sub = {
    [device.small]: {
      textAlign: 'center',
      marginBottom: 20
    }
  }

  $small2 = {
    width: '95%',
    margin: [30, 0, -2],

    [device.small]: {
      margin: [20, 0],
      flexFlow: 'column',
    }
  }

  $sections = {
    margin: [0, 60, 0, 0],
    width: '20%',

    [device.small]: {
      width: 'auto',
      margin: 'auto'
    }
  }

  $diagram = {
    margin: [0, -40, 0, 60]
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

    hover: {
      background: 'rgba(0,0,0,0.05)'
    },

    [device.small]: {
      marginTop: 20,
    }
  }

  $IntroText = {
    margin: [0, 0, 0]
  }

  $Diagram = {
    margin: [60, 'auto', 0],

    [device.small]: {
      margin: [0, 'auto'],
      height: 'auto'
    }
  }

  $Title = {
    [device.small]: {
      textAlign: 'center'
    }
  }
}