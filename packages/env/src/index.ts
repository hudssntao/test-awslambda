import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

// https://env.t3.gg/docs/core
export const env = createEnv({
  server: {
    TEST_ENV: z.string(),
  },
  emptyStringAsUndefined: true,
  runtimeEnvStrict: {
    TEST_ENV: process.env.TEST_ENV,
  },
});

export default env;
