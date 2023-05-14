/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";


class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try{
    const user_id = request.headers.user_id?.toString();

    const listAll = this.listAllUsersUseCase.execute({user_id});

    return response.status(200).json(listAll);
  }catch(error){
    return response.status(400).json({error: "User not found"});
  }
  }
}

export { ListAllUsersController };
