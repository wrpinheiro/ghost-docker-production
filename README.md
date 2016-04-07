# Ghost production with Docker

## Description

This repository contains the startup files and script to run the [dockerized version of Ghost](https://hub.docker.com/_/ghost/). The settings here allow you to store the Ghost content files (apps, images, themes and db) in a volume in the host machine. The configuration file is ready to work with a Mailgun account.

## How to run

Make a copy of `ghost.example.env` with the name `ghost.env` by running the command:

```
cp ghost.example.env ghost.env
```

Change the value of properties GHOST_URL, GHOST_MAIL_USER and GHOST_MAIL_PASSWORD in the `ghost.env` file.

Copy the content of the `ghost` directory to `/var/lib/ghost` with:

```
cp -R ./ghost/ /var/lib/ghost
```

Now run the `start.sh` script.

```
chmod +x ./start.sh
./start
```

Check if the container is running with `docker ps` and also check the logs with `docker logs <container_id>`

If everything is ok the application should be running on port 80.

## Things to do

* When container starts it creates another versions of `config.js` file
* Start automatically the container after a reboot
