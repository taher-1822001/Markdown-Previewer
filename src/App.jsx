import { useState } from 'react'

import './App.css'
import ReactMarkdown from "react-markdown"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';




const defaultMarkdown = `# Welcome to my React Markdown Previewer!
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

There's also [links](https://www.freecodecamp.org), and
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


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
class  App extends React.Component {
  
  
  constructor() {
    super();
    this.state = {
      
      markdownText: defaultMarkdown,
      editor_visibility: true,
      preview_visibility: true,
      img_source: "maximize.png",
      editor_width: "col-lg-6",
      preview_width: "col-lg-6",
      info_visibility: false
      
    };
  }
  updateValue(e)
  {
    this.setState({markdownText: e.target.value})
  }
  editorViewControl(e)
  {
    if(e == true )
    {
      this.setState({ img_source:"minimize.png", preview_visibility: false, editor_width:"col-lg-12"})
    }
    if(e ==false)
    {
      this.setState({img_source:"maximize.png", preview_visibility: true, editor_width:"col-lg-6"})
    }
  }

  previewViewControl(e)
  {
    if(e == true )
    {
      this.setState({ img_source:"minimize.png", editor_visibility: false, preview_width:"col-lg-12"})
    }
    if(e ==false)
    {
      this.setState({img_source:"maximize.png", editor_visibility: true, preview_width:"col-lg-6"})
    }
  }
  handleInfo(e)
  {
    if(e==false)
    {
      console.log("info visibility", this.state.info_visibility)
      this.setState({info_visibility:true, editor_visibility:false, preview_visibility:false})
    }
    if(e==true)
    {
      console.log("info visibility", this.state.info_visibility)
      this.setState({info_visibility:false, editor_visibility:true, preview_visibility:true})
    }
  }
  render(){
    
    return(<div className="container-fluid">
      <div className="row">
        <div className="col-10"><h1 className='title' style={{fontFamily:"Consolas"}}>MARKDOWN PREVIEWER</h1></div>
        <div className="col-2 align-right"><button className='btn btn-info' onClick={(e) => this.handleInfo(this.state.info_visibility)}>info</button></div>
      </div>
    <div className="row">
      {this.state.editor_visibility == true &&
      <div className={this.state.editor_width}>
        <div className="heading col-lg-12">
          <div className="row">
            <div className="col-6 windowTitle">Editor</div>
            <div className="col-6 align-right"><img src={this.state.img_source} alt="maximize image" id="icon" onClick={(e) => this.editorViewControl(this.state.preview_visibility)}/></div>
          </div>
        </div>
        <textarea name="editor" id="editor" contentEditable={true} value={this.state.markdownText} onChange={(e) => this.updateValue(e)}>
          {defaultMarkdown}
        </textarea>
      </div>
  }
      {this.state.preview_visibility == true &&
      <div className={this.state.preview_width}>
        <div className="heading col-lg-12">
          <div className="row">
            <div className="col-6 windowTitle">Preview</div>
            <div className="col-6 align-right"><img src={this.state.img_source} alt="maximize image" id="icon" onClick={(e) => this.previewViewControl(this.state.editor_visibility)}/></div>
          </div>
        </div>
        <div className="col-lg-12 preview">
          <ReactMarkdown>{this.state.markdownText}</ReactMarkdown>
        </div>
      </div>
  }
    </div>
   {this.state.info_visibility ==true &&
      <div className="container-fluid info-container">
    <div className="heading">
    <div className="windowTitle">Info</div>
   </div>
   <div className="main-content border">
    <h5>This application was developed to markdown the text written in editor into HTML equivalent</h5>
    <h6>in order to convert the text into HTML, you need to use the following terminologies</h6>
    <ul>
      <li><code>#</code> is used for creating heading tags, the number of hashes it uses, the less the size of the text it will have, at most you can use 6 #'s</li>
      <li>If you write text in between <code>``` ```</code> (3 backticks) it will render it as a code </li>
      <li>In order to create an bold text, you can enter the text in between <code>** **</code> (2 asterisks)</li>
      <li>In order to create an italc text, you can enter the text in between <code>_ _</code> (underscores)</li>
      <li>In order to create an striked out text you can enter the text in between <code>~~ ~~</code> (2 tildes)</li>
      <li>You can also use links by placing the link name in <code>[]</code> (square braces) and link in <code>()</code> (normal braces)</li>
      <li>You can create unordered lists by using <code>-</code> (hyphen)</li>
    </ul>
   </div>
      </div>
   }
  </div>
  
  )
  } 
}


export default App
