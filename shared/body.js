import marked from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

view Body {
  console.log(^markdown)

  <body yield dangerouslySetInnerHTML={{ __html: marked(^markdown)}} />
}