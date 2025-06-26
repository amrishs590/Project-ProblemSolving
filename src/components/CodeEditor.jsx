import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import "./CodeEditor.css";

const CodeEditor = ({ expectedOutput = "" }) => {
  const [code, setCode] = useState(`# Write your Python code here\nprint("Hello, World!")`);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    setIsRunning(true);
    setOutput("Running...");

    try {
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language: "python3",
          version: "3.10.0",
          files: [{ content: code }],
          stdin: input
        })
      });

      const result = await response.json();
      setOutput(result.run.output);
    } catch (error) {
      setOutput("Error running code: " + error.message);
    }

    setIsRunning(false);
  };

  return (
    <div className="code-editor-wrapper">
      <h3>Try it Yourself</h3>

      <Editor
        height="300px"
        language="python"
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
      />

      <textarea
        placeholder="Custom Input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input-box"
      />

      <div style={{ marginTop: "10px" }}>
        <button className="run-button" onClick={handleRun} disabled={isRunning}>
          {isRunning ? "Running..." : "Run Code"}
        </button>
      </div>

      <div className="output-section">
        <h4>Your Output:</h4>
        <pre>{output}</pre>

        {expectedOutput && (
          <>
            <h4>Expected Output:</h4>
            <pre>{expectedOutput}</pre>
          </>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
