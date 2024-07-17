import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PasswordServiceService } from "./passwordservice.service";

@swagger.ApiTags("passwordServices")
@common.Controller("passwordServices")
export class PasswordServiceController {
  constructor(protected readonly service: PasswordServiceService) {}

  @common.Post("/compare")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ComparePassword(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.ComparePassword(body);
      }

  @common.Post("/hash")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HashPassword(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.HashPassword(body);
      }
}
