import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    const hashedPassword = await Hash.make('secret')

    await User.createMany([
      {
        email: 'fcamara@google.com',
        password: hashedPassword,
      }
    ])
  }
}
