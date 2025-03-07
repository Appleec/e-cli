import * as logger from './utils/logger'

export interface ReleaseOptions {
  remote?: string
  npmTag?: string
  skipNpmPublish?: boolean
  skipChangelog?: boolean
  skipGitTag?: boolean
  checkRemoteVersion?: boolean
  task?(newVersion: string, oldVersion: string): Promise<void>
}
export async function release(options: ReleaseOptions) {
  try {

    return

  } catch (e) {
    logger.error((e as any).toString())
    process.exit(1)
  }
}
