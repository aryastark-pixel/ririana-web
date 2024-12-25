import React, { useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");
  const [answer, setAnswer] = useState("");

  const fetchAnswer = async () => {
    const apiKey = "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";
    const url =
      "https://api-inference.huggingface.co/models/bert-large-uncased-whole-word-masking-finetuned-squad";

    if (!question || !context) {
      alert("Please provide both question and context.");
      return;
    }

    try {
      const response = await axios.post(
        url,
        { question, context },
        { headers: { Authorization: `Bearer ${apiKey}` } }
      );
      setAnswer(response.data?.answer || "No answer found.");
    } catch (error) {
      setAnswer("Error fetching answer from API.");
    }
  };

  return (
    < div className="dashboard-container">
   {/* <div className="navbar">
        <span className="navbar-title">AI demo</span>
        <span className="logout-text" onClick={() => (window.location.href = "/")}>
          Logout
        </span>
        
      </div> */}
    <div className="center-container">
      <div className="dashboard-card">
      <h1 className="title">Dashboard</h1>
        <p className="subtitle">Ask a question, provide context, and get answers.</p>
        
        <textarea
          className="input-box"
          placeholder="Enter the question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        
        <textarea
          className="input-box"
          placeholder="Enter the context here..."
          value={context}
          onChange={(e) => setContext(e.target.value)}
        />
        
        <button className="button" onClick={fetchAnswer}>
          Get Answer
        </button>
        <p className="output">{answer}</p>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
