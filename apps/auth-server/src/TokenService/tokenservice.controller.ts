import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TokenServiceService } from "./tokenservice.service";

@swagger.ApiTags("tokenServices")
@common.Controller("tokenServices")
export class TokenServiceController {
  constructor(protected readonly service: TokenServiceService) {}

  @common.Post("/token")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateToken(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateToken(body);
      }

  @common.Post("/verify")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VerifyToken(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.VerifyToken(body);
      }
}
