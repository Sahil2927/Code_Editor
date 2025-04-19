// import React, { useState } from 'react';
// import Editor from '@monaco-editor/react';
// import axios from 'axios';

// export default function App() {
//   const [code, setCode] = useState('// write your code here');
//   const [language, setLanguage] = useState('python');
//   const [output, setOutput] = useState('Output will appear here');

//   const languageMap = {
//     python: 71,
//     cpp: 54,
//     javascript: 63,
//   };

//   const handleRun = async () => {
//     try {
//       const response = await axios.post(
//         'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true',
//         {
//           source_code: code,
//           language_id: languageMap[language],
//           stdin: '',
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
//             'x-rapidapi-key': '006a86b424mshc0d8b75abe423aap174226jsnb240289d9114',
//           },
//         }
//       );
//       console.log(response);
//       const result = response.data;
//       setOutput(result.stdout || result.stderr || result.compile_output || 'No output');
//     } catch (error) {
//       console.error(error);
//       setOutput('Error: ' + (error.response?.data?.message || error.message));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-4">LLM Code Editor</h1>

//       <select
//         className="mb-4 p-2 rounded border"
//         value={language}
//         onChange={(e) => setLanguage(e.target.value)}
//       >
//         <option value="python">Python</option>
//         <option value="cpp">C++</option>
//         <option value="javascript">JavaScript</option>
//       </select>

//       <Editor
//         height="40vh"
//         language={language}
//         value={code}
//         onChange={(value) => setCode(value || '')}
//         theme="vs-dark"
//       />

//       <button
//         className="mt-4 p-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600"
//         onClick={handleRun}
//       >
//         Run
//       </button>

//       <div className="mt-4 p-4 bg-white rounded shadow">
//         <pre>{output}</pre>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import axios from 'axios';

// export default function App() {
//   const [code, setCode] = useState('// write your code here');
//   const [language, setLanguage] = useState('python');
//   const [output, setOutput] = useState('Output will appear here');

//   const languageMap = {
//     python: 71,
//     cpp: 54,
//     javascript: 63,
//   };

//   const handleRun = async () => {
//     try {
//           const response = await axios.post(
//         'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true',
//         {
//           source_code: code,
//           language_id: languageMap[language],
//           stdin: '',
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
//             'x-rapidapi-key': '006a86b424mshc0d8b75abe423aap174226jsnb240289d9114',
//           },
//         }
//       );
//       console.log(response);
//       const result = response.data;
//       setOutput(result.stdout || result.stderr || result.compile_output || 'No output');
//     } catch (error) {
//       console.error(error);
//       setOutput('Error: ' + (error.response?.data?.message || error.message));
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-4">LLM Code Editor (Debug Version)</h1>

//       <select
//         className="mb-4 p-2 rounded border"
//         value={language}
//         onChange={(e) => setLanguage(e.target.value)}
//       >
//         <option value="python">Python</option>
//         <option value="cpp">C++</option>
//         <option value="javascript">JavaScript</option>
//       </select>

//       <textarea
//         rows="10"
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         className="w-full p-2 border rounded mb-4"
//       />

//       <button
//         className="mt-4 p-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600"
//         onClick={handleRun}
//       >
//         Run
//       </button>

//       <div className="mt-4 p-4 bg-white rounded shadow">
//         <pre>{output}</pre>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Make sure to import the CSS file

export default function App() {
  const [code, setCode] = useState('// write your code here');
  const [language, setLanguage] = useState('python');
  const [output, setOutput] = useState('Output will appear here');

  const languageMap = {
    python: 71,
    cpp: 54,
    javascript: 63,
  };

  const handleRun = async () => {
    try {
      const response = await axios.post(
        'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true',
        {
          source_code: code,
          language_id: languageMap[language],
          stdin: '',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'x-rapidapi-key': '006a86b424mshc0d8b75abe423aap174226jsnb240289d9114',
          },
        }
      );
      const result = response.data;
      setOutput(result.stdout || result.stderr || result.compile_output || 'No output');
    } catch (error) {
      console.error(error);
      setOutput('Error: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-header">LLM Code Editor (Debug Version)</h1>

      <select
        className="language-select"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="python">Python</option>
        <option value="cpp">C++</option>
        <option value="javascript">JavaScript</option>
      </select>

      <textarea
        className="code-input"
        rows="10"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button className="run-button" onClick={handleRun}>
        Run
      </button>

      <div className="output-panel">
        <pre>{output}</pre>
      </div>
    </div>
  );
}
