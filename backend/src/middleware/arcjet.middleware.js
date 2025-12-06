import { aj } from "../services/arcjet.service.js";

export const arcjetMiddleware = async (req, res, next) => {
  try {
    
    const decision = await aj.protect(req, { requested: 5 }); // Deduct 5 tokens from the bucket
  
    console.log("Arcjet decision", decision);
  
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        res.writeHead(429, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Too Many Requests" }));
  
      } else if (decision.reason.isBot()) {
        res.writeHead(403, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "No bots allowed" }));
  
      } else {
        res.writeHead(403, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Forbidden" }));
  
      }
  
    } else if (decision.ip.isHosting()) {
      // Requests from hosting IPs are likely from bots, so they can usually be
      // blocked. However, consider your use case - if this is an API endpoint
      // then hosting IPs might be legitimate.
      // https://docs.arcjet.com/blueprints/vpn-proxy-detection
      res.writeHead(403, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Forbidden" }));
  
    } else {
      next();
    }
  } catch (error) {
    console.log(`Error: ${error}`)
    next(error)
  }
};