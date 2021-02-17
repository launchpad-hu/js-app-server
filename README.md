# JSAppServer

NOTE: this does not work yet.

The purpose of this tool is to provide fast deploys, incremental rollouts and AB tests,
for those who think 10 minutes is too long for a build with deploy.

Contrary to the name, this is not a server, but a middleware for various kinds of servers.

## How it works

Your app is deployed as usual for the first time. But whenever you need to deploy only new JS code,
(bug fixes, new features), you can do it through JSAppServer, no need to redeploy the entire app.

JSAppServer hooks into the entry points of your app, and decides which version of your app to execute.
Chooses a frontend and a backend version simultaneously.

## Features

- route between app versions based on
  - hostname
  - incremental rollout
  - cookie
  - user id
- receive updates to app and settings through REST
  - with authentication
- persist settings in a configurable location

## Installing

### In express

## Features
