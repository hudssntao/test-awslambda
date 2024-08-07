import { APIGatewayProxyEvent } from "aws-lambda";

export async function handler(event: APIGatewayProxyEvent) {
  console.log("running second lambda");
  return {
    statusCode: 200,
    body: JSON.stringify("Hello from second Lambda!"),
  };
}
