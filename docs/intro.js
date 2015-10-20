const contents = `
Flint is focused on making building modern websites easier, faster, and more fun than ever before.

Everything we are doing is aimed at improving frontend development. Flint is:

- full-featured CLI
- build system
- simple view syntax
- smart, sophisticated styling
- ulta hot reloads
- sane defaults and polyfills
- smart errors
- built in tooling
- and tons of time spent polishing it, so you don't have to

It's built on React with modern ES6 Javascript. It uses Babel with some custom macros to enable the **view** syntax. It's simple views avoid complex import AST tracking that greatly improves hot reload times.

Flint's goal is to let you focus on making things creatively.

From start to finish you can avoid all sorts of time wasted on non-creative effort. It starts with a simple CLI to generate, run and build your apps. No maintaining a complex build system, and really great live reloads are free.

It installs npm packages for you as you type, shows you nice errors messages, and builds to production. No more scaffolding repos or copying over webpack configs.

Flint is designed from the start to support "realtime editing". When enabled, your app will live-update with each character you type.

## Principles

### Simplicity
Above all else, Flint has rethought vast areas of complexity that are present in today's workflows. Simplicity isn't just automating things, it requires intentional design from the start.

### No configuration

Avoid all the time you spend hacking on build systems, a variety of view system modules, scaffolding new projects, and generally doing anything besides creative development. We've aimed to remove as much dead time as possible, letting you go from idea to live as quickly as possible.

### Creativity

Creativity only comes when your tools fade into the background. Painters don't have to reload their canvas after every stroke.  They don't have to design their own custom easel.

Throughout the process of building there are countless moments where ease of experimentation unlocks entirely new paths. You stumble on solutions only because you have fast and lightweight tools. Closeness to your canvas brings greater ability to create.
`

view Docs.Intro {
  <Title>Flint</Title>
  <Body markdown={contents} />
}