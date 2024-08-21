# developer.nrel.gov

Have questions, feedback, or issues with the APIs available at [developer.nrel.gov](https://developer.nrel.gov/)? [Contact us](https://developer.nrel.gov/contact/) or let us know in the [issue tracker](https://github.com/NREL/developer.nrel.gov/issues).

This repository stores the website content and documentation for [developer.nrel.gov](https://developer.nrel.gov). Contributions are welcome. To submit a change, fork this repo, commit your changes, and send us a [pull request](https://help.github.com/articles/using-pull-requests).

## Development

The content files to edit are in [`./source`](https://github.com/NREL/developer.nrel.gov/tree/master/source). To preview your changes you can use the [Middleman](https://middlemanapp.com) preview server. To run Middleman:

1. Install [Docker](https://www.docker.com/products/docker-desktop/) on your computer.
2. Checkout the `developer.nrel.gov` repository on your computer (`git clone https://github.com/NREL/developer.nrel.gov.git`).
3. For NREL employees on the NREL network: Add a `docker-compose.override.yml`, with the following contents, but substituting `REPLACE_ME` with the appropriate URL (reach out to a maintainer for this value):

    ```yaml
    services:
      web:
        build:
          args:
            NREL_ROOT_CERT_URL_ROOT: "REPLACE_ME"
    ```

4. Inside the `developer.nrel.gov` directory, run `docker compose up`.
5. View your changes at: http://localhost:4480/

### Linting

If you're working on Swagger documentation, you can run `rake lint` locally to check for potential warnings or errors with the Swagger specification files.

## Deploy

- Changes committed to the `staging` branch will automatically be deployed to the staging site.
- Changes committed to the `master` branch will automatically be deployed to the production site.

Deploys may take a few minutes after pushing before they show up. You can check the status via the Actions tab above.
