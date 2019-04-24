# Preparation for training

- install node with npm. We'll be using node 11 or 12
- run `npm update -g npm` (with sudo if necessary) to get the latest npm on top of that


```
mkdir node-training-sandbox
cd node-training-sandbox
git clone https://github.com/naugtur/node-examples
cd node-examples
npm install
```

## Homework to get you ready to participate

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

### Experiment

Try writing your first express server 

http://expressjs.com/en/starter/hello-world.html

Run it and check if it works with a browser or curl

