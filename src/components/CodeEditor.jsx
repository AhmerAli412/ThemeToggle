import React, { useState, useEffect } from 'react';
import CodeMirror from 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';

import 'codemirror/mode/javascript/javascript';
// import 'codemirror/lib/codemirror.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  useEffect(() => {
    const editor = CodeMirror(document.getElementById('editor'), {
      value: code,
      mode: 'javascript',
      lineNumbers: true,
    });
    editor.on('change', (instance, changeObj) => {
      setCode(instance.getValue());
    });
    return () => {
      editor.toTextArea();
    };
  }, [code]);

  return (
    <div>
      <h1>Code Editor</h1>
      <div id="editor" />
    </div>
  );
};

export default CodeEditor;