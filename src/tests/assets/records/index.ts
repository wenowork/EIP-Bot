import { isMockMethod, MockRecord } from "src/domain";
import PR3670 from "./3670";
import PR3596 from "./3596";
import PR3654_1 from "./3654/editorApproved";
import PR3654_2 from "./3654/noEditorApproval";

export enum SavedRecord {
  /**
   * **SHOULD FAIL**
   *
   * Summary: editor approval wasn't required if the author of the PR was an editor
   *
   * Explanation: if an editor is an author of an EIP and they submit a PR, then the
   * bot will assume that it has been approved by the editor. But this shouldn't happen.
   * The fix to this bug was considering EIP_EDITORS to be dynamic based on the eip / file
   * at hand. So if an editor is an author they won't be consider an editor for that test.
   * */
  PR3670 = "3670",
  PR3596 = "3596",
  /** **SHOULD PASS**
   *
   *  Summary: wasn't passing despite editor approval
   *
   *  Explanation: The cause of the bug was that the EIP_EDITORS list had capitals in it,
   *  so when it was checking if it was in the list it wouldn't match MicahZoltu
   *  to micahzoltu. And so it failed.
   */
  PR3654_1 = "3654_1",
  /** **SHOULD FAIL**
   *
   *  Summary: editors weren't mentioned if there was only a valid status error
   *
   *  Explanation: The cause of this bug was that despite there being a valid status error
   *  (i.e. status is Final) and that requiring editor approval the logic
   *  that actually collected the mentions didn't account for it. So I added that
   *  logic and it was golden
   */
  PR3654_2 = "3654_2",
  /**
   * **SHOULD PASS**
   *
   * @summary: [false alarm] greg opened a pull request and it automatically merged for
   *  an unknown reason. There were no editor reviews.
   *
   * @description: This was perceived as an error because greg moved the status from
   * draft to review at first but then reverted this change. In this case it was
   * expected behavior to auto merge; but it was incorrect interpreted.
   */
  PR3767 = "3767",
  /**
   * @summary: a pull request changed the status from last call to review,
   * it was caught by the linter but the editors weren't mentioned and they
   * were presumably not required
   *
   * @description:
   */
  PR3676 = "3676",
  /**
   * **SHOULD PASS**
   *
   * @summary: multi-file PR change with bot
   */
  PR3612 = "3612",
  /**
   * **SHOULD FAIL**
   *
   * @summary: multi-file PR that does not have the necessary reviews for it to pass
   */
  PR4192 = "4192"
}

/**
 * This will error if the provided string is not a known SavedRecord
 * @param maybeSavedRecord a string corresponding to a known SavedRecord
 */
export function assertSavedRecord(
  maybeSavedRecord: string
): asserts maybeSavedRecord is SavedRecord {
  const savedRecords = Object.values(SavedRecord);

  // @ts-expect-error savedRecords is actually a string[]
  if (!savedRecords.includes(maybeSavedRecord)) {
    throw new Error(
      `${maybeSavedRecord} is not a SavedRecord, the options are ${savedRecords}`
    );
  }
}

const assertMethods = (records: { default: MockRecord[] }) => {
  records.default.map(
    (record) => record.req?.method && isMockMethod(record.req.method)
  );
};
export const getMockRecords = async () => {
  const PR3767 = await import("./3767.json");
  const PR3676 = await import("./3676.json");
  const PR3612 = await import("./3612.json");
  const PR4192 = await import("./4192.json");

  assertMethods(PR3767);
  assertMethods(PR3676);
  assertMethods(PR3612);
  assertMethods(PR4192);

  const Records: { [k in keyof typeof SavedRecord]: MockRecord[] } = {
    PR3596,
    PR3670,
    PR3654_1,
    PR3654_2,
    PR3767: PR3767.default,
    PR3676: PR3676.default,
    PR3612: PR3612.default,
    PR4192: PR4192.default
  };
  return Records;
};
