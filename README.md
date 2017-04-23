# Ghost in production

## Description

This repository contains the startup files and docker `things` to allow setup and run *Ghost* easily. The following tools and settings are used:

* `Docker` and `docker-compose` to start up everything
* Use the [official dockerized version of Ghost](https://hub.docker.com/_/ghost/). Doing this you can easily upgrade your Ghost versions by just changing the image version
* Use `nginx` to proxy the requests. This is an option to avoid expose Ghost application to internet and you can also customize it as you need
* Externalized Ghost settings, so you can take care of your data, backups, and so on
* Ready to work with Mailgun. If you have a Mailgun account then you're done!

## How to run

Copy `ghost.env.example` to `ghost.env` by running the command:

```
cp ghost.example.env ghost.env
```

Change propertie's values in the `ghost.env` file and start the applications:

```
docker-compose up -d
```

If everything is ok, point your browser to `http://<blog url>` and be happy :-)
