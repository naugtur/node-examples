# Preparation for training

- install node with npm. We'll be using node 12
- run `npm update -g npm` (with sudo if necessary) to get the latest npm on top of that


```
mkdir node-training-sandbox
cd node-training-sandbox
git clone https://github.com/naugtur/node-examples
cd node-examples
npm ci
cd promises-async
npm ci
```


## Homework to get you ready to participate
If you have noever run any node app on your machine, it's worth trying it first.

### Prepare:
```
mkdir homework
cd homework
npm init -y
echo 'console.log("works")' > app.js
npm install express
```

Now check if you can run the app

```
node app.js
```

it should print "works"


### Experiment (optional)

Try writing your first express server 

http://expressjs.com/en/starter/hello-world.html

Run it and check if it works with a browser or curl

