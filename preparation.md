# Preparation for training

- install node with npm. We'll be using node 16
- run `npm update -g npm` (with sudo if necessary) to get the latest npm on top of that


```
npm i -g clinic autocannon debugging-aid
mkdir node-training-sandbox
cd node-training-sandbox
git clone https://github.com/naugtur/node-examples
cd node-examples
npm ci
cd promises-async
npm ci
```


## Check if you're ready to participate
### First time ever:

If you have never run any node app on your machine, it's worth trying it first.

```
mkdir homework
cd homework
npm init -y
echo 'console.log("works")' > app.js
```

Now check if you can run the app

```
node app.js
```

it should print "works"

### Warmup if you're not a beginner:

Go to promises-async and do the task nr1. Use asynchronous functions and output result with console.log
```
node 01.chains.js 
Another boring tie in a box wrapped in paper wrapped in ribbons sprinkled with glitter 
```