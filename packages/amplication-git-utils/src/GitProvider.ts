import {
  Branch,
  Commit,
  CreateBranchArgs,
  CreateCommitArgs,
  CreatePullRequestForBranchArgs,
  CreatePullRequestFromFilesArgs,
  CreateRepositoryArgs,
  GetFileArgs,
  GetPullRequestForBranchArgs,
  GetRepositoriesArgs,
  GetRepositoryArgs,
  GitFile,
  OneBranchArgs,
  RemoteGitOrganization,
  RemoteGitRepos,
  RemoteGitRepository,
} from "./types";

export interface GitProvider {
  init(): Promise<void>;
  getGitInstallationUrl(amplicationWorkspaceId: string): Promise<string>;
  getRepository(
    getRepositoryArgs: GetRepositoryArgs
  ): Promise<RemoteGitRepository>;
  getRepositories(
    getRepositoriesArgs: GetRepositoriesArgs
  ): Promise<RemoteGitRepos>;
  createRepository(
    createRepositoryArgs: CreateRepositoryArgs
  ): Promise<RemoteGitRepository>;
  deleteGitOrganization(): Promise<boolean>;
  getOrganization(): Promise<RemoteGitOrganization>;
  getFile(file: GetFileArgs): Promise<GitFile>;
  createPullRequestFromFiles: (
    createPullRequestFromFilesArgs: CreatePullRequestFromFilesArgs
  ) => Promise<string>;
  createCommit: (createCommitArgs: CreateCommitArgs) => Promise<void>;
  getPullRequestForBranch: (
    getPullRequestForBranchArgs: GetPullRequestForBranchArgs
  ) => Promise<{ url: string; number: number } | undefined>;
  createPullRequestForBranch: (
    createPullRequestForBranchArgs: CreatePullRequestForBranchArgs
  ) => Promise<string>;
  isBranchExists: (args: OneBranchArgs) => Promise<boolean>;
  getBranch: (args: OneBranchArgs) => Promise<Branch>;
  createBranch: (args: CreateBranchArgs) => Promise<Branch>;
  getFirstCommitOnBranch: (args: OneBranchArgs) => Promise<Commit>;
  getMyCommitsList: (args: OneBranchArgs) => Promise<Commit[]>;
}
