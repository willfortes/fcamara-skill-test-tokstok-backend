import { IUserCreate, IUserResponse } from 'App/Interfaces/User'
import UserRepository from 'App/Repositories/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UserService {
  private userRepository

  constructor() {
    this.userRepository = new UserRepository()
  }

  public async createUser(data: IUserCreate): Promise<IUserResponse> {
    try {
      const hashedPassword = await Hash.make(data.password)

      const dataHashed = {
        email: data.email,
        password: hashedPassword,
      }

      return this.userRepository.createUser(dataHashed)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  public async auth(data, auth) {
    try {
      return auth.use('api').attempt(data.email, data.password)
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }

  public async logout(auth) {
    try {
      await auth.use('api').revoke()
      return {
        revoked: true
      }
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  }
}
