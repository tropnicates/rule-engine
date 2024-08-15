/**
 * Parses a rule string into a rule object.
 * @param {string} ruleString - The rule string to parse.
 * @returns {object} - The parsed rule object.
 */
function parseRuleString(ruleString) {
  const ruleParts = ruleString.split(' ');
  return {
    attribute: ruleParts[0],
    operator: ruleParts[1],
    value: ruleParts[2],
  };
}

module.exports = {
  parseRuleString,
};
