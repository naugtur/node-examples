---
_class: invert
marp: true
---
![bg right:44% 90%](https://nodejs.org/static/images/logo.svg)
# <!--fit--> Node to production
---

## writing the app


- http handler
  - centralize error handling into one function/module
  - only write to response from the top layer, avoid passing req/res references down
    - input-action-output pattern

---

## statelessness
- all local state can be lost without hurting users

---

## frameworks (opinions)
- express 
  - old, performance of midlewares
  - worth knowing, not much to know
- fastify 
  - good express replacement, no middlewares, 
  - great performance and validation by default
- nest
  - angular style architecture 
  - batteries included - in truckloads
  - built on top of express, can use fastify, but not with all performance benefits
- sails 
  - ruby on rails style
  - built on top of express anyway

---

## CI
- dependencies
  - the value of package-lock
  - supply chain security
    - vulnerabilities
    - malicious packages
    - tooling
- automated deployment
---
## deployment
- pm2/containers
  - load ballancing + ssl termination
    - reverse proxy
    - ssl via node is a waste
- lambdas (explore your options)
  - netlify
  - vercel
  - cloudflare workers etc.

---

## deployment and  statelessness
- redis for temporary, database for permanent storage
- horizontal scale
- graceful shutdown
- zero-downtime redeploy with readiness and liveness probe
- preventing crashes under-pressure

---

## lifecycle
- tracing (logs to requests, requests between services)
- monitoring
  - APM: roll your own vs paying for it
  - 2 types of metrics:
    - product/behavior
    - performance/quality/failures

- for long-running processes, internal endpoint for managing configuration (turn on more logging or monitoring on a working process)

## performance metrics
- CPU/MEM obviously
- loop blocking
- loop utilization
- hrtime, perf hooks
