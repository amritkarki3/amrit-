import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PositionService } from "./position.service";
import { PositionGrpcControllerBase } from "./base/position.grpc.controller.base";

@swagger.ApiTags("positions")
@common.Controller("positions")
export class PositionGrpcController extends PositionGrpcControllerBase {
  constructor(protected readonly service: PositionService) {
    super(service);
  }
}
