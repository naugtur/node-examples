# Node to production

## writing the app
- http handler
  - centralize error handling into one function/module
  - only write to response from the top layer, avoid passing req/res references down
    - input-action-output pattern

- statelessness

- frameworks (opinions)

## CI
- dependencies
  - the value of package-lock
  - supply chain security
    - vulnerabilities
    - malicious packages
    - tooling
- automated deployment
## deployment
- pm2/containers
  - load ballancing + ssl termination
    - reverse proxy
- lambdas (explore your options)

- back to statelessness
  - redis for temporary, database for permanent storage

## lifecycle
- tracing (logs to requests, requests between services)
- monitoring
  - roll your own vs paying for it
  - 2 types of metrics:
    - product/behavior
    - performance/quality/failures

- for long-running processes, internal endpoint for managing configuration (turn on more logging or monitoring on a working process)

- graceful shutdown
- zero-downtime redeploy with readiness and liveness probe
- preventing crashes under-pressure

