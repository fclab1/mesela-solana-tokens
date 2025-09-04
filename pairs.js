export default async function handler(req, res) {
  try {
    const r = await fetch("https://api.dexscreener.com/latest/dex/pairs/solana");
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "API hata", details: e.message });
  }
}
