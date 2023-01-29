import liga1_2022_23 from "../../data/liga1men/liga1_2022-23"

export default function handle(req, res) {
  const { season = undefined } = req.query
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')
  switch (season) {
    case "2022-23":
      return res.status(200).json(liga1_2022_23)
    default:
      return res.status(400).json({ error: { message: "A valid season parameter has to be provided." }})
  }
}