# Learn to debug on simplified cases

Some very basic monitoring tools are built into the app. They're not all production grade, but at least they're simple to read.

run the server

```
node problemServer.js
```

and then make a request to 
```
http://localhost:1337/problem/NAME
```

Full list:

[simple throw](http://localhost:1337/problem/iThrow)  
[event loop blocking](http://localhost:1337/problem/iBlock)  
[memory leak](http://localhost:1337/problem/iLeak)  
[memory leak - less obvious](http://localhost:1337/problem/iLeak2)  
[broken promise usage](http://localhost:1337/problem/iLie)  
[run out of memory](http://localhost:1337/problem/iRunOut)  
[run out of memory asynchronously](http://localhost:1337/problem/iRunOut2)  
[huge tree of promises](http://localhost:1337/problem/iDoAlot)  

Use this to get heapdumps in the memory leak examples
[make a heapdump](http://localhost:1337/heapdump)  

## Tools

- Performance and memory tabs in chromium devtools
- `blocked` and `blocked-at` packages
- node clinic

### clinic

```
clinic doctor --autocannon [ /problem/iLie --method GET -d 5 ] -- node problemServer.js
clinic flame --autocannon [ /problem/iBlock --method GET -d 5 ] -- node problemServer.js
clinic flame --autocannon [ /problem/iDoAlot --method GET -d 5 ] -- node problemServer.js
clinic heapprofiler --autocannon [ /problem/iLeak2 --method GET -d 5 ] -- node problemServer.js
clinic heapprofiler --autocannon [ /problem/iDoAlot --method GET -d 5 ] -- node problemServer.js
```

### allocation timeline
```
node --inspect problemServer.js
```
- connect devtools, memory->allocation timeline
- open iDoAlot
- look at the timeline as it runs!