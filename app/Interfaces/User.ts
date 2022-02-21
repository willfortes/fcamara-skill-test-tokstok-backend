interface IUserCreate {
  email: string
  password: string
}

interface IUserResponse {
  id: number
  email: string
}

export { IUserCreate, IUserResponse }
