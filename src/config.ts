import * as core from '@actions/core'

export interface Config {
  uri: string
  name: string
  version: string
  command?: string
  subPath?: string
  creds?: string
}

export function getConfig(): Config {
  const uri: string = core.getInput('uri')
  if (!uri) {
    core.warning('uri was not set')
  }
  const name: string = core.getInput('name')
  if (!name) {
    core.warning('name was not set')
  }
  const version: string = core.getInput('version')
  if (!version) {
    core.warning('version was not set')
  }
  const command: string = core.getInput('command')
  const subPath: string = core.getInput('subPath')

  const auth_username = core.getInput('auth username')
  const auth_password = core.getInput('auth_password')
  const creds =
    auth_username && auth_password ? Buffer.from(`${auth_username}:${auth_password}`).toString('base64') : ''

  return {uri, name, version, command, subPath, creds}
}
