import { IUserCreate, IUserResponse } from 'App/Interfaces/User'
import User from 'App/Models/User'

export default class UserRepository {
  public async createUser(data: IUserCreate): Promise<IUserResponse> {
    return User.create(data)
  }
}
