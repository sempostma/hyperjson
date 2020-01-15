import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hojui from './lib/components/Hojui'

// import './lib/components/optins/OptinJsonSchema'

const descriptor = {
  type: "object",
  items: [
    {
      name: "is Man",
      key: "isMan",
      child: {
        type: "boolean"
      }
    },
    {
      name: "is Child",
      key: "isChild",
      child: {
        type: "boolean"
      }
    },
    {
      name: "Tree",
      key: "tree",
      child: {
        type: "dictionary",
        items: {
          type: "string"
        }
      }
    },
    {
      name: "List",
      key: "list",
      child: {
        type: "list",
        items: {
          type: "string"
        }
      }
    },
    // {
    //   name: "React json schema form",
    //   key: "treeComplex",
    //   child: {
    //     type: "react-jsonschema-form",
    //     jsonSchema: {
    //       title: "Todo",
    //       type: "object",
    //       required: ["title"],
    //       properties: {
    //         title: {type: "string", title: "Title", default: "A new task"},
    //         done: {type: "boolean", title: "Done?", default: false}
    //       }
    //     }
    //   }
    // }
  ]
}

function App() {

  const [value, setValue] = useState({ isMan: false, isChild: true, tree: { key: 'value' }, list: [] })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Hojui value={value} setValue={setValue} descriptor={descriptor} />
      </header>
    </div>
  );
}

export default App;
