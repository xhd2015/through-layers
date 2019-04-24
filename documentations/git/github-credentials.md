# Links
store the password, and set expire time
```bash
$ git config credential.helper store
$ git config --global credential.helper 'cache --timeout 7200'
```