import { MockRecord } from "src/domain";

export default [
  {
    req: {
      method: "GET",
      url: "https://api.github.com/repos/ethereum/EIPs/pulls/3596"
    },
    res: {
      status: 200,
      data: {
        url: "https://api.github.com/repos/ethereum/EIPs/pulls/3596",
        id: 657422936,
        node_id: "MDExOlB1bGxSZXF1ZXN0NjU3NDIyOTM2",
        html_url: "https://github.com/ethereum/EIPs/pull/3596",
        diff_url: "https://github.com/ethereum/EIPs/pull/3596.diff",
        patch_url: "https://github.com/ethereum/EIPs/pull/3596.patch",
        issue_url: "https://api.github.com/repos/ethereum/EIPs/issues/3596",
        number: 3596,
        state: "closed",
        locked: false,
        title: "2930: Non-normative changes to variable names to match 1559.",
        user: {
          login: "MicahZoltu",
          id: 886059,
          node_id: "MDQ6VXNlcjg4NjA1OQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/886059?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/MicahZoltu",
          html_url: "https://github.com/MicahZoltu",
          followers_url: "https://api.github.com/users/MicahZoltu/followers",
          following_url:
            "https://api.github.com/users/MicahZoltu/following{/other_user}",
          gists_url: "https://api.github.com/users/MicahZoltu/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/MicahZoltu/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/MicahZoltu/subscriptions",
          organizations_url: "https://api.github.com/users/MicahZoltu/orgs",
          repos_url: "https://api.github.com/users/MicahZoltu/repos",
          events_url:
            "https://api.github.com/users/MicahZoltu/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/MicahZoltu/received_events",
          type: "User",
          site_admin: false
        },
        body: "There has been some desire to get some consistency across these EIPs in terms of naming.  Also, `access_list` is snake case while the rest are `camelCase` so I fixed it to align with the rest (and also match casing style of 1559).",
        created_at: "2021-05-29T07:54:22Z",
        updated_at: "2021-06-19T04:24:52Z",
        closed_at: "2021-05-31T03:15:58Z",
        merged_at: "2021-05-31T03:15:58Z",
        merge_commit_sha: "1419020ffb734b8a49cbf5c44fae9a85d37d39b1",
        assignee: null,
        assignees: [],
        requested_reviewers: [],
        requested_teams: [],
        labels: [],
        milestone: null,
        draft: false,
        commits_url:
          "https://api.github.com/repos/ethereum/EIPs/pulls/3596/commits",
        review_comments_url:
          "https://api.github.com/repos/ethereum/EIPs/pulls/3596/comments",
        review_comment_url:
          "https://api.github.com/repos/ethereum/EIPs/pulls/comments{/number}",
        comments_url:
          "https://api.github.com/repos/ethereum/EIPs/issues/3596/comments",
        statuses_url:
          "https://api.github.com/repos/ethereum/EIPs/statuses/f661efb56fee4a4cdffe1ba3efe119d19c0ae9a7",
        head: {
          label: "ethereum:MicahZoltu-patch-3",
          ref: "MicahZoltu-patch-3",
          sha: "f661efb56fee4a4cdffe1ba3efe119d19c0ae9a7",
          user: {
            login: "ethereum",
            id: 6250754,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYyNTA3NTQ=",
            avatar_url: "https://avatars.githubusercontent.com/u/6250754?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/ethereum",
            html_url: "https://github.com/ethereum",
            followers_url: "https://api.github.com/users/ethereum/followers",
            following_url:
              "https://api.github.com/users/ethereum/following{/other_user}",
            gists_url: "https://api.github.com/users/ethereum/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/ethereum/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/ethereum/subscriptions",
            organizations_url: "https://api.github.com/users/ethereum/orgs",
            repos_url: "https://api.github.com/users/ethereum/repos",
            events_url:
              "https://api.github.com/users/ethereum/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/ethereum/received_events",
            type: "Organization",
            site_admin: false
          },
          repo: {
            id: 44971752,
            node_id: "MDEwOlJlcG9zaXRvcnk0NDk3MTc1Mg==",
            name: "EIPs",
            full_name: "ethereum/EIPs",
            private: false,
            owner: {
              login: "ethereum",
              id: 6250754,
              node_id: "MDEyOk9yZ2FuaXphdGlvbjYyNTA3NTQ=",
              avatar_url: "https://avatars.githubusercontent.com/u/6250754?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/ethereum",
              html_url: "https://github.com/ethereum",
              followers_url: "https://api.github.com/users/ethereum/followers",
              following_url:
                "https://api.github.com/users/ethereum/following{/other_user}",
              gists_url:
                "https://api.github.com/users/ethereum/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/ethereum/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/ethereum/subscriptions",
              organizations_url: "https://api.github.com/users/ethereum/orgs",
              repos_url: "https://api.github.com/users/ethereum/repos",
              events_url:
                "https://api.github.com/users/ethereum/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/ethereum/received_events",
              type: "Organization",
              site_admin: false
            },
            html_url: "https://github.com/ethereum/EIPs",
            description: "The Ethereum Improvement Proposal repository",
            fork: false,
            url: "https://api.github.com/repos/ethereum/EIPs",
            forks_url: "https://api.github.com/repos/ethereum/EIPs/forks",
            keys_url:
              "https://api.github.com/repos/ethereum/EIPs/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/ethereum/EIPs/collaborators{/collaborator}",
            teams_url: "https://api.github.com/repos/ethereum/EIPs/teams",
            hooks_url: "https://api.github.com/repos/ethereum/EIPs/hooks",
            issue_events_url:
              "https://api.github.com/repos/ethereum/EIPs/issues/events{/number}",
            events_url: "https://api.github.com/repos/ethereum/EIPs/events",
            assignees_url:
              "https://api.github.com/repos/ethereum/EIPs/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/ethereum/EIPs/branches{/branch}",
            tags_url: "https://api.github.com/repos/ethereum/EIPs/tags",
            blobs_url:
              "https://api.github.com/repos/ethereum/EIPs/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/ethereum/EIPs/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/ethereum/EIPs/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/ethereum/EIPs/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/ethereum/EIPs/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/ethereum/EIPs/languages",
            stargazers_url:
              "https://api.github.com/repos/ethereum/EIPs/stargazers",
            contributors_url:
              "https://api.github.com/repos/ethereum/EIPs/contributors",
            subscribers_url:
              "https://api.github.com/repos/ethereum/EIPs/subscribers",
            subscription_url:
              "https://api.github.com/repos/ethereum/EIPs/subscription",
            commits_url:
              "https://api.github.com/repos/ethereum/EIPs/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/ethereum/EIPs/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/ethereum/EIPs/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/ethereum/EIPs/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/ethereum/EIPs/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/ethereum/EIPs/compare/{base}...{head}",
            merges_url: "https://api.github.com/repos/ethereum/EIPs/merges",
            archive_url:
              "https://api.github.com/repos/ethereum/EIPs/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/ethereum/EIPs/downloads",
            issues_url:
              "https://api.github.com/repos/ethereum/EIPs/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/ethereum/EIPs/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/ethereum/EIPs/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/ethereum/EIPs/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/ethereum/EIPs/labels{/name}",
            releases_url:
              "https://api.github.com/repos/ethereum/EIPs/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/ethereum/EIPs/deployments",
            created_at: "2015-10-26T13:57:23Z",
            updated_at: "2021-06-18T19:03:05Z",
            pushed_at: "2021-06-18T21:21:18Z",
            git_url: "git://github.com/ethereum/EIPs.git",
            ssh_url: "git@github.com:ethereum/EIPs.git",
            clone_url: "https://github.com/ethereum/EIPs.git",
            svn_url: "https://github.com/ethereum/EIPs",
            homepage: "https://eips.ethereum.org/",
            size: 19915,
            stargazers_count: 6679,
            watchers_count: 6679,
            language: "Solidity",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: false,
            has_pages: true,
            forks_count: 2588,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 506,
            license: null,
            forks: 2588,
            open_issues: 506,
            watchers: 6679,
            default_branch: "master"
          }
        },
        base: {
          label: "ethereum:master",
          ref: "master",
          sha: "c0e7f864c5b0997e57ee10d6dfc527de369a5d35",
          user: {
            login: "ethereum",
            id: 6250754,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYyNTA3NTQ=",
            avatar_url: "https://avatars.githubusercontent.com/u/6250754?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/ethereum",
            html_url: "https://github.com/ethereum",
            followers_url: "https://api.github.com/users/ethereum/followers",
            following_url:
              "https://api.github.com/users/ethereum/following{/other_user}",
            gists_url: "https://api.github.com/users/ethereum/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/ethereum/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/ethereum/subscriptions",
            organizations_url: "https://api.github.com/users/ethereum/orgs",
            repos_url: "https://api.github.com/users/ethereum/repos",
            events_url:
              "https://api.github.com/users/ethereum/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/ethereum/received_events",
            type: "Organization",
            site_admin: false
          },
          repo: {
            id: 44971752,
            node_id: "MDEwOlJlcG9zaXRvcnk0NDk3MTc1Mg==",
            name: "EIPs",
            full_name: "ethereum/EIPs",
            private: false,
            owner: {
              login: "ethereum",
              id: 6250754,
              node_id: "MDEyOk9yZ2FuaXphdGlvbjYyNTA3NTQ=",
              avatar_url: "https://avatars.githubusercontent.com/u/6250754?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/ethereum",
              html_url: "https://github.com/ethereum",
              followers_url: "https://api.github.com/users/ethereum/followers",
              following_url:
                "https://api.github.com/users/ethereum/following{/other_user}",
              gists_url:
                "https://api.github.com/users/ethereum/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/ethereum/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/ethereum/subscriptions",
              organizations_url: "https://api.github.com/users/ethereum/orgs",
              repos_url: "https://api.github.com/users/ethereum/repos",
              events_url:
                "https://api.github.com/users/ethereum/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/ethereum/received_events",
              type: "Organization",
              site_admin: false
            },
            html_url: "https://github.com/ethereum/EIPs",
            description: "The Ethereum Improvement Proposal repository",
            fork: false,
            url: "https://api.github.com/repos/ethereum/EIPs",
            forks_url: "https://api.github.com/repos/ethereum/EIPs/forks",
            keys_url:
              "https://api.github.com/repos/ethereum/EIPs/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/ethereum/EIPs/collaborators{/collaborator}",
            teams_url: "https://api.github.com/repos/ethereum/EIPs/teams",
            hooks_url: "https://api.github.com/repos/ethereum/EIPs/hooks",
            issue_events_url:
              "https://api.github.com/repos/ethereum/EIPs/issues/events{/number}",
            events_url: "https://api.github.com/repos/ethereum/EIPs/events",
            assignees_url:
              "https://api.github.com/repos/ethereum/EIPs/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/ethereum/EIPs/branches{/branch}",
            tags_url: "https://api.github.com/repos/ethereum/EIPs/tags",
            blobs_url:
              "https://api.github.com/repos/ethereum/EIPs/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/ethereum/EIPs/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/ethereum/EIPs/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/ethereum/EIPs/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/ethereum/EIPs/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/ethereum/EIPs/languages",
            stargazers_url:
              "https://api.github.com/repos/ethereum/EIPs/stargazers",
            contributors_url:
              "https://api.github.com/repos/ethereum/EIPs/contributors",
            subscribers_url:
              "https://api.github.com/repos/ethereum/EIPs/subscribers",
            subscription_url:
              "https://api.github.com/repos/ethereum/EIPs/subscription",
            commits_url:
              "https://api.github.com/repos/ethereum/EIPs/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/ethereum/EIPs/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/ethereum/EIPs/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/ethereum/EIPs/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/ethereum/EIPs/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/ethereum/EIPs/compare/{base}...{head}",
            merges_url: "https://api.github.com/repos/ethereum/EIPs/merges",
            archive_url:
              "https://api.github.com/repos/ethereum/EIPs/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/ethereum/EIPs/downloads",
            issues_url:
              "https://api.github.com/repos/ethereum/EIPs/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/ethereum/EIPs/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/ethereum/EIPs/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/ethereum/EIPs/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/ethereum/EIPs/labels{/name}",
            releases_url:
              "https://api.github.com/repos/ethereum/EIPs/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/ethereum/EIPs/deployments",
            created_at: "2015-10-26T13:57:23Z",
            updated_at: "2021-06-18T19:03:05Z",
            pushed_at: "2021-06-18T21:21:18Z",
            git_url: "git://github.com/ethereum/EIPs.git",
            ssh_url: "git@github.com:ethereum/EIPs.git",
            clone_url: "https://github.com/ethereum/EIPs.git",
            svn_url: "https://github.com/ethereum/EIPs",
            homepage: "https://eips.ethereum.org/",
            size: 19915,
            stargazers_count: 6679,
            watchers_count: 6679,
            language: "Solidity",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: false,
            has_pages: true,
            forks_count: 2588,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 506,
            license: null,
            forks: 2588,
            open_issues: 506,
            watchers: 6679,
            default_branch: "master"
          }
        },
        _links: {
          self: {
            href: "https://api.github.com/repos/ethereum/EIPs/pulls/3596"
          },
          html: {
            href: "https://github.com/ethereum/EIPs/pull/3596"
          },
          issue: {
            href: "https://api.github.com/repos/ethereum/EIPs/issues/3596"
          },
          comments: {
            href: "https://api.github.com/repos/ethereum/EIPs/issues/3596/comments"
          },
          review_comments: {
            href: "https://api.github.com/repos/ethereum/EIPs/pulls/3596/comments"
          },
          review_comment: {
            href: "https://api.github.com/repos/ethereum/EIPs/pulls/comments{/number}"
          },
          commits: {
            href: "https://api.github.com/repos/ethereum/EIPs/pulls/3596/commits"
          },
          statuses: {
            href: "https://api.github.com/repos/ethereum/EIPs/statuses/f661efb56fee4a4cdffe1ba3efe119d19c0ae9a7"
          }
        },
        author_association: "COLLABORATOR",
        auto_merge: null,
        active_lock_reason: null,
        merged: true,
        mergeable: null,
        rebaseable: null,
        mergeable_state: "unknown",
        merged_by: {
          login: "MicahZoltu",
          id: 886059,
          node_id: "MDQ6VXNlcjg4NjA1OQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/886059?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/MicahZoltu",
          html_url: "https://github.com/MicahZoltu",
          followers_url: "https://api.github.com/users/MicahZoltu/followers",
          following_url:
            "https://api.github.com/users/MicahZoltu/following{/other_user}",
          gists_url: "https://api.github.com/users/MicahZoltu/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/MicahZoltu/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/MicahZoltu/subscriptions",
          organizations_url: "https://api.github.com/users/MicahZoltu/orgs",
          repos_url: "https://api.github.com/users/MicahZoltu/repos",
          events_url:
            "https://api.github.com/users/MicahZoltu/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/MicahZoltu/received_events",
          type: "User",
          site_admin: false
        },
        comments: 6,
        review_comments: 0,
        maintainer_can_modify: false,
        commits: 1,
        additions: 5,
        deletions: 5,
        changed_files: 1
      }
    }
  }
] as MockRecord[];
