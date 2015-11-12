Object.defineProperty(exports, '__esModule', { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}var _highlightJs = require('highlight.js');var _highlightJs2 = _interopRequireDefault(_highlightJs);var _chromaJs = require(
'chroma-js');var _chromaJs2 = _interopRequireDefault(_chromaJs);

if (window.location.search == '?demo') 
window.location = 'https://www.youtube.com/watch?t=1&v=VNfkk6lH0gg';

if (window.location.search == '?slack') 
window.location = 'https://flint-slack.herokuapp.com/';

var router = Flint.router;

var routes = {};
routes.home = '/';
routes.examples = '/examples';
routes.docs = '/docs';

var color = _chromaJs2['default'] || function () {};
color.brand = '#eb522d';
color.brand1 = '#E86C3D';
color.brand2 = '#DB415E';
color.green = '#259630';
color.blue = 'rgb(48, 111, 207)';
color.darkred = color(color.brand); //.darken(0.3)
color.bg = '#fff';
color.text = '#444';
color.strip = '#fff';

var font = {};
font.sansSerif = 'Open Sans, Helvetica, sans-serif';
font.monoSpace = 'Hack, Source Code Pro, Inconsolata, monospace';

var device = {};
device.small = '@media (max-width: 850px)';

var style = {};
style.link = { 
  color: color.blue, 
  cursor: 'pointer', 
  textDecoration: 'none', 
  borderBottom: '1px dotted #ddd', 
  padding: 0, 

  ':hover': { color: color.brand } };

style.textGradient = { 
  background: '-webkit-linear-gradient(left,\n    ' + 
  color(color.brand1).darken(0.6) + ',\n    ' + 
  color(color.brand2).darken(0.6) + ')', 
  WebkitBackgroundClip: 'text', 
  WebkitTextFillColor: 'transparent' };


var util = {};Flint.view('Main', function (view, on, $) 


{
  var hidePass = view.get('hidePass', false);

  var passCorrect = view.get('passCorrect', function () {
    view.set('hidePass', hidePass = true);
    localStorage.setItem('authed', true);});


  var correct = view.get('correct', window.location.search == '?yc' || 
  localStorage.getItem('authed') === 'true');

  if (correct) passCorrect();

  view.render(function () {return Flint.iff(!hidePass) && view.el(['Password', 1], { onShow: passCorrect, 'if': !hidePass });});
  view.render(function () {return Flint.routeMatch(routes.home) && view.el(['Home', 1], _extends({ route: routes.home }, Flint.routeParams(routes.home)));});
  view.render(function () {return Flint.routeMatch(routes.examples) && view.el(['Examples', 1], _extends({ route: routes.examples }, Flint.routeParams(routes.examples)));});
  view.render(function () {return Flint.routeMatch(routes.docs) && view.el(['Docs', 1], _extends({ route: routes.docs }, Flint.routeParams(routes.docs)));});$._static["$"] = { 



    fontSize: 16, 
    lineHeight: '1.8rem', 

    overflow: 'hidden', 

    position: 'relative' };$["$"] = function (_index) {return { color: color.text, fontFamily: font.sansSerif, background: color.bg };};});Flint.view('Password', function (view, on, $) 



{
  var password = view.get('password', '');

  var checkPass = function checkPass() {
    if (password.toLowerCase() == 'love') view.props.onShow();};


  on.mount(function () {
    view.refs.input.focus();});


  view.render(function () {return view.el(['password', 1], null, 
    view.el(['input', 1], { 
      ref: 'input', 
      onEnter: checkPass, 'value': 
      password, 'onChange': function (e) {view.set(null, password = e.target.value)} }), 

    view.el(['p', 1], null, 'Curious? ', view.el(['a', 1], { href: 'http://flint-slack.herokuapp.com' }, 'Say hi in Slack')));});


  $._static["password"] = { 
    position: 'fixed', 
    top: 0, right: 0, 
    left: 0, bottom: 0, 
    background: '#eee', 
    zIndex: 1000, 
    justifyContent: 'center', 
    alignItems: 'center' };$._static["input"] = { 



    padding: 20, 
    background: '#fff', 
    border: '1px solid #ddd', 
    fontSize: 22, 

    textAlign: 'center' };$["input"] = function (_index) {return { margin: [0, 'auto'] };};});



// to keep isomorphism for now, should be handled by flint
if (typeof window != 'undefined') {
  util.docOffset = require('document-offset');
  util.scroll = require('scroll');}


util.linkScroll = function (e) {
  var el = document.querySelector(e.currentTarget.getAttribute('href'));
  util.scroll.top(document.body, el.getBoundingClientRect().top - 50);
  e.preventDefault();};exports['default'] = 


{ style: style, font: font, routes: routes, router: router, device: device, color: color, util: util, highlight: _highlightJs2['default'] };module.exports = exports['default'];