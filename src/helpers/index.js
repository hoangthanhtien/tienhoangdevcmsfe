/**
 * readMarkDownFile.
 * @description Read mark down file content and return as string
 * @param {} path
 */
export const readMarkDownFile = (path) => {
  import(path).then((res) =>
    fetch(res.default)
      .then((response) => response.text())
      .then((response) => response)
      .catch((err) => console.log(err)),
  )
}
