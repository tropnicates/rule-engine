export const validateRuleString = (ruleString) => {
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
  