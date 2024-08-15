import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const createRule = async (ruleString) => {
  const response = await axios.post(`${API_URL}/api/rules/create`, { rule: ruleString });
  return response.data;
};

export const combineRules = async (rules) => {
  const response = await axios.post(`${API_URL}/api/rules/combine`, { rules });
  return response.data;
};

export const evaluateRule = async (ruleId, data) => {
  const response = await axios.post(`${API_URL}/api/rules/evaluate`, { ruleId, data });
  return response.data.result;
};

export const validateRuleString = (ruleString) => {
  // Add your validation logic here
  if (ruleString.trim() === '') {
    return false;
  }
  return true;
};

export const validateData = (data) => {
  try {
    JSON.parse(data);
    return true;
  } catch (err) {
    return false;
  }
};
