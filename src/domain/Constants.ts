import { Opaque } from "type-fest";
import { GITHUB_HANDLE } from "./Regex";
import { ERRORS } from "./Types";

export const MERGE_MESSAGE = `
    Hi, I'm a bot! This change was automatically merged because:
    - It only modifies existing Draft, Review, or Last Call EIP(s)
    - The PR was approved or written by at least one author of each modified EIP
    - The build is passing
    `;
export const ALLOWED_STATUSES = new Set(["draft", "last call", "review"]);
export const COMMENT_HEADER =
  "Hi! I'm a bot, and I wanted to automerge your PR, but couldn't because of the following issue(s):\n\n";
export const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";

const editorStringToArray = (str?: string) =>
  str && str.split(",").map((str) => str.trim());
type Editor = Opaque<string>;
export function assertEditorsFormat(
  maybeEditors: string[] | undefined | ""
): asserts maybeEditors is [Editor, ...Editor[]] {
  if (!maybeEditors || !maybeEditors.length) {
    console.log(
      [
        `at least one editor must be provided, you provided these environment variables`,
        `\tERC_EDITORS: ${process.env.ERC_EDITORS}`,
        `\tCORE_EDITORS: ${process.env.CORE_EDITORS}`,
        `these were then parsed to become`,
        `\tERC_EDITORS: ${JSON.stringify(
          editorStringToArray(process.env.ERC_EDITORS)
        )}`,
        `\tCORE_EDITORS: ${JSON.stringify(
          editorStringToArray(process.env.CORE_EDITORS)
        )}`
      ].join("\n")
    );
    throw new Error("at least one editor must be provided");
  }

  for (const maybeEditor of maybeEditors) {
    if (!GITHUB_HANDLE.test(maybeEditor)) {
      throw Error(
        `${maybeEditor} is not a correctly formatted editor github handle`
      );
    }
  }
}
/** don't use this directly, use `requireCoreEditors` instead */
export const CORE_EDITORS = () => {
  const editors = editorStringToArray(process.env.CORE_EDITORS);

  assertEditorsFormat(editors);
  return editors;
};
/** don't use this directly, use `requireERCEditors` instead */
export const ERC_EDITORS = () => {
  const editors = editorStringToArray(process.env.ERC_EDITORS);
  assertEditorsFormat(editors);
  return editors;
};

/** what is used to `.join(..)` the mentions */
export const MENTIONS_SEPARATOR = " ";

export enum FrontMatterAttributes {
  status = "status",
  eip = "eip",
  author = "author",
  category = "category",
  type = "type"
}

export enum EIPCategory {
  erc = "erc",
  core = "core",
  networking = "networking",
  interface = "interface"
}

export enum EIPTypes {
  informational = "informational",
  meta = "meta",
  standardTrack = "standard track"
}
/** asserts a string's type is within EIPCategory */
export function assertIsCategoryEnum(
  maybeCategory: string,
  fileName: string
): asserts maybeCategory is EIPCategory {
  const categories = Object.values(EIPCategory) as string[];
  if (!categories.includes(maybeCategory)) {
    throw Error(
      [
        `the provided eip category '${maybeCategory}' of file`,
        `'${fileName}' is required to be one of (${categories.join(", ")})`
      ].join(" ")
    );
  }
}
export function assertIsTypeEnum(
  maybeType: string,
  fileName: string
): asserts maybeType is EIPTypes {
  const types = Object.values(EIPTypes) as string[];
  if (!types.includes(maybeType)) {
    throw Error(
      [
        `the provided eip type is '${maybeType}' of file`,
        `'${fileName}' is required to be one of (${types.join(", ")})`
      ].join(" ")
    );
  }
}

export const assertCategory = ({
  fileName,
  maybeCategory,
  maybeType
}: {
  fileName: string;
  maybeCategory?: string;
  maybeType?: string;
}): EIPCategory => {
  if (!maybeCategory) {
    if (!maybeType) {
      throw new Error(
        `There was neither a 'category' nor 'type' property found for file '${fileName}'`
      );
    }
    const normalizedType = maybeType.toLowerCase();
    assertIsTypeEnum(normalizedType, fileName);

    if (normalizedType === EIPTypes.informational) {
      return EIPCategory.erc;
    }

    if (normalizedType === EIPTypes.meta) {
      return EIPCategory.erc;
    }

    if (normalizedType === EIPTypes.standardTrack) {
      return EIPCategory.core;
    }

    throw Error("type was not a known type, this error should never occur");
  }
  const normalized = maybeCategory?.toLowerCase();
  assertIsCategoryEnum(normalized, fileName);
  return normalized;
};

export enum EipStatus {
  draft = "draft",
  withdrawn = "withdrawn",
  lastCall = "last call",
  review = "review",
  final = "final"
}

export enum FileStatus {
  added = "added"
}

export enum EVENTS {
  pullRequest = "pull_request",
  pullRequestTarget = "pull_request_target",
  pullRequestReview = "pull_request_review"
}

/**
 *  A collection of error strings, although confusing the error strings are
 *  define if an error exists and undefined if not; i.e.
 *  `ERRORS.approvalErrors.isAuthorApproved` is truthy if authors have NOT
 *  approved the PR and falsey if they have because in the case that they
 *  have approved the PR no error exists
 */
export const DEFAULT_ERRORS: ERRORS = {
  fileErrors: {},
  headerErrors: {},
  authorErrors: {},
  approvalErrors: {}
};

export const CHECK_STATUS_INTERVAL = 30000;

export const EIP1_REQUIRED_EDITOR_APPROVALS = 2;
