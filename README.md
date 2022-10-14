# Liane

## How to start the project

First of all, clone the project

```
git clone git@github.com:francamara/liane.git
```
or 
```
git clone https://github.com/francamara/liane.git
```

Then install dependencies
```
npm install
```

To start development mode run the following command
```
npm run dev
```

## How to start the db

First of all, make sure you have docker and docker-compose installed

```
docker --version
```
and
```
docker-compose --version
```

Then navigate to the db directory, where the yaml file resides
```
cd db
```

To start the docker network which houses the three replica set containers, simply run
```
docker-compose up -d
```

To check everything is up and running you can use
```
docker exec -it mongo1 mongo rs.status()
```
or if you're using windows (r word alert) use
```
docker exec -it mongo1 mongosh rs.status()
```


## Commit Rules
You want all the commit messages to be like this:

```
{reason_to_commit}: {short explanation}
```
For example:
```
feat: header component
```
or
```
fix: header positioning
```

Reasons to commit:

```
[
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
]
```

## TODO

- Set-up prisma CRUDs