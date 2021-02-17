/** * @param {string} hostname */
export default (hostname) =>
  /** @param {Express.Request} req  */
  (req) => req.hostname == hostname
