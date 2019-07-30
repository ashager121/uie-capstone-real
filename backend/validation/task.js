const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateTask(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.title = !isEmpty(data.title) ? data.title : "";
  // data.dueDate = !isEmpty(data.dueDate) ? data.dueDate : "";
  data.priority = !isEmpty(data.priority) ? data.priority : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  // if (Validator.isEmpty(data.dueDate)) {
  //   errors.dueDate = "Due Date is required";
  // }

  if (Validator.isEmpty(data.priority)) {
    errors.priority = "Priority is required";
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category field is required";
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};