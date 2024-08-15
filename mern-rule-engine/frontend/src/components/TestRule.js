import React, { useState } from 'react';
import axios from 'axios';
import { validateData } from '../services/ruleService';
import "../App.css";

const TestRule = ({ rules }) => {
  const [selectedRule, setSelectedRule] = useState('');
  const [testData, setTestData] = useState('{}');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleEvaluateRule = async () => {
    if (!validateData(testData)) {
      setError('Invalid test data format');
      return;
    }

    try {
      const response = await axios.post('/api/rules/evaluate', {
        ruleId: selectedRule,
        data: JSON.parse(testData),
      });
      setResult(response.data.result);
      setError('');
    } catch (err) {
      setError('Failed to evaluate rule');
    }
  };

  return (
    <div className='testRule'>
      <div className='test'>Test Rule</div>
      <select onChange={(e) => setSelectedRule(e.target.value)}>
        <option value="">Select a rule</option>
        {rules.map((rule) => (
          <option key={rule._id} value={rule._id}>
            Rule ID: {rule._id}
          </option>
        ))}
      </select>
      <textarea
        value={testData}
        onChange={(e) => setTestData(e.target.value)}
        placeholder='Enter test data as JSON (e.g., {"age": 35, "department": "Sales"})'
      />
      <button onClick={handleEvaluateRule}>Evaluate</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result !== null && <p>Result: {result ? 'True' : 'False'}</p>}
    </div>
  );
};

export default TestRule;
