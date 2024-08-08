// Runs all jobs

import { handler as firstLambda } from "../src/firstLambda";
import { handler as secondLambda } from "../src/secondLambda";
import { APIGatewayProxyEvent } from "aws-lambda";

firstLambda({} as APIGatewayProxyEvent),
  secondLambda({} as APIGatewayProxyEvent);
