import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const checkExistEmail = this.usersRepository.findByEmail(email);

    if (checkExistEmail) {
      throw new Error("Email Already exist");
    }
    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
