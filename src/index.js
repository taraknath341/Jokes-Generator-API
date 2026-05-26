import express from "express";
import router from "./routes.js";
import cors from "cors";
import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
   windowMs: 15 * 60 * 1000, // 15 minutes
   limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
   standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
   legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
   ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
   // store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.
const app = express();

app.use([
   cors(),
   limiter
]);

app.use((req, res, next) => {
   res.removeHeader("X-Powered-By");
   res.append("X-Developer", "Taraknath Karan (Tarak Program)");
   next();
});

app.use("/", router);

app.use((err, req, res, next) => {
   if (err?.msg) {
      return res
         .status(err.status)
         .json(err.msg);
   }
   console.error(err);
});

app.listen(3000, err => {
   console.log(err ? err.message : "Server is listen on port 3000");
});
