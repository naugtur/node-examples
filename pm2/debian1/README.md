# Howto

Install vagrant
Install ansible
```
pip install ansible
```

replace `INSERT_PUBKEY` in ops/ with your public ssh key
replace `PATH_TO_PRIVATE_KEY` with the path to private key in ecosystem.json in the root of this repository

Run

```
vagrant up --provision
```

And then deploy:

once:
```
pm2 deploy ecosystem.json dev setup
```

each new time:
```
pm2 deploy ecosystem.json dev
```
