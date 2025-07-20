# Jobber

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/nest?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/ieyKQdpFWo)


## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve jobber-auth
```

To create a production bundle:

```sh
npx nx build jobber-auth
```

To see all available targets to run for a project, run:

```sh
npx nx show project jobber-auth
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/nest:app demo
```

To generate a new library, use:

```sh
# Generate a NestJS library (recommended for this workspace)
npx nx g @nx/nest:library --name=my-nestjs-lib --directory=libs/my-nestjs-lib --unitTestRunner=jest --no-interactive

# Generate a Node.js library (for general TypeScript utilities)
npx nx g @nx/node:lib mylib
```

**NestJS Library Examples:**
```sh
# Basic NestJS library
npx nx generate @nx/nest:library --name=shared-utils --directory=libs/shared-utils --unitTestRunner=jest --no-interactive

# Library with service included
npx nx generate @nx/nest:library --name=auth-lib --directory=libs/auth-lib --service=true --unitTestRunner=jest --no-interactive

# Buildable library (can be built independently)
npx nx generate @nx/nest:library --name=api-client --directory=libs/api-client --buildable=true --unitTestRunner=jest --no-interactive
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)


[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/nest?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:
- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Prisma Tasks

This project uses Prisma as the ORM for database management. The following Nx targets are available for Prisma operations:

### Database Migration

Create and run a new database migration:

```sh
nx run jobber-auth:migrate-prisma --name="migration_name"
```

Examples:
```sh
# Initial database setup
nx run jobber-auth:migrate-prisma --name="init"

# Add new tables
nx run jobber-auth:migrate-prisma --name="add_user_table"

# Schema updates
nx run jobber-auth:migrate-prisma --name="update_auth_schema"
```

### Generate Types

Generate Prisma client types (run after schema changes):

```sh
nx run jobber-auth:generate-types
```

### NestJS Code Generation

Generate NestJS modules, services, and other components using Nx generators:

```sh
# Generate a NestJS module
npx nx generate @nx/nest:module --path=apps/jobber-auth/src/app/module-name/module-name --no-interactive

# Generate a NestJS service
npx nx generate @nx/nest:service --path=apps/jobber-auth/src/app/service-name/service-name --no-interactive

# Generate a NestJS controller
npx nx generate @nx/nest:controller --path=apps/jobber-auth/src/app/controller-name/controller-name --no-interactive

# Generate a NestJS resolver (for GraphQL)
npx nx generate @nx/nest:resolver --path=apps/jobber-auth/src/app/resolver-name/resolver-name --no-interactive
```

### NestJS Libraries

Create reusable NestJS libraries for shared functionality:

```sh
# Create a new NestJS library
npx nx generate @nx/nest:library --name=nestjs --directory=libs/nestjs --unitTestRunner=jest --no-interactive

# Test the library
nx test nestjs

# Import GraphQL components from the library
import { AbstractModel } from '@jobber/nestjs';
```

**Library Features:**
- **Shared GraphQL models**: Base classes like `AbstractModel` for consistent entity structure
- **Type-safe imports**: Import path `@jobber/nestjs` is automatically configured
- **Jest testing**: Unit tests are set up automatically
- **GraphQL decorators**: Ready-to-use GraphQL field decorators and object types

**Available GraphQL Components:**
- `AbstractModel`: Base model class with ID field for GraphQL entities

## GraphQL API

This project includes GraphQL API capabilities using Apollo Server and NestJS GraphQL integration:

### Installation

To install the GraphQL dependencies, run:

```sh
npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql
```

### Dependencies Added

- **@apollo/server**: Apollo Server for GraphQL
- **@nestjs/apollo**: NestJS Apollo Server integration
- **@nestjs/graphql**: NestJS GraphQL module
- **graphql**: GraphQL implementation

### GraphQL Development

```sh
# Generate GraphQL resolvers
npx nx generate @nx/nest:resolver --path=apps/jobber-auth/src/app/users/users --no-interactive

# Generate GraphQL services for resolvers
npx nx generate @nx/nest:service --path=apps/jobber-auth/src/app/users/users --no-interactive
```

**Using Shared GraphQL Components:**
```typescript
// Import base model from the shared library
import { AbstractModel } from '@jobber/nestjs';

// Extend the base model in your GraphQL entities
@ObjectType()
export class User extends AbstractModel {
  @Field()
  email: string;

  @Field()
  username: string;
}
```

### GraphQL Configuration

The GraphQL module is configured in `apps/jobber-auth/src/app/app.module.ts` with:

```typescript
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver
    })
  ],
})
export class AppModule {}
```

**Configuration Options:**
- `autoSchemaFile: true` - Automatically generates GraphQL schema from TypeScript decorators
- `driver: ApolloDriver` - Uses Apollo Server as the GraphQL server implementation

### GraphQL Features

- **Code-first approach**: Define your GraphQL schema using TypeScript decorators
- **Type safety**: Automatic TypeScript type generation
- **Apollo Server integration**: Production-ready GraphQL server
- **Subscription support**: Real-time GraphQL subscriptions
- **Shared base models**: Use `AbstractModel` from `@jobber/nestjs` for consistent entity structure

### Prisma Commands Reference

- **migrate-prisma**: Creates and applies a new migration with the specified name
- **generate-types**: Generates TypeScript types from your Prisma schema

### Database Setup

1. Ensure your database connection is configured in `apps/jobber-auth/prisma/schema.prisma`
2. Run the initial migration: `nx run jobber-auth:migrate-prisma --name="init"`
3. Generate types: `nx run jobber-auth:generate-types`

### Project Configuration

The project includes automatic type generation as a build dependency:
- The `build` target depends on `generate-types`
- This ensures Prisma client types are always up-to-date before building

### Notes

- All Prisma commands run in the `apps/jobber-auth` directory context
- Migration names should be descriptive and use lowercase with underscores
- Always generate types after schema changes to keep TypeScript definitions up to date
- Use `--no-interactive` flag with generators for automation in scripts
- GraphQL playground will be available at `/graphql` endpoint in development mode
- Libraries are created in the `libs/` directory and use import paths like `@jobber/library-name`
- Run `nx test <library-name>` to test libraries independently