yaml-json-cli
==
YAML to JSON command line utility

## Usage

```sh
npm exec -- https://github.com/mitchallen/yaml-json-cli input.yml > ~/output.json
```

### With min flag

```sh
npm exec -- https://github.com/mitchallen/yaml-json-cli input.yml -m > ~/output.json
```

### Create an alias

Since the above command is too long to rememeber, create an alias:

* Open ~/.zshrc in a code editor
* Add this line (replacing my git URL with yours):

```sh
alias y2j="npm exec --yes -- https://github.com/mitchallen/yaml-json-cli";
```

* Save the file
* From the command line, run this command:
```sh
source ~/.zshrc
```
* Run the command:
```sh
y2j input.yml > ~/output.json
```
* Run with min flag:
```sh
y2j input.yml -m > ~/output.json
```

## Test

```sh
node index.js ./demo/input.yaml
```

### Test with min flag

```sh
node index.js ./demo/input.yaml -m
```