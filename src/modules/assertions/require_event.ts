import { EVENTS } from "#domain";
import { getEventName } from "#infra";

export const requireEvent = () => {
  const event = getEventName();

  const isPullRequestReview = event === EVENTS.pullRequestReview;
  const isPullRequestTarget = event === EVENTS.pullRequestTarget;
  if (!(isPullRequestReview || isPullRequestTarget)) {
    throw `Only events of type ${EVENTS.pullRequestTarget} and ${EVENTS.pullRequestReview} are allowed`;
  }

  return event;
};
