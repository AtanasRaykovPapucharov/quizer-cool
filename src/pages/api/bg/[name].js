const Crawler = require("crawler")

export default function crow(req, resp) {
  const name = req.query.name
  const c = new Crawler({
    maxConnections: 10,
    callback: (error, res, done) => {
      if (error) {
        console.log(error)
      } else {
        // const $ = res.$
        resp.send(res.body)
        // resp.send($("#tabcont_videos").html())
      }
      done()
    },
  })

  c.queue(`https://opoznai.bg/view/${name}`)
}
