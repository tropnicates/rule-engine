import React, { useState } from 'react';
import RuleCreator from '../components/RuleCreator';
import RuleVisualizer from '../components/RuleVisualizer';
import TestRule from '../components/TestRule';

const Rules = () => {
  const [rules, setRules] = useState([]);

  const addRule = (rule) => {
    setRules([...rules, rule]);
  };

  return (
    <div className='rules'>
      <div className='manageRules'>Manage Rules</div>
      <RuleCreator addRule={addRule} />
      <RuleVisualizer rules={rules} />
      <TestRule rules={rules} />
    </div>
  );
};

export default Rules;
