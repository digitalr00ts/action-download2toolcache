import * as tc from '@actions/tool-cache'

export async function extract(uri: string, file: string): Promise<string> {
  if (uri.endsWith(`.tar.gz`)) {
    return tc.extractTar(file)
  }
  if (uri.endsWith(`.pkg`)) {
    return tc.extractXar(file)
  }
  if (uri.endsWith(`.7z`)) {
    return tc.extract7z(file)
  }
  if (uri.endsWith(`.zip`)) {
    return tc.extractZip(file)
  }

  return file
}
