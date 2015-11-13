# markdown-guide.js
Add a Markdown syntax guide to your website via Javascript

## How it works:

Add an empty element to the page where you want the guide button to be. Add any class or ID to the element.
Default: ```.markdown_guide```

```
<div class="markdown_guide"></div>


<div id="md_guide"></div>
```

In your JS, initialize the class with options:

```
MarkdownGuide(); \\ Default options shown below

MarkdownGuide({selector: '#md_guide',
                headings: false,
                buttonText: "Formatting Help"});
```

Can also be called as a jQuery function:

```
$('.markdown_guide').markdownGuide({buttonText: "Here"})
```

## Options

| Name        | Default           | Description  |
| ------------- |:-------------:| -----:|
| ```selector``` | .markdown_guide | Class or ID |
| ```buttonType``` | button | Type of element added to DOM as the guide trigger. |
| ```buttonText``` | Markdown Guide | Text on button/trigger |
| ```buttonClass``` | none | String to add classes or IDs to trigger element |
| ```triggerFunction``` | ```defaultTriggerFunction``` see source for detauls | define your own function when the trigger is clicked ```function(e, guide)``` Event (```e```) and the Guide (```guide```) are passed as arguments. The guide is a table. JS class is HTMLElement. |
| ```tableStyle``` | border:1px solid black;margin:0 auto; | table inline style |
| ```tdPadding``` | 10px | padding around cells |
| ```tdBorder``` | 1px solid black | border of cells |
|```headings``` | true | show/hide row |
|```italics``` | true | show/hide row |
|```bold``` | true | show/hide row |
|```link``` | true | show/hide row |
|```image``` | true | show/hide row |
|```ul``` | true | show/hide row |
|```ol``` | false | show/hide row |
|```blockquote``` | true | show/hide row |
|```hardrule``` | true | show/hide row |
|```code_spaced``` | true | show/hide row |
|```code_accent``` | true | show/hide row |
|```strikethrough``` | true | show/hide row |
|```superscript``` | true | show/hide row |

### License

[MIT License](http://www.opensource.org/licenses/mit-license.php)