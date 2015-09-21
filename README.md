# developer.nrel.gov

Have questions, feedback, or issues with the APIs available at [developer.nrel.gov](https://developer.nrel.gov/)? Let us know in the [issue tracker](https://github.com/NREL/developer.nrel.gov/issues).

## Notes 

To edit this site, edit the `Master` branch.  Changes should take effect within minutes.  

The website content for developer.nrel.gov built with [Middleman](http://middlemanapp.com).

All contributions are welcome. To submit a change, fork this repo, commit your changes, and send us a [pull request](https://help.github.com/articles/using-pull-requests).

## Setup

Ruby 1.9+ is required to build the site.

```sh
$ git submodule update --init --recursive # Make sure to pull in git submodules
$ gem install bundler
$ bundle install --binstubs
```

## Development

The content files to edit are in `./source`. You can view your changes as you make them by running the Middleman preview server:

```sh
$ ./bin/middleman server
```

This will start a local web server running at [http://localhost:4567/](http://localhost:4567/)

After you're happy with your changes, commit and submit a pull request.

## Deploy

Your changes will automatically be published to GitHub Pages when they get pushed to master. Wait a few minutes after pushing them for the changes to appear, or check the [build status](https://circleci.com/gh/NREL/developer.nrel.gov) for progress or errors.
