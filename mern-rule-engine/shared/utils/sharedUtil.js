// sharedUtil.js

const ERROR_MESSAGES = require('../shared/constants/errorMessage');

/**
 * Validate if the given rule string is in a valid format.
 * @param {string} ruleString - The rule string to validate.
 * @returns {boolean} - True if the rule string is valid, false otherwise.
 */
function validateRuleString(ruleString) {
  // Basic check for non-empty string and simple syntax validation
  const ruleRegex = /^[\w\s><=!&|()']+$/;
  return isNonEmptyString(ruleString) && ruleRegex.test(ruleString);
}

/**
 * Format error messages.
 * @param {string} message - The error message key.
 * @returns {string} - The formatted error message.
 */
function formatErrorMessage(message) {
  return ERROR_MESSAGES[message] || ERROR_MESSAGES.SERVER_ERROR;
}

module.exports = {
  isNumber,
  isNonEmptyString,
  validateRuleString,
  formatErrorMessage,
};
