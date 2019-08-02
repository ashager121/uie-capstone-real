import { isValid } from 'date-fns'



export function fixDate(date) {

  var fixedDate = new Date(date);
  if (!isValid(fixedDate)) {
    fixedDate = new Date(); // For now, just wipe the date and make a new one...
  }
  return fixedDate;
}

export function parseObj(obj) {
  return JSON.parse(JSON.stringify(obj));
}