import { Module } from "@nestjs/common";
import { TokenServiceService } from "./tokenservice.service";
import { TokenServiceController } from "./tokenservice.controller";
import { TokenServiceResolver } from "./tokenservice.resolver";

@Module({
  controllers: [TokenServiceController],
  providers: [TokenServiceService, TokenServiceResolver],
  exports: [TokenServiceService],
})
export class TokenServiceModule {}
