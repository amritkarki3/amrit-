import * as graphql from "@nestjs/graphql";
import { ComparePasswordDto } from "../passwordService/ComparePasswordDto";
import { PasswordServiceService } from "./passwordservice.service";

export class PasswordServiceResolver {
  constructor(protected readonly service: PasswordServiceService) {}

  @graphql.Mutation(() => Boolean)
  async ComparePassword(
    @graphql.Args()
    args: ComparePasswordDto
  ): Promise<boolean> {
    return this.service.ComparePassword(args);
  }

  @graphql.Mutation(() => String)
  async HashPassword(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.HashPassword(args);
  }
}
