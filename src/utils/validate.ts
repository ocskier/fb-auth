import { isEmail } from 'validator';

export default {
  checkEmail: (val: String) => {
    if (!isEmail(val)) return true;
    return false;
  },
  checkPassword: (val: String) => {
    if (val.length < 8) return true;
    return false;
  },
};
