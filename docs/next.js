view Next {
  let over = true
  <next onClick={() => Flint.router.go(^to)}
        onMouseEnter={() => over = true}
        onMouseLeave={() => over = false}
        class={{over}}
   >
    {^children}
    <arrow>❯</arrow>
  </next>
  
  $next = {
    fontSize: 20,
    flexFlow: 'row',
    width: 160,
    padding: 10,
    cursor: 'pointer',
    transition: '300ms all ease-in',
    border: over ? '1px solid #2EA1F9' : '1px solid white',
    color: '#2EA1F9',
    textAlign:'right', 
  }
  
  $arrow = { 
    transition: '300ms all ease-in',
    marginLeft: over ? 12 : 8 
  }
}
