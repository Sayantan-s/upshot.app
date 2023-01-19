import { STYTCH_PROJECT_ID, STYTCH_SECRET } from "@config";
import * as stytch from "stytch";

type G = typeof globalThis;
interface CustomNodeJsGlobal extends G {
  stytchClient: stytch.Client;
}

declare const global: CustomNodeJsGlobal;

const stytchClient = new stytch.Client({
  project_id: STYTCH_PROJECT_ID!,
  secret: STYTCH_SECRET!,
  env: stytch.envs.test,
});

if (process.env.NODE_ENV === "development") global.stytchClient = stytchClient;

export default stytchClient;
