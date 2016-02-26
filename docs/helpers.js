export const DocsHelpers = () => $(
  <doc>
    <Title>View Helpers</Title>

    <IntroText>Motion provides helpers for common actions needed in views, many of which map directly to React.</IntroText>

    <Text>When inside a view, you can access <code>view</code> to do a variety of things.</Text>

    <SubTitle>view.refs</SubTitle>

    <Text>Access a DOM node in your view.</Text>

    <Code source={`
      export const Button = () => $(
        on.mount(() => {
          view.refs.button.focus()
        })

        <button ref="button">Hello</button>
      }
    `} />

    <SubTitle>view.element(selector : string)</SubTitle>

    <Text>Find DOM nodes in your view, uses querySelectorAll scoped to current view.</Text>

    <Code source={`
      export const Button = () => $(
        on.mount(() => {
          let button = view.element('button')[0]
        })

        <button ref="button">Hello</button>
      }
    `} />

    <SubTitle>view.pause()</SubTitle>

    <Text>Prevent re-rendering. Useful for optimization and batching visual changes.</Text>

    <SubTitle>view.resume()</SubTitle>

    <Text>Resume from paused re-rendering.</Text>

    <SubTitle>view.update()</SubTitle>

    <Text>Forces view to re-render.</Text>

    <Text>
      Note that this isn't typically needed! Motion optimizes your app in production by batching changes, which essentially will do this for you.
    </Text>

    <SubTitle>view.props : object</SubTitle>

    <Text>Access the entire props object with <code>view.props</code>.</Text>

    <SubTitle>view.state : object</SubTitle>

    <Text>Access all your state variables, for use in debugging or decorating views.</Text>

    <SubTitle>view.name : string</SubTitle>

    <Text>Access the name of the view.</Text>

    <SubTitle>view.el(name : string) : element</SubTitle>

    <Text>Programatically render a view. Pass in a view name to <code>view.el()</code> and it will render.</Text>

    <Code source={`
      export const Modal = () => $(
        <modal>
          {view.el(view.props.subViewName || 'ModalContent')}
        </modal>
      }
    `} />

    <SubTitle>view.render(result : function)</SubTitle>

    <Text>Lets you loop over children to inspect them, clone them, etc.</Text>

    <Code source={`
      export const Items = () => $(
        view.render(() =>
          view.clone(view.props.children, { extraProp: true })
        )
      }
    `} />

    <SubTitle>view.mounted : boolean</SubTitle>

    <Text>Boolean, true if your view is mounted.</Text>

    <SubTitle>view.getName(child : &lt;element | view&gt;)</SubTitle>

    <Text>Returns name of view or name of element. See next example.</Text>

    <SubTitle>view.mapElements(children : elements, callback : function)</SubTitle>

    <Code source={`
      export const Items = () => $(
        <items>
          {view.mapElements(view.props.children, child => {
            if (view.getName(child) == 'Button')
              return view.clone(child, { label: 'MyNewLabel' })
            else
              return child
          })
        </items>
      }
    `} />

    <Text>Lets you loop over children to inspect them, clone them, etc.</Text>

    <SubTitle>view.shouldUpdate(fn)</SubTitle>

    <Text>
      Use shouldUpdate to optimize your views. Returning false from your function will prevent a view from re-rendering.
      The function passed to shouldUpdate received one argument, which is the upcoming props object. You can use this object to compare new props and old props to determine the update.
    </Text>

    <Code source={`
      export const Child = () => $(
        view.shouldUpdate((props, nextProps) => {
          return props.active != nextProps.active
        })
      }
    `} />

    <Text>
      As a side note, there is a second, imperative pattern for handling view updates. Calling <code>view.pause()</code> at the top of your view will freeze it until you next call <code>view.update()</code>. In some cases, this may be a lot simpler to use. Here is one example:
    </Text>

    <Code source={`
      export const ComplexComponent = () => $(
        view.pause()

        let title, date, body, name

        on.props(() => {
          title = view.props.title || ''
          date = view.props.date || Date.now()
          view.update()
        })

        <button ref="button">Hello</button>
      }
    `} />

    <SubTitle>view.renderToRoot()</SubTitle>

    <Text>Renders the element to the root of the document, helpful for modals and popovers. See <Link href="https://github.com/tajo/react-portal">portals</Link></Text>

    <SubTitle>view.inlineStyles()</SubTitle>

    <Text>Forces the view to render it's styles fully inline. Useful for root-rendered components or debugging.</Text>

    <SubTitle>view.childContext(context : object)</SubTitle>

    <Text><em>Alpha</em> This should work, but it's very much for testing at the moment. You can provide context to children like so:</Text>

    <Code source={`
      export const Main = () => $(
        view.childContext({
          componentStyle: {
            primaryColor: '#FFC107'
          }
        })

        <Button>Click me</Button>
      }
    `} />

    <Next to='/docs/elements'>Elements</Next>
  </doc>
)
