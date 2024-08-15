import React, { useState } from 'react';
import axios from 'axios';
import { validateRuleString } from '../services/ruleService';
import "../App.css";

const RuleCreator = ({ addRule }) => {
  const [ruleString, setRuleString] = useState('');
  const [error, setError] = useState('');

  const handleCreateRule = async () => {
    if (!validateRuleString(ruleString)) {
      setError('Invalid rule string');
      return;
    }

    try {
      const response = await axios.post('/api/rules/create', { ruleString });
      addRule(response.data);
      setRuleString('');
      setError('');
    } catch (err) {
      setError('Failed to create rule');
    }
  };

  return (
    <div className='manage'>
      <div className='text'>
        <input
          type="text"
          value={ruleString}
          onChange={(e) => setRuleString(e.target.value)}
          placeholder='Enter rule string (e.g., "age > 30 AND department = Sales")'
        />
      </div>
      <button onClick={handleCreateRule}>Create Rule</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default RuleCreator;
