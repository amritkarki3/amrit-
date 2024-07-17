import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BaseServiceService } from "./baseservice.service";

@swagger.ApiTags("baseServices")
@common.Controller("baseServices")
export class BaseServiceController {
  constructor(protected readonly service: BaseServiceService) {}
}
