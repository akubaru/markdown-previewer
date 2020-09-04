import React from "react";
import Badge from "react-bootstrap/Badge";
import "./App.css";

let marked = require("marked");

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: placehorder
        }
    }
    updateMarkdown(markdown) {
        this.setState({markdown});
    }
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col text-center">
                            <h1>
                                <Badge className="text-align-center" variant="light">Markdown Previewer</Badge>
                            </h1>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="editorWrap">
                                <div className="toolbar">    
                                    {"Editor"}
                                </div>
                                <textarea type="text" id="editor" value={this.state.markdown} onChange={(e) => this.updateMarkdown(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="converter"></div>
                        <div className="col-md-6">
                            <div className="previewWrap">
                                <div className="toolbar">     
                                    {"Previewer"}
                                </div>
                                <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown, {renderer: renderer })}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const placehorder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.google.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`