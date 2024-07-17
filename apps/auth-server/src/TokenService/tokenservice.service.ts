import { Injectable } from "@nestjs/common";
import { CreateTokenDto } from "../tokenService/CreateTokenDto";

@Injectable()
export class TokenServiceService {
  constructor() {}
  async CreateToken(args: CreateTokenDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async VerifyToken(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
