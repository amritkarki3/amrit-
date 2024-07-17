import { Injectable } from "@nestjs/common";
import { ComparePasswordDto } from "../passwordService/ComparePasswordDto";

@Injectable()
export class PasswordServiceService {
  constructor() {}
  async ComparePassword(args: ComparePasswordDto): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async HashPassword(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
