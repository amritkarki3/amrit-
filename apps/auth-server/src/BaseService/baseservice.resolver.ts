import * as graphql from "@nestjs/graphql";
import { BaseServiceService } from "./baseservice.service";

export class BaseServiceResolver {
  constructor(protected readonly service: BaseServiceService) {}
}
