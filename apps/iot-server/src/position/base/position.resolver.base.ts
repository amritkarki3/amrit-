/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Position } from "./Position";
import { PositionCountArgs } from "./PositionCountArgs";
import { PositionFindManyArgs } from "./PositionFindManyArgs";
import { PositionFindUniqueArgs } from "./PositionFindUniqueArgs";
import { CreatePositionArgs } from "./CreatePositionArgs";
import { UpdatePositionArgs } from "./UpdatePositionArgs";
import { DeletePositionArgs } from "./DeletePositionArgs";
import { CreatePositionDto } from "../CreatePositionDto";
import { PositionService } from "../position.service";
@graphql.Resolver(() => Position)
export class PositionResolverBase {
  constructor(protected readonly service: PositionService) {}

  async _positionsMeta(
    @graphql.Args() args: PositionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Position])
  async positions(
    @graphql.Args() args: PositionFindManyArgs
  ): Promise<Position[]> {
    return this.service.positions(args);
  }

  @graphql.Query(() => Position, { nullable: true })
  async position(
    @graphql.Args() args: PositionFindUniqueArgs
  ): Promise<Position | null> {
    const result = await this.service.position(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Position)
  async createPosition(
    @graphql.Args() args: CreatePositionArgs
  ): Promise<Position> {
    return await this.service.createPosition({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Position)
  async updatePosition(
    @graphql.Args() args: UpdatePositionArgs
  ): Promise<Position | null> {
    try {
      return await this.service.updatePosition({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Position)
  async deletePosition(
    @graphql.Args() args: DeletePositionArgs
  ): Promise<Position | null> {
    try {
      return await this.service.deletePosition(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => String)
  async CreatePosition(
    @graphql.Args()
    args: CreatePositionDto
  ): Promise<string> {
    return this.service.CreatePosition(args);
  }

  @graphql.Query(() => String)
  async FetchPositionEntries(
    @graphql.Args()
    args: CreatePositionDto
  ): Promise<string> {
    return this.service.FetchPositionEntries(args);
  }
}
