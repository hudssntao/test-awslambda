import { APIGatewayProxyEvent } from "aws-lambda";
import env from "@repo/env";

export async function handler(event: APIGatewayProxyEvent) {
  console.log("running second lambda v2:", env.TEST_ENV);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!", env: env.TEST_ENV }),
  };
}
