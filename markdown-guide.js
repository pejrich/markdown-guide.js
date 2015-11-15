(function(window, document, undefined){
  'use strict';

  // Helper functions
  function hasClass(elem, klass) {
    return (' ' + elem.className + ' ').indexOf(' ' + klass + ' ') > -1;
  }

  function addClass(elem, klass) {
    if (!hasClass(elem, klass))
    elem.className = elem.className + " " + klass
  }

  function removeClass(elem, klass) {
    if (hasClass(elem, klass)) {
      elem.className = elem.className.split(klass).join("").trim();
    }
  }

  // Constants and Vars
  var settings = {
    selector: ".markdown_guide",
    buttonType: 'button',
    buttonText: 'Markdown Guide',
    buttonClass: '',
    triggerFunction: defaultTriggerFunction,
    tableClass: '',
    tableStyle: ';border:1px solid black;margin:0 auto;',
    tdPadding: '10px',
    tdBorder: '1px solid black',
      headings: true,
      italics: true,
      bold: true,
      link: true,
      image: true,
      ul: true,
      ol: false,
      blockquote: true,
      hardrule: true,
      code_spaced: true,
      code_accent: true,
      strikethrough: true,
      superscript: true
  };

  var GUIDE; // Used to cache guide
  var BUTTON_CLASS = "markdown_guide_button";
  var TABLE_DATA = {
    headings: {t: "#H1 Heading <br><br> . . . <br><br> #######H6 Heading", s: "<h1>H1 Heading</h1> . . . <h6>H6 Heading</h6>"},
    italics: {t: "*italics*", s: "<em>italics</em>"},
    bold: {t: "**bold**", s: "<strong>bold</strong>"},
    link: {t: "[Google](http://google.com)", s: "<a href='http://google.com'>Google</a>"},
    image: {t: "![alt-text](http://www.placehold.it/75x75)", s: "<img src='http://www.placehold.it/75x75' alt='alt-text'>"},
    ul: {t: "* item 1<br>* item 2<br>&nbsp; * item 2a <br>* item 3", s: "<ul><li>item 1</li><li>item 2<ul><li>item 2a </li></ul></li><li>item 3</li></ul>"},
    ol: {t: "1. item 1<br>2. item 2<br>3. item 3", s: "<ol><li>item 1</li><li>item 2</li><li>item 3</li></ol>"},
    blockquote: {t: "&gt; quoted text<br>unquoted text", s: "<blockquote>quoted text</blockquote>unquoted text</td>"},
    hardrule: {t: "A<br>* * *<br>B<br>- - - -<br>C<br>", s: "A<br><hr /><br>B<br><hr /><br>C"},
    code_spaced: {t: "Four spaces are treated like code: <br><span style='background-color:gray;margin-left:1px;'>&nbsp;</span><span style='background-color:gray;margin-left:1px;'>&nbsp;</span><span style='background-color:gray;margin-left:1px;'>&nbsp;</span><span style='background-color:gray;margin-left:1px;'>&nbsp;</span>var x = 1;<br>", s: "<pre><code>var x = 1;</code></pre>"},
    code_accent: {t: "```<br>def function <br><span style='padding-left:15px'>true</span><br>end <br>```", s: "<p><code>def function <br>&nbsp; true <br> end</code></p>"},
    strikethrough: {t: "~~strikethrough~~", s: "<strike>strikethrough</strike>"},
    superscript: {t: "super^script", s: "super<sup>script</sup>"}
  }

  // Functions
  function clickElement () {
    var clickItem = document.createElement(settings.buttonType);
    clickItem.className = settings.buttonClass + " " + BUTTON_CLASS;

    // Added Firefox support
    if (typeof clickItem.textContent !== "undefined") {
        clickItem.textContent = settings.buttonText;
    } else {
        clickItem.innerText = settings.buttonText;
    }
    return clickItem;
  }

  function addButtons() {
    [].forEach.call(settings.elems, function(item) {
      item.innerHTML = ""; // Clear incase of recalling method.
      item.appendChild(clickElement());
    });
  }

  function defaultTriggerFunction(e, guide) {
    window.test = e.target
    if (hasClass(e.target, 'active')) {
      removeClass(e.target, 'active');
      e.target.nextElementSibling.remove();
    } else {
      e.target.parentElement.appendChild(guide)
      addClass(e.target, 'active');
    }
  }

  function addListeners() {
    var triggers = document.querySelectorAll("." + BUTTON_CLASS);
    [].forEach.call(triggers,function(e){e.addEventListener('click', function(e) {
      e.preventDefault();
      settings.triggerFunction(e, generateGuide().cloneNode(true));
    }, false)})
  }

  function generateGuide() {
    if (!GUIDE) {
      var table  = document.createElement('table');
      addClass(table, settings.tableClass);
      table.setAttribute('style', settings.tableStyle);

      for (var k in TABLE_DATA){
        if (TABLE_DATA.hasOwnProperty(k)) {
          if (settings[k]) {
            var tr = table.insertRow();
            var td = tr.insertCell();
            td.innerHTML = TABLE_DATA[k].t
            td.style.border = settings.tdBorder;
            td.style.padding = settings.tdPadding;

            var td = tr.insertCell();
            td.innerHTML = TABLE_DATA[k].s
            td.style.border = settings.tdBorder;
            td.style.padding = settings.tdPadding;
          }
        }
      }
      GUIDE = table;
    }
    return GUIDE;
  }

  // Initializer
  window.MarkdownGuide = function (opts) {
    for (var k in opts){
      if (opts.hasOwnProperty(k) && settings.hasOwnProperty(k)) {
        settings[k] = opts[k];
      }
    }

    settings.elems = document.querySelectorAll(settings.selector);

    addButtons();
    addListeners();
  };

  // jQuery support
  if (typeof window.jQuery == "function") {
    $.fn.markdownGuide = function (opts) {
      MarkdownGuide(opts);
    }
  };

})(this, document);
