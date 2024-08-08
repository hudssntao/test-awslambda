import { APIGatewayProxyEvent } from "aws-lambda";
import env from "@repo/env";

export async function handler(event: APIGatewayProxyEvent) {
  console.log("running first lambda: ", env.TEST_ENV);
  return {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
}
