import React from 'react';
import '../App.css'; 

const RuleVisualizer = ({ rules }) => {
  return (
    <div className="rule-visualizer">
      <div className='rulesmanage'>Visualize Rules</div>
      {rules.length > 0 ? (
        <ul>
          {rules.map((rule, index) => (
            <li key={index} className="rule-item">
              <div className="rule-id">Rule ID: {rule._id}</div>
              <div className="rule-details">
                <div><strong>Rule String:</strong> {rule.ruleString}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className='rule-visualizer'>No rules to display.</div>
      )}
    </div>
  );
};

export default RuleVisualizer;
