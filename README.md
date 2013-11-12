# developer.nrel.gov

The website content for developer.nrel.gov built with [nanoc](http://nanoc.ws).

All contributions are welcome. To submit a change, fork this repo, commit your changes, and send us a [pull request](https://help.github.com/articles/using-pull-requests).

## Setup

Ruby 1.9+ is required to build the site.

```sh
$ bundle install
```

## Development

The content files to edit are in `./content`. Nanoc will compile the site into static HTML files inside `./output`:

```sh
$ nanoc compile
```

You can view the output on a local web server built-in to nanoc:

```sh
$ nanoc view
$ open http://localhost:3000
```

After you're happy with your changes, commit and submit a pull request.

## Deploy

To publish your changes to staging at http://devstage.nrel.gov:

```sh
$ cap staging deploy
```

To publish your changes to production at http://developer.nrel.gov:

```sh
$ cap production deploy
```

To updated the shared development sandbox at http://devdev.nrel.gov:

```sh
$ ssh devdev.nrel.gov
$ cd /srv/developer/developer.nrel.gov/main
$ git pull
$ cap development deploy
```
