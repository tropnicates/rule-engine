// ruleEvaluator.js

/**
 * Evaluates a single rule against a user's attributes.
 * Supports basic operators: "=", "!=", ">", "<", ">=", "<="
 * 
 * @param {object} rule - The rule object { attribute, operator, value }.
 * @param {object} userAttributes - The user's attributes.
 * @returns {boolean} - Whether the rule passes.
 */
function evaluateRule(rule, userAttributes) {
  const { attribute, operator, value } = rule;

  if (!(attribute in userAttributes)) {
    throw new Error(`Attribute ${attribute} not found in user attributes.`);
  }

  const userValue = userAttributes[attribute];

  switch (operator) {
    case '=':
      return userValue === value;
    case '!=':
      return userValue !== value;
    case '>':
      return userValue > value;
    case '<':
      return userValue < value;
    case '>=':
      return userValue >= value;
    case '<=':
      return userValue <= value;
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

module.exports = {
  evaluateRule,
};
