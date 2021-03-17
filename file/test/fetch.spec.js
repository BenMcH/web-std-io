import { Response } from "@web-std/fetch"
import { File } from "@web-std/file"
import { assert } from "./test.js"

/**
 * @param {import('./test').Test} test
 */
export const test = test => {
  test("node-fetch recognizes blobs", async () => {
    // @ts-expect-error - our blob isn't one expected by node-fetch
    const response = new Response(new File(["hello"], "path/file.txt"))

    assert.equal(await response.text(), "hello")
  })
}
