import User from './userModel';
import {db} from '../db/db';
import {Login} from '../app_types/login';
import {createToken} from '../security/token';
import jwt from 'jsonwebtoken';


export default class Session {
  id?: number;
  id_user: number;
  token?: string;
  date: Date;

  constructor(idUser: number, token: jwt) {
    this.id_user = idUser;
    this.date = new Date();
    this.token = token;
  }

  static insert(session: Session) {
    return db('session')
      .insert(session);
  }

  static findById(id: number) {
    return db('session')
      .select().where('idSession', id)
      .then((sessionArr) => Promise.resolve(sessionArr[0]));
  }

  static create(login: Login): Promise<Session> {
    return User.findByEmail(login.email)
      .then(user => {
          return createToken(user)
            .then((jwt) => {
              if(user.id) {
                const session = new Session(user.id, jwt.token);
                return Session.insert(session);
              }
            })
      })
      .then((arr) => Session.findById(arr[0]))
      .catch(err => Promise.reject(err));
  }

  static endSession(id: number): boolean{
    return true;
  }
}