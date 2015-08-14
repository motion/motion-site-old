function flintRun_site(node, opts) {
  var Flint = runFlint(node, opts);

  (function(Flint) {
    /* @flow */                                                                                                                                                                                    var _stores = {}; var _view = { set: (function(){}) }; 'use strict';

var height = _view.height = window.innerHeight - 160;
var primary = _view.primary = '#970C0A';
var secondary = _view.secondary = '#FB7124';

                      Flint.defineView('Link', '1491524884', function _flintDefineView() {
  var _view = this;var _vars = Flint.values[_view.entityId];var inView = true;
  ; /* BEGIN RENDER */_view._render = function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return Flint.createElement("Flint.LinkWrapper", _view, {view: "Link"}, Flint.createElement("a", _view, {yield: true})

    );
  };
  _view.styleFunctions['style'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || { display: 'inline' };
  };

  _view.styleFunctions['stylea'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      display: 'inline',
      color: primary,
      textDecoration: 'underline',
      cursor: 'pointer'
    };
  };return _view;
});

var url = _view.url = 'https://www.youtube-nocookie.com/embed/VNfkk6lH0gg?rel=0&amp;showinfo=0';
var urlDemo = _view.urlDemo = url + '&start=133&autoplay=1';

                      Flint.defineView('Main', '1193200546', function _flintDefineView() {
  var _view = this;var _vars = Flint.values[_view.entityId];var inView = true;
  _view.set('url', _vars.url = url); /* BEGIN RENDER */_view._render = function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return Flint.createElement("Flint.MainWrapper", _view, {view: "Main"}, Flint.createElement("Head", _view, null), 
  Flint.createElement("iframe", _view, {src: _vars.url, frameborder: "0", allowfullscreen: true}), 
  Flint.createElement("desc", _view, null, 
    Flint.createElement("Link", _view, {onClick: function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
          return _view.set('url', _vars.url = urlDemo);
        }}, 
      "Start from 2:13"
    ), " to see the live demonstration."
  ), 
  Flint.createElement("Signup", _view, null)

    );
  };
  _view.styleFunctions['style'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      background: 'white',
      color: '#7E6F6D',
      fontSize: 18,
      lineHeight: '28px',
      textAlign: 'center'
    };
  };

  _view.styleFunctions['styledesc'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      display: 'block',
      fontSize: 12,
      padding: [10, 0, 40]
    };
  };

  _view.styleFunctions['styleiframe'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      border: 'none',
      margin: 'auto',
      width: 672,
      height: 450
    };
  };return _view;
});

                      Flint.defineView('Head', '-726994261', function _flintDefineView() {
  var _view = this;var _vars = Flint.values[_view.entityId];var inView = true;
  ; /* BEGIN RENDER */_view._render = function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return Flint.createElement("Flint.HeadWrapper", _view, {view: "Head"}, Flint.createElement("img", _view, {src: "logo.png"}), 
  Flint.createElement("p", _view, null, 
    "Improving the way you make apps"
  )

    );
  };
  _view.styleFunctions['style'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      position: 'relative',
      flexFlow: 'column'
    };
  };

  _view.styleFunctions['stylep'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      margin: [40, 'auto'],
      fontSize: 22
    };
  };

  _view.styleFunctions['styleimg'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      height: 66,
      margin: [40, 'auto', 0] };
  };return _view;
});

                        Flint.defineView('Signup', '-1419057446', function _flintDefineView() {
  var _view = this;var _vars = Flint.values[_view.entityId];var inView = true;
  ; /* BEGIN RENDER */_view._render = function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return Flint.createElement("Flint.SignupWrapper", _view, {view: "Signup"}, Flint.createElement("desc", _view, null, 
    Flint.createElement("wrap", _view, null, 
      Flint.createElement("p", _view, null, 
        "This is an early preview of Flint."
      ), 
      Flint.createElement("p", _view, null, 
        "We're working on tooling that makes you 5x more effective."
      ), 
      Flint.createElement("p", _view, null, 
        "In the next week we'll invite a group of artists & developers" + ' ' +
        "to work with directly, turning Flint into something truly special."
      ), 
      Flint.createElement("p", _view, null, 
        "We're calling it the Flint 50."
      )
    )
  ), 
  Flint.createElement("h3", _view, null, "Sign up for Flint 50"), 
  Flint.createElement("form", _view, {action: "//flintlang.us11.list-manage.com/subscribe/post?u=d6ee317984756a7f0f5e9378b&id=dcc2cefed5", method: "post", id: "mc-embedded-subscribe-form", name: "mc-embedded-subscribe-form", className: "validate", target: "_blank", novalidate: true}, 
    Flint.createElement("div", _view, {id: "mc_embed_signup_scroll"}, 
      Flint.createElement("div", _view, {className: "mc-field-group"}, 
        Flint.createElement("input", _view, {type: "text", placeholder: "Name", value: "", name: "NAME", className: "", id: "mce-NAME"})
      ), 
      Flint.createElement("div", _view, {className: "mc-field-group"}, 
        Flint.createElement("input", _view, {type: "email", placeholder: "Contact (email or handle)", value: "", name: "EMAIL", className: "required email", id: "mce-EMAIL"})
      ), 
      Flint.createElement("div", _view, {className: "mc-field-group"}, 
        Flint.createElement("label", _view, {for: "mce-ABOUT"}, 
          "Tell us about yourself / how you'd use Flint"
        ), 
        Flint.createElement("textarea", _view, {value: "", name: "ABOUT", className: "", id: "mce-ABOUT"})
      ), 
      Flint.createElement("hide", _view, {id: "mce-responses", className: "clear"}, 
        Flint.createElement("div", _view, {className: "response", id: "mce-error-response", style: "display:none"}), 
        Flint.createElement("div", _view, {className: "response", id: "mce-success-response", style: "display:none"})
      ), 
      Flint.createElement("hide", _view, {style: "position: absolute; left: -5000px;"}, 
        Flint.createElement("input", _view, {type: "text", name: "b_d6ee317984756a7f0f5e9378b_dcc2cefed5", tabindex: "-1", value: ""})
      ), 
      Flint.createElement("center", _view, {className: "clear"}, 
        Flint.createElement("submit-input", _view, {className: "button", type: "submit", value: "Apply", name: "subscribe", id: "mc-embedded-subscribe"})
      )
    )
  )

    );
  };
  _view.styleFunctions['style'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      position: 'relative',
      zIndex: 100,
      padding: [0, 0, 100] };
  };

  _view.styleFunctions['stylewrap'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      margin: 'auto',
      width: 500
    };
  };

  _view.styleFunctions['stylehide'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      display: 'none'
    };
  };

  _view.styleFunctions['styledesc'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      background: '#f2f2f2',
      color: '#333',
      margin: [0, 0, 20],
      padding: [20, 0]
    };
  };

  _view.styleFunctions['styleh3'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      fontSize: 18,
      color: '#444'
    };
  };

  _view.styleFunctions['styleform'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      margin: 'auto',
      textAlign: 'left',
      fontSize: 16
    };
  };

  var input = _view.input = {
    width: '100%',
    minWidth: 400,
    marginBottom: 20 };

  _view.styleFunctions['styleinput'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || input;
  };

  _view.styleFunctions['styletextarea'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || [input, {
      border: '1px solid #ccc',
      height: 150
    }];
  };

  _view.styleFunctions['stylelabel'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      margin: [10, 0]
    };
  };

  _view.styleFunctions['stylesubmit'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      border: '1px solid #ccc',
      color: '#333',
      background: '#fff',
      padding: 10
    };
  };return _view;
});

                       Flint.defineView('Intro', '1212164397', function _flintDefineView() {
  var _view = this;var _vars = Flint.values[_view.entityId];var inView = true;
  ; /* BEGIN RENDER */_view._render = function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return Flint.createElement("Flint.IntroWrapper", _view, {view: "Intro"}, Flint.createElement("line", _view, null, "Flint is your frontend destination"), 
  Flint.createElement("line", _view, null, "It's an amazingly view simple syntax..."), 
  Flint.createElement("img", _view, {className: "right", src: "1.png"}), 
  Flint.createElement("line", _view, {className: "small"}, "It runs on React, but avoids all the complexity"), 
  Flint.createElement("line", _view, null, "It integrates styles with your view for you"), 
  Flint.createElement("line", _view, null, "& handles all build and configuration"), 
  Flint.createElement("img", _view, {className: "right", src: "2.png"}), 
  Flint.createElement("line", _view, {className: "small"}, "(that means you just focus on creativity)"), 
  Flint.createElement("line", _view, null, "It updates immediately with every keystroke"), 
  Flint.createElement("line", _view, null, "Even keeping your app state, perfectly"), 
  Flint.createElement("line", _view, null, "Did we mention powerful error messages?"), 
  Flint.createElement("img", _view, {className: "right", src: "3.png"}), 
  Flint.createElement("line", _view, {className: "small"}, "Static type check helps out with that"), 
  Flint.createElement("line", _view, null, "It comes with powerful tools"), 
  Flint.createElement("line", _view, null, "A state inspector"), 
  Flint.createElement("line", _view, null, "And rewindable timeline with actions"), 
  Flint.createElement("line", _view, null, "Did we mention it's faster than React?"), 
  Flint.createElement("img", _view, {className: "right", src: "4.png"}), 
  Flint.createElement("line", _view, null, "That's because we run at compile-time"), 
  Flint.createElement("line", _view, null, "It's the best frontend experience"), 
  Flint.createElement("line", _view, null, "Letting you make better sites, much faster"), 
  Flint.createElement("line", _view, null, "With really nice code"), 
  Flint.createElement("line", _view, null, "What's that worth to you?")

    );
  };
  _view.styleFunctions['style'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      background: 'linear-gradient(' + primary + ', #8B1624)',
      color: '#E4CBC6',
      fontSize: 30,
      padding: [20],
      marginTop: -100,
      textAlign: 'center',
      lineHeight: '100px'
    };
  };

  _view.styleFunctions['styleimg'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      float: 'right',
      margin: [20, 'auto'],
      width: '75%'
    };
  };

  _view.styleFunctions['styleline.small'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      fontSize: 20,
      margin: [-10, 0]
    };
  };return _view;
});

// old version with split screen editor thing

                             Flint.defineView('Interactive', '890219477', function _flintDefineView() {
  var _view = this;var _vars = Flint.values[_view.entityId];var inView = true;
  ; /* BEGIN RENDER */_view._render = function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return Flint.createElement("Flint.InteractiveWrapper", _view, {view: "Interactive"}, Flint.createElement("Header", _view, null), 
  Flint.createElement("Demo", _view, null), 
  Flint.createElement("About", _view, null), 
  Flint.createElement("Questions", _view, null)
    );
  };return _view;
});

                        Flint.defineView('Header', '608498058', function _flintDefineView() {
  var _view = this;var _vars = Flint.values[_view.entityId];var inView = true;
  ; /* BEGIN RENDER */_view._render = function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return Flint.createElement("Flint.HeaderWrapper", _view, {view: "Header"}, Flint.createElement("header", _view, null, 
    Flint.createElement("h1", _view, null, "Flint"), 
    Flint.createElement("img", _view, {src: "logowhite.png"}), 

    Flint.createElement("Hello", _view, null)
  )

    );
  };
  _view.styleFunctions['styleheader'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      background: 'linear-gradient(to right, #BF272F, #DF6400)',
      color: '#fff',
      padding: 10,
      flexFlow: 'row'
    };
  };

  _view.styleFunctions['styleh1'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      display: 'none'
    };
  };

  _view.styleFunctions['styleimg'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      height: 30,
      margin: [5, 0, 5, 10],
      borderRight: '1px solid rgba(255,255,255,0.2)',
      padding: [0, 20, 0, 0]
    };
  };return _view;
});

                       Flint.defineView('Hello', '1948848585', function _flintDefineView() {
  var _view = this;var _vars = Flint.values[_view.entityId];var inView = true;
  ; /* BEGIN RENDER */_view._render = function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return Flint.createElement("Flint.HelloWrapper", _view, {view: "Hello"}, Flint.createElement("hello", _view, null, 
    "Introducing Flint. Stop dead development."
  )

    );
  };
  _view.styleFunctions['style'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      padding: [0, 20],
      fontWeight: 'normal',
      color: '#fff',
      fontSize: 16,
      margin: 'auto'
    };
  };return _view;
});

                      Flint.defineView('Demo', '682043623', function _flintDefineView() {
  var _view = this;var _vars = Flint.values[_view.entityId];var inView = true;
  ; /* BEGIN RENDER */_view._render = function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return Flint.createElement("Flint.DemoWrapper", _view, {view: "Demo"}, Flint.createElement("show", _view, null, 
    Flint.createElement("Browser", _view, null), 
    Flint.createElement("Editor", _view, null)
  )

    );
  };
  _view.styleFunctions['styleshow'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      height: height
    };
  };return _view;
});

                         Flint.defineView('Browser', '-43568332', function _flintDefineView() {
  var _view = this;var _vars = Flint.values[_view.entityId];var inView = true;
  ; /* BEGIN RENDER */_view._render = function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return Flint.createElement("Flint.BrowserWrapper", _view, {view: "Browser"}, Flint.createElement("main", _view, null, 
    Flint.createElement("strong", _view, null, "This is Flint. Flint is a new way to make apps."), 
    Flint.createElement("p", _view, null, 
      "Flint updates as you type, works with your favorite editor, and" + ' ' +
      "improves development by 100x."
    ), 

    Flint.createElement("form", _view, null, 
      Flint.createElement("input", _view, {placeholder: "Request beta"}), 
      Flint.createElement("button", _view, null, "I'm in")
    )
  )

    );
  };
  _view.styleFunctions['style'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      width: '50%',
      height: '100%',
      padding: 20,
      borderRight: '1px solid #ccc',
      background: 'radial-gradient(circle, #fff, #ccc 90%)'
    };
  };

  _view.styleFunctions['stylemain'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      margin: 'auto',
      textAlign: 'center'
    };
  };

  _view.styleFunctions['styleform'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      margin: 'auto',
      alignItems: 'center'
    };
  };

  _view.styleFunctions['styleinput'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      padding: 6,
      fontSize: 20
    };
  };

  _view.styleFunctions['stylebutton'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      border: '1px solid #DF6400',
      color: '#DF6400',
      borderRadius: 100,
      width: 100,
      background: 'none',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 16,
      margin: [10, 'auto']
    };
  };return _view;
});

                        Flint.defineView('Editor', '-54540179', function _flintDefineView() {
  var _view = this;var _vars = Flint.values[_view.entityId];var inView = true;
  _view.set('text', _vars.text = '');

  var input = _view.input = '\n    -=1SET-=1\n    declare var Main: any; Flint.defineView("Main", "1193200546", (function _flintDefineView() { const _view = this; var _vars = Flint.values[_view.entityId]; var inView = true;\n      |\n    }\n    -=1WRITE-=1\n    declare var Main: any; Flint.defineView("Main", "1193200546", (function _flintDefineView() { const _view = this; var _vars = Flint.values[_view.entityId]; var inView = true;\n      |1strong|2\n    }\n    -=1SET-=1\n    declare var Main: any; Flint.defineView("Main", "1193200546", (function _flintDefineView() { const _view = this; var _vars = Flint.values[_view.entityId]; var inView = true;\n;/* BEGIN RENDER */ _view._render = function() { return <Flint.Wrapper  view=""><strong >|</strong>\n    }\n    -=1WRITE-=1\n    declare var Main: any; Flint.defineView("Main", "1193200546", (function _flintDefineView() { const _view = this; var _vars = Flint.values[_view.entityId]; var inView = true;\n      <strong >|1This is Flint. Flint is a new way to make apps.|2</strong>\n    }\n    -=1SET-=1\n    declare var Main: any; Flint.defineView("Main", "1193200546", (function _flintDefineView() { const _view = this; var _vars = Flint.values[_view.entityId]; var inView = true;\n      <strong >This is Flint. Flint is a new way to make apps.</strong>\n      |\n    }\n</Flint.Wrapper> }\n  ';
  var steps = _view.steps = input.split(/-=1([A-Z]+)-=1/);

  var write = _view.write = function (text) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return new Promise(function (res, rej) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
      var begin = _view.begin = text.indexOf('|1');
      var end = _view.end = text.indexOf('|2');
      var initial = _view.initial = text.replace(/\|1(.*)\|2/g, '|');
      _view.set('text', _vars.text = initial);

      setTimeout(function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
        res();
      }, 1000);
    });
  };

  var present = _view.present = function (i) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    var step = _view.step = steps[i];

    if (typeof step == 'undefined') return;
    console.log('step', step);

    Promise.delay(100).then(function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
      if (step == 'SET') {
        _view.set('text', _vars.text = step);
        present(i + 1);
      }
      if (step == 'WRITE') {
        _view.set('text', _vars.text = write(step).then(function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
          present(i + 1);
        }));
      }
    });
  };

  present(0); /* BEGIN RENDER */_view._render = function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return Flint.createElement("Flint.Wrapper", _view, {view: ""}, Flint.createElement("line", _view, null, 
    _vars.text
  )

    );
  };
  _view.styleFunctions['style'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      width: '50%',
      height: '100%',
      background: '#fff',
      color: '#BF272F',
      fontFamily: 'monospace',
      fontSize: 18,
      padding: 10
    };
  };return _view;
});

                       Flint.defineView('About', '-1711407334', function _flintDefineView() {
  var _view = this;var _vars = Flint.values[_view.entityId];var inView = true;
  ; /* BEGIN RENDER */_view._render = function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return Flint.createElement("Flint.AboutWrapper", _view, {view: "About"}, Flint.createElement("line", _view, null, 
    "Flint brings the concept of the view to modern ES6 JavaScript."
  ), 

  Flint.createElement("line", _view, null, 
    "It lets you write simple code, way less work than learning" + ' ' +
    "yet another library of abstractions."
  ), 

  Flint.createElement("line", _view, null, 
    "Stay out of the terminal. Your browser updates as you type," + ' ' +
    "we handle error messages, tools, and performance."
  )

    );
  };
  _view.styleFunctions['style'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      background: '#FFFBE6',
      color: '#A66826'
    };
  };

  _view.styleFunctions['styleline'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      margin: [30, '10%'],
      fontSize: 22,
      fontWeight: 300,
      textAlign: 'center'
    };
  };return _view;
});

                           Flint.defineView('Questions', '-392113433', function _flintDefineView() {
  var _view = this;var _vars = Flint.values[_view.entityId];var inView = true;
  ; /* BEGIN RENDER */_view._render = function () {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return Flint.createElement("Flint.QuestionsWrapper", _view, {view: "Questions"}, Flint.createElement("question", _view, null, 
    "What about this?"
  ), 
  Flint.createElement("answer", _view, null, 
    "Well check out this."
  )

    );
  };
  _view.styleFunctions['style'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || {
      borderTop: '1px solid #ddd'
    };
  };

  var base = _view.base = {
    margin: [30, '10%'],
    fontSize: 22,
    fontWeight: 300,
    textAlign: 'center'
  };

  _view.styleFunctions['stylequestion'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || [base];
  };

  _view.styleFunctions['styleanswer'] = function (_index) {  var _vars = (typeof _vars != 'undefined') ? _vars : (inView ? Flint.values[_view.entityId] : {}); 
    return false || [base, {
      other: 'thing'
    }];
  };return _view;
});
    Flint.render()
  })(Flint);
}