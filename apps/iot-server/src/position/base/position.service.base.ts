/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Position as PrismaPosition } from "@prisma/client";
import { CreatePositionDto } from "../CreatePositionDto";

export class PositionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.PositionCountArgs, "select">): Promise<number> {
    return this.prisma.position.count(args);
  }

  async positions(
    args: Prisma.PositionFindManyArgs
  ): Promise<PrismaPosition[]> {
    return this.prisma.position.findMany(args);
  }
  async position(
    args: Prisma.PositionFindUniqueArgs
  ): Promise<PrismaPosition | null> {
    return this.prisma.position.findUnique(args);
  }
  async createPosition(
    args: Prisma.PositionCreateArgs
  ): Promise<PrismaPosition> {
    return this.prisma.position.create(args);
  }
  async updatePosition(
    args: Prisma.PositionUpdateArgs
  ): Promise<PrismaPosition> {
    return this.prisma.position.update(args);
  }
  async deletePosition(
    args: Prisma.PositionDeleteArgs
  ): Promise<PrismaPosition> {
    return this.prisma.position.delete(args);
  }
  async CreatePosition(args: CreatePositionDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async FetchPositionEntries(args: CreatePositionDto): Promise<string> {
    throw new Error("Not implemented");
  }
}
