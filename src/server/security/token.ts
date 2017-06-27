import * as jwt from 'jsonwebtoken';

const JWT_EXPIRES_IN_ONE_HOUR = 3600000;

export function createToken(data: any): Promise<jwt> {
  const algorithm = {
    algorithm: 'HS256',
    expiresIn: JWT_EXPIRES_IN_ONE_HOUR
  };

  const privateKey = 'TinyRiiiiiick';
  const expiry = Date.now() + JWT_EXPIRES_IN_ONE_HOUR;
  return new Promise((resolve, reject) => {
    jwt.sign(data,
      privateKey,
      algorithm,
      (err, token) => {
        if (err) {
          console.log(err);
          return reject(err);
        }
        return resolve({token, expiry});
      })
  });

}

export function decode(token: string): any{
  const decoded = jwt.decode(token);
  return decoded;
}