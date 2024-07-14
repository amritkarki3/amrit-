/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PositionService } from "../position.service";
import { PositionCreateInput } from "./PositionCreateInput";
import { Position } from "./Position";
import { PositionFindManyArgs } from "./PositionFindManyArgs";
import { PositionWhereUniqueInput } from "./PositionWhereUniqueInput";
import { PositionUpdateInput } from "./PositionUpdateInput";
import { CreatePositionDto } from "../CreatePositionDto";

export class PositionControllerBase {
  constructor(protected readonly service: PositionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Position })
  async createPosition(
    @common.Body() data: PositionCreateInput
  ): Promise<Position> {
    return await this.service.createPosition({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        latitude: true,
        longitude: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Position] })
  @ApiNestedQuery(PositionFindManyArgs)
  async positions(@common.Req() request: Request): Promise<Position[]> {
    const args = plainToClass(PositionFindManyArgs, request.query);
    return this.service.positions({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        latitude: true,
        longitude: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Position })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async position(
    @common.Param() params: PositionWhereUniqueInput
  ): Promise<Position | null> {
    const result = await this.service.position({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        latitude: true,
        longitude: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Position })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePosition(
    @common.Param() params: PositionWhereUniqueInput,
    @common.Body() data: PositionUpdateInput
  ): Promise<Position | null> {
    try {
      return await this.service.updatePosition({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          latitude: true,
          longitude: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Position })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePosition(
    @common.Param() params: PositionWhereUniqueInput
  ): Promise<Position | null> {
    try {
      return await this.service.deletePosition({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          latitude: true,
          longitude: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Post("/create-position")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async CreatePosition(
    @common.Body()
    body: CreatePositionDto
  ): Promise<string> {
    return this.service.CreatePosition(body);
  }

  @common.Get("/fetch-positions")
  @swagger.ApiOkResponse({
    type: String,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async FetchPositionEntries(
    @common.Body()
    body: CreatePositionDto
  ): Promise<string> {
    return this.service.FetchPositionEntries(body);
  }
}