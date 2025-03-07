import { resolve as resolvePath } from 'path'
import conventionalChangelog from 'conventional-changelog'
import { createSpinner } from 'nanospinner'
import fse from 'fs-extra'

export interface ChangelogOptions {
  file?: string
  releaseCount?: number
  preset?:
    | 'angular'
    | 'atom'
    | 'codemirror'
    | 'conventionalcommits'
    | 'ember'
    | 'eslint'
    | 'express'
    | 'jquery'
    | 'jshint'
}

export function changelog({
                            releaseCount = 0,
                            file = 'CHANGELOG.md',
                            preset = 'angular',
}: ChangelogOptions = {}): Promise<void> {
  const s = createSpinner('Generating changelog').start()

  return new Promise((resolve) => {
    conventionalChangelog({
      preset,
      releaseCount,
    })
      .pipe(fse.createWriteStream(resolvePath(process.cwd(), file)))
      .on('close', () => {
        s.success({ text: 'Changelog generated success!' })
        resolve(void 0)
      })
  })
}
