import { SavedRecord } from "#tests/assets/records";
import faker from "faker";
import { EVENTS, NodeEnvs } from "src/domain";

type Env = {
  PULL_NUMBER: SavedRecord;
  BASE_SHA: string;
  HEAD_SHA: string;
  GITHUB_TOKEN: string;
  NODE_ENV: NodeEnvs;
  REPO_OWNER_NAME: string;
  REPO_NAME: string;
  WORKFLOW_ID: string;
  GITHUB_REPOSITORY: string;
  EVENT_TYPE: EVENTS;
  CORE_EDITORS: string;
  ERC_EDITORS: string;
};

const _envFactory =
  <B extends Partial<Env>>(base: B) =>
  <O extends Partial<Env>>(overrides: O): B & O & NodeJS.ProcessEnv => ({
    ...process.env,
    ...base,
    ...overrides
  });

export const envFactory = _envFactory({
  REPO_OWNER_NAME: "ethereum",
  REPO_NAME: "EIPs",
  GITHUB_TOKEN: faker.random.alphaNumeric(10),
  NODE_ENV: NodeEnvs.test,
  GITHUB_REPOSITORY: "ethereum/EIPs",
  EVENT_TYPE: EVENTS.pullRequestTarget,
  CORE_EDITORS: "@test, @editors",
  ERC_EDITORS: "@test, @editors"
});
