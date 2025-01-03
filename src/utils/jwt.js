const jwt = require('jsonwebtoken');

class JWT {
    static createToken(user) {
      const payload = {
        userId: user.id,
        username: user.username,
      };

      const token = jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '3h' });
      return token;
    }

    static verifyToken(token) {
        try {
          const decoded = jwt.verify(token, process.env.SECRET_JWT);
          return decoded;
        } catch (err) {
          console.error('Token inválido ou expirado', err);
          return false;
        }
    }
}

module.exports = JWT;