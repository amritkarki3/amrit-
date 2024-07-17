import { Module } from "@nestjs/common";
import { BaseServiceService } from "./baseservice.service";
import { BaseServiceController } from "./baseservice.controller";
import { BaseServiceResolver } from "./baseservice.resolver";

@Module({
  controllers: [BaseServiceController],
  providers: [BaseServiceService, BaseServiceResolver],
  exports: [BaseServiceService],
})
export class BaseServiceModule {}
