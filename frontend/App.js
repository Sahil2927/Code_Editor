// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import CodeEditor from './components/CodeEditor';

// export default function App() {
//   const [questions, setQuestions] = useState([]);
//   const [selected, setSelected] = useState('');
//   const [rephrased, setRephrased] = useState('');

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/api/questions")
//       .then(res => setQuestions(res.data));
//   }, []);
//   const handleRephrase = () => {
//     axios.post("http://127.0.0.1:8000/api/rephrase", { question: selected })
//       .then(res => setRephrased(res.data.rephrased));
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">AI Question Rephraser & Code Runner</h1>
//       <select
//         onChange={e => setSelected(e.target.value)}
//         className="border p-2 mb-4 w-full"
//       >
//         <option>Select a question</option>
//         {questions.map((q, i) => <option key={i} value={q?.statement}>{q?.statement}</option>)}
//       </select>
//       <button onClick={handleRephrase} className="mb-4 bg-blue-600 text-white p-2 rounded">
//         Rephrase
//       </button>
//       <p className="mb-4 font-semibold">{rephrased}</p>
//       <CodeEditor />
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CodeEditor from './components/CodeEditor';
import './App.css';

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState('');
  const [rephrased, setRephrased] = useState('');

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/questions")
      .then(res => setQuestions(res.data));
  }, []);

  const handleRephrase = () => {
    axios.post("http://127.0.0.1:8000/api/rephrase", { question: selected })
      .then(res => setRephrased(res.data.rephrased));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🧠 AI Question Rephraser & Code Runner</h1>
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <h2>Select a coding question</h2>
          <select
            onChange={e => setSelected(e.target.value)}
            className="question-select"
          >
            <option value="">-- Select a question --</option>
            {questions.map((q, i) => (
              <option key={i} value={q?.statement}>{q?.statement.slice(0, 100)}...</option>
            ))}
          </select>

          <button onClick={handleRephrase} className="rephrase-button">
            🔁 Rephrase
          </button>
        </aside>

        <section className="question-panel">
          {rephrased && (
            <div className="rephrased-output">
              <h2>📝 Rephrased Question</h2>
              <p>{rephrased}</p>
            </div>
          )}

          <div className="code-editor-panel">
            <h2>💻 Code Editor</h2>
            <CodeEditor />
          </div>
        </section>
      </div>
    </div>
  );
}
