const Rule = require('../models/Rule');
const { parseRuleString } = require('../utils/parser');

/**
 * Creates a new rule.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const createRule = async (req, res) => {
  const { ruleString } = req.body;
  try {
    const rule = new Rule({ ruleString });
    await rule.save();
    res.status(201).json(rule);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create rule' });
  }
};

/**
 * Combines multiple rules into a single rule.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const combineRules = async (req, res) => {
  const { rules } = req.body;

  try {
    const combinedRule = rules.map(rule => parseRuleString(rule.ruleString)).join(' AND ');
    res.status(200).json({ combinedRule });
  } catch (error) {
    res.status(400).json({ error: 'Failed to combine rules' });
  }
};

/**
 * Evaluates a rule with provided data.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const evaluateRule = async (req, res) => {
  const { ruleId, data } = req.body;

  try {
    const rule = await Rule.findById(ruleId);
    const result = evaluate(rule.ruleString, data); 
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Failed to evaluate rule' });
  }
};

module.exports = {
  createRule,
  combineRules,
  evaluateRule,
};
