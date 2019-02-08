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

Use this to get heapdumps in the memory leak examples
[make a heapdump](http://localhost:1337/heapdump)
