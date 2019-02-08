curl http://localhost:1337/check -w "\n ^ http%{http_code}\n\n"
curl http://localhost:1337/api/unicorns -w "\n ^ http%{http_code}\n\n"
curl http://localhost:1337/api/dragons  -w "\n ^ http%{http_code}\n\n"

## note how it doesn't work as expected without the content-type header
curl -d '{"my spoon":"is too big"}' -H 'content-type: application/json' http://localhost:1337/api/posthere -w "\n ^ http%{http_code}\n\n"
