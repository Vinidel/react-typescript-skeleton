import {db} from '../db/db';

export default class User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: Date;

  static findById(id: number): Promise<User> {
    return db('user')
      .select().where('iduser', id)
      .then((userArr) => Promise.resolve(userArr[0]));
  }

  static findByEmail(email: string): Promise<User> {
    return db('user')
      .select()
      .where('email', email)
      .then((userArr) => Promise.resolve(User.parser(userArr[0])));
  }

  save() {
    const user = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      date_created: new Date(),
      date_updated: new Date(),
      dob: this.dob
    };
    return db('user')
        .insert(user)
  }

  static parser(userDb: any): Promise<User>{
    return new Promise((resolve) => {
      const user = new User();
      user.id = userDb.iduser;
      user.firstName = userDb.first_name;
      user.lastName = userDb.last_name;
      user.email = userDb.email;
      user.password = userDb.password;
      user.dob = userDb.dob;
      return resolve(user);
    });
  }

  static async checkPassword(email: string, password: string): Promise<User> {
    return User.findByEmail(email)
      .then(user => {
        if(user.password === password) {
          return user;
        } else {
          return Promise.reject('Invalid pass user');
        }
      })
      .catch((err) => {
        console.log(err);
        throw new Error('Invalid pass user');
      })
  }
}
