import { APIGatewayProxyEvent } from "aws-lambda";
import env from "@repo/env";

export async function handler(event: APIGatewayProxyEvent) {
  console.log("Running first lambda: ", env.TEST_ENV);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda.", env: env.TEST_ENV }),
  };
}
