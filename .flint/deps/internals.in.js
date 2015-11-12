
  try {
    Flint.internals["main"] = require("./internal/main")
  }
  catch(e) {
    console.log('Error running package!')
    console.error(e)
  };
