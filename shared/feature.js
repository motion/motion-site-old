view Feature {
  prop bg, center, col, odd, slim, dark, reverse, children

  <Contain maxWidth={1000}>{children}</Contain>

  const padheight = slim ? 0 : 75

  $ = {
    padding: [padheight - 30, 20, padheight],
    textAlign: center ? `center` : `left`,
    alignItems: 'center',
    flexFlow: col ? `column` : reverse ? `row-reverse` : `row`,
    borderBottom: dark ? [10, 'solid', '#eee'] : [1, 'solid', '#eee'],
    borderTop: dark ? [10, 'solid', '#eee'] : 'none',
    color: dark ? `#fff` : `auto`,
    background: bg ? bg : dark ? `linear-gradient(130deg, #3f3f95 70%, #333360)` : odd ? `#fcfcfc` : `auto`,
  }
}
