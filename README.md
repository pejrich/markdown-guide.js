# markdown-guide.js
Add a Markdown syntax guide to your website via Javascript

## How it works:

Add an empty element to the page where you want the guide button to be. Add any class or ID to the element.
Default: ```.markdown_guide```

```
<div class="markdown_guide"></div>


<div id="markdown_guide"></div>
```

In your JS, initialize the class with options:

```
MarkdownGuide(); \\ Default options shown below

MarkdownGuide({selector: '#markdown_guide', headings: false, buttonText: "Formatting Help"});
```

