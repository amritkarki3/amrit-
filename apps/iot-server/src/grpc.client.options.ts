import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["position"],
    protoPath: ["src/position/position.proto"],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
