const bcrypt = require('bcrypt');

class Password {
    static async hashPassword(password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    }
    
    static async verifyPassword(password, hashedPassword) {
      const isMatch = await bcrypt.compare(password, hashedPassword);
      return isMatch;
    }
}

module.exports = Password;