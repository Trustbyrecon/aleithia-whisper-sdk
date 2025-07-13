
const { Octokit } = require("@octokit/rest");

exports.handler = async function (event, context) {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const REPO_OWNER = "your-github-username";
  const REPO_NAME = "your-repo-name";
  const BRANCH = "main"; // or "master"

  if (!GITHUB_TOKEN) {
    return {
      statusCode: 500,
      body: "Missing GITHUB_TOKEN in environment variables."
    };
  }

  const octokit = new Octokit({ auth: GITHUB_TOKEN });

  try {
    const refData = await octokit.git.getRef({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      ref: `heads/${BRANCH}`
    });

    const latestCommitSha = refData.data.object.sha;

    const commitData = await octokit.git.getCommit({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      commit_sha: latestCommitSha
    });

    const treeSha = commitData.data.tree.sha;

    const newCommit = await octokit.git.createCommit({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      message: "🔁 Auto-triggered deploy via EchoPrime",
      tree: treeSha,
      parents: [latestCommitSha]
    });

    await octokit.git.updateRef({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      ref: `heads/${BRANCH}`,
      sha: newCommit.data.sha
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Deploy triggered successfully." })
    };
  } catch (error) {
    console.error("Deploy trigger error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
