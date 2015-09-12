view FAQ {
  <Contain pad strip>
    <Title>FAQ</Title>

    <question>
      Beyond saving me some keystrokes, why views?
    </question>
    <answer>
      <p>
        The view syntax is more than just a macro. Without heavy
        architecting, views in React today are broken for two reasons.
      </p>
      <p>
        First, state is barely handled. Local state and global
        state must be linked together using two dramatically different interfaces (whether Flux, Cursors, or just objects).
        With Flint, you can have a view or a store, but, either way,
        your state gets backed into a global, immutable store behind the scenes.
        What does that mean?
        Faster performance, consistent syntax (it's all just variables!),
        and huge free upsides like global state serialization,
        timeline rewinding, and advanced tools for viewing state anywhere.
      </p>
      <p>
        The second place Flint improves on views is by handling styles.
        Beyond the ease of syntax, there is one huge upside in having a
        consistent view style: sharing.
      </p>
      <p>
        Second, styles aren't handled at all. Which means you have no way
        to share components easily. Flint handles styling with Radium behind
        the scenes. This means
      </p>
    </answer>

    <question>
      What is this? A view layer? A framework? A language?
    </question>
    <answer>
      <p>
        It's a ground up rethinking of development today, starting
        from the view. Call it a platform, environment, system, stack.
        The name isn't important, the net result is: incredibly fast,
        config-free, frustration-free develpoment.
      </p>
      <p>
        No individual piece is critical to Flint, merely the guiding
        principle and execution. In the future, we'd love the community
        to build out swappable pieces (don't like the syntax? fine!).
        But the important part is that Flint integrates into everything
        you do, enabling an easy, consistent, fun environment.
      </p>
    </answer>

    <question>
      Can I use it in my existing stack? Or with my build tool?
    </question>
    <answer>
      <p>
        Not at the moment. A big part of Flint's upside is it's speed,
        which comes from it's combination of the language design and

      </p>
    </answer>

    <question>
      Why no import/export? Aren't globals dangerous?
    </question>
    <answer>
      <p>
        Global *mutable* state is absolutely dangerous. Views are
        not mutable.
      </p>
      <p>
        Further, frontend development is drastically improved with
        as little friction as possible. Without having to import/export
        all over the place increases your speed drastically.
      </p>
    </answer>
  </Contain>

  $ = {
    margin: [-20, 0], //offset for p space
    padding: [0, 20, 50],
    lineHeight: '1.8rem'
  }

  $p = {
    margin: [10, 0]
  }

  $intro = {
    fontSize: 16,
    padding: 20,
    border: '1px solid #ddd'
  }

  $question = {
    fontWeight: 'bold',
    display: 'block'
  }

  $answer = {
    margin: [0, 0, 30]
  }
}
