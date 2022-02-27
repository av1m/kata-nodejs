# Kata-nodeJS

## Problem description 🚩

The problem consists in extracting data from a JSON file too big to be parsed / hold in memory as a whole.

The file is a valid JSON file, consisting in an array of objects. The structure of objects is not known, apart from the fact that they have an `id` and a `name` attributes.

The formatting of the file is not known: it may be a single line file, or formatted using a variety of whitespace options.

The problem consists in writing a Node.js program which must:

* accept an `id` as a command-line argument
* log to the console the `name` attribute of the object with the corresponding id.

To simulate low memory constraints, your program should work with `node --max_old_space_size=50`

```bash
> node --max_old_space_size=50 solution.js 62359
Damon Jerde // logged to the console
```

## Get started 🎉

Clone the repository:

```bash
git clone https://github.com/av1m/kata-nodejs.git
cd kata-nodejs
```

Install the dependencies:

```bash
npm ci
```

## Run the application 🏃

You can run the application with a predefined search:

```bash
npm start
```

If you want to specify the search, you can use the following command (for example):

```bash
# npm run search <number>
npm run search 10 # Search the id 10
```

## Docker 📦

You can run the application with docker-compose:

```bash
docker-compose up -d
docker exec -it kata-nodejs npm run start
# Or if you want to search the person that have the id 10
docker exec -it kata-nodejs npm run search 10
```

Don't forget to stop your container:

```bash
docker-compose down
```

## CLI ⌨️

The CLI can be found in the [`cli.js`](cli.js) file.
A library (such as [commander](https://www.npmjs.com/package/commander), [oclif](https://github.com/oclif/oclif)) has not been used because it's a really simple CLI and it doesn't unnecessarily increase the code (and depending on a library etc.)
