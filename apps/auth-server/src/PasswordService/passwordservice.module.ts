import { Module } from "@nestjs/common";
import { PasswordServiceService } from "./passwordservice.service";
import { PasswordServiceController } from "./passwordservice.controller";
import { PasswordServiceResolver } from "./passwordservice.resolver";

@Module({
  controllers: [PasswordServiceController],
  providers: [PasswordServiceService, PasswordServiceResolver],
  exports: [PasswordServiceService],
})
export class PasswordServiceModule {}
