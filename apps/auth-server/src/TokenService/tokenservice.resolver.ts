import * as graphql from "@nestjs/graphql";
import { CreateTokenDto } from "../tokenService/CreateTokenDto";
import { TokenServiceService } from "./tokenservice.service";

export class TokenServiceResolver {
  constructor(protected readonly service: TokenServiceService) {}

  @graphql.Mutation(() => String)
  async CreateToken(
    @graphql.Args()
    args: CreateTokenDto
  ): Promise<string> {
    return this.service.CreateToken(args);
  }

  @graphql.Query(() => Boolean)
  async VerifyToken(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.VerifyToken(args);
  }
}
