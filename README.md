# Jobber

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/nest?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

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

- [Learn more about this workspace setup](https://nx.dev/nx-api/nest?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
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

**Example: Complete User Module Generation**

```sh
# Generate all components for a users module
nx g @nx/nest:module --path=apps/jobber-auth/src/app/users/users
nx g @nx/nest:service --path=apps/jobber-auth/src/app/users/users
nx g @nx/nest:resolver --path=apps/jobber-auth/src/app/users/users

# Then create your GraphQL model extending AbstractModel
# File: apps/jobber-auth/src/app/users/models/users.model.ts
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

**Important Notes:**

- GraphQL `ID` type requires string values, even if your database uses numeric IDs
- Always convert numeric database IDs to strings in your service methods
- The `AbstractModel` uses `id: string` to ensure GraphQL compatibility

## GraphQL API

This project includes GraphQL API capabilities using Apollo Server and NestJS GraphQL integration:

### Installation

To install the GraphQL dependencies, run:

```sh
npm install @nestjs/graphql @nestjs/apollo @apollo/server graphql
```

### Additional Dependencies

For complete authentication and validation functionality, also install:

```sh
npm install bcryptjs class-transformer class-validator
npm install --save-dev @types/bcryptjs
```

### JWT Authentication

For JWT-based authentication, install:

```sh
npm install @nestjs/jwt
```

### Configuration Management

For environment configuration and validation, install:

```sh
npm install @nestjs/config
```

For Git hooks, linting, and formatting automation, install:

```sh
npm install --save-dev husky lint-staged
```

After installation, set up the Git hooks:

```sh
# Initialize Husky
npx husky init

# The following files will be automatically created:
# - .husky/pre-commit (contains: npx lint-staged --relative)
# - .lintstagedrc (lint-staged configuration)
# - package.json scripts.prepare field (runs husky on npm install)
```

### Development Workflow Tools

### Dependencies Added

- **@apollo/server**: Apollo Server for GraphQL
- **@nestjs/apollo**: NestJS Apollo Server integration
- **@nestjs/graphql**: NestJS GraphQL module
- **graphql**: GraphQL implementation
- **bcryptjs**: Password hashing library
- **class-transformer**: Object transformation utilities
- **class-validator**: Validation decorators for DTOs
- **@types/bcryptjs**: TypeScript definitions for bcryptjs
- **@nestjs/config**: Configuration module for environment variables
- **@nestjs/jwt**: JWT authentication module for NestJS
- **husky**: Git hooks automation tool
- **lint-staged**: Pre-commit linting and formatting tool

### GraphQL Development

```sh
# Generate GraphQL resolvers
npx nx generate @nx/nest:resolver --path=apps/jobber-auth/src/app/users/users --no-interactive

# Generate GraphQL services for resolvers
npx nx generate @nx/nest:service --path=apps/jobber-auth/src/app/users/users --no-interactive

# Generate NestJS modules for organizing GraphQL components
npx nx generate @nx/nest:module --path=apps/jobber-auth/src/app/users/users --no-interactive
```

**Complete GraphQL Module Generation:**

```sh
# Generate all components for a new GraphQL module at once
nx g @nx/nest:resolver --path=apps/jobber-auth/src/app/users/users && \
nx g @nx/nest:service --path=apps/jobber-auth/src/app/users/users && \
nx g @nx/nest:module --path=apps/jobber-auth/src/app/users/users
```

**Using Shared GraphQL Components:**

```typescript
// Example: apps/jobber-auth/src/app/users/models/users.model.ts
import { AbstractModel } from '@jobber/nestjs';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User extends AbstractModel {
  @Field()
  email: string;

  @Field()
  username: string;
}

// Example: DTO with validation - apps/jobber-auth/src/app/users/dto/create-user.input.ts
import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsStrongPassword } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsStrongPassword()
  password: string;
}

// Example: Service with ID type conversion and password hashing
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma-clients/jobber-auth';
import { hash } from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    const user = await this.prismaService.user.create({
      data: {
        ...data,
        password: await hash(data.password, 10), // Hash password
      },
    });
    return {
      ...user,
      id: user.id.toString(), // Convert numeric ID to string for GraphQL
    };
  }

  async findAll() {
    const users = await this.prismaService.user.findMany();
    return users.map((user) => ({
      ...user,
      id: user.id.toString(), // Convert numeric ID to string for GraphQL
    }));
  }
}

// Example: Resolver with queries and mutations
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './models/users.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  async getUsers() {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }
}
```

### GraphQL Configuration

The GraphQL module is configured in `apps/jobber-auth/src/app/app.module.ts` with:

```typescript
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    UsersModule,
    ConfigModule,
    AuthModule,
  ],
})
export class AppModule {}
```

**Configuration Options:**

- `autoSchemaFile: true` - Automatically generates GraphQL schema from TypeScript decorators
- `driver: ApolloDriver` - Uses Apollo Server as the GraphQL server implementation
- `ConfigModule` - Enables environment variable configuration throughout the application

**Environment Configuration Features:**

- **Type-safe configuration**: Uses `ConfigService.getOrThrow()` to ensure required environment variables are present
- **Automatic .env loading**: ConfigModule automatically loads `.env` files in development
- **Configuration validation**: Throws errors if required configuration is missing
- **Port configuration**: Application port is configurable via `AUTH_PORT` environment variable
- **JWT configuration**: JWT secret and expiration are configurable via environment variables

## JWT Authentication

The project includes JWT-based authentication using the `@nestjs/jwt` module:

### JWT Module Configuration

The JWT module is configured in `apps/jobber-auth/src/app/auth/auth.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.getOrThrow('JWT_SECRET'),
          signOptions: {
            expiresIn: configService.getOrThrow('AUTH_JWT_EXPIRATION_IN_MS'),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
```

### JWT Configuration Features

- **Async Configuration**: Uses `registerAsync()` for dynamic configuration with environment variables
- **Type-safe Environment Variables**: Uses `ConfigService.getOrThrow()` to ensure JWT configuration is present
- **Configurable Secret**: JWT signing secret loaded from `JWT_SECRET` environment variable
- **Configurable Expiration**: Token expiration time loaded from `AUTH_JWT_EXPIRATION_IN_MS` environment variable
- **GraphQL Integration**: Ready for use with GraphQL resolvers and authentication guards

### JWT Usage in Services

```typescript
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken(payload: any) {
    return this.jwtService.sign(payload);
  }

  async verifyToken(token: string) {
    return this.jwtService.verify(token);
  }
}
```

### JWT Environment Variables

Required environment variables for JWT authentication:

- `JWT_SECRET`: Secret key for signing JWT tokens (minimum 32 characters recommended)
- `AUTH_JWT_EXPIRATION_IN_MS`: Token expiration time in milliseconds (e.g., 3600000 for 1 hour)

**Application Setup:**

```typescript
// main.ts - Global validation setup with ConfigService
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.setGlobalPrefix(globalPrefix);
  const port = app.get(ConfigService).getOrThrow('AUTH_PORT');
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
```

### GraphQL Features

- **Code-first approach**: Define your GraphQL schema using TypeScript decorators
- **Type safety**: Automatic TypeScript type generation
- **Apollo Server integration**: Production-ready GraphQL server
- **Subscription support**: Real-time GraphQL subscriptions
- **Shared base models**: Use `AbstractModel` from `@jobber/nestjs` for consistent entity structure
- **Modular architecture**: Generate complete GraphQL modules with resolvers, services, and models
- **Input validation**: Built-in validation using `class-validator` decorators
- **Password security**: Automatic password hashing with bcryptjs
- **Global validation**: Request validation with `ValidationPipe`

### Prisma Commands Reference

- **migrate-prisma**: Creates and applies a new migration with the specified name
- **generate-types**: Generates TypeScript types from your Prisma schema

### Database Setup

1. **Environment Configuration**: Copy the environment template and configure your settings:

   ```sh
   cp .env.template .env
   ```

2. **Configure Environment Variables** in `.env`:

   ```bash
   # Database connection for the auth service
   AUTH_DATABASE_URL=postgresql://username:password@localhost:5432/jobber_auth

   # Port for the auth service
   AUTH_PORT=3000

   # JWT Configuration
   JWT_SECRET=your-super-secret-jwt-signing-key-min-32-characters
   AUTH_JWT_EXPIRATION_IN_MS=3600000

   # Nx configuration (optional)
   NX_NATIVE_COMMAND_RUNNER=false
   ```

3. **Database Connection**: Ensure your database connection is configured in `apps/jobber-auth/prisma/schema.prisma`

4. **Run Initial Migration**:

   ```sh
   nx run jobber-auth:migrate-prisma --name="init"
   ```

5. **Generate Types**:
   ```sh
   nx run jobber-auth:generate-types
   ```

### Project Configuration

The project includes automatic type generation as a build dependency:

- The `build` target depends on `generate-types`
- The `test` target depends on `generate-types` for consistent type definitions
- The `serve` target has `runBuildTargetDependencies: true` to ensure all dependencies are built
- This ensures Prisma client types are always up-to-date before building, testing, or serving

### Notes

- All Prisma commands run in the `apps/jobber-auth` directory context
- Migration names should be descriptive and use lowercase with underscores
- Always generate types after schema changes to keep TypeScript definitions up to date
- Copy `.env.template` to `.env` and configure your environment variables before starting development
- Use `--no-interactive` flag with generators for automation in scripts
- GraphQL playground will be available at `/graphql` endpoint in development mode
- Libraries are created in the `libs/` directory and use import paths like `@jobber/library-name`
- Run `nx test <library-name>` to test libraries independently
- Create GraphQL models in `models/` subdirectories for better organization
- Always extend `AbstractModel` for consistent GraphQL entity structure
- **Important**: Convert numeric database IDs to strings in service methods for GraphQL compatibility
- GraphQL `ID` scalar type only accepts string values, not numbers
- Use `@IsEmail()`, `@IsStrongPassword()` and other class-validator decorators for input validation
- Password hashing is automatically handled in the service layer using bcryptjs
- Global validation is enabled with `ValidationPipe({ whitelist: true })` to strip unknown properties
- The application uses ConfigService for type-safe environment variable access
- JWT authentication is configured with environment-based secrets and expiration times
- Use strong, randomly generated secrets for JWT_SECRET in production environments

## Git Workflow and Code Quality

This project includes automated Git hooks for code quality enforcement using Husky and lint-staged.

### Git Hooks Setup

The project is configured with pre-commit hooks that automatically:

- Run ESLint with auto-fix on TypeScript/JavaScript files
- Format all files with Prettier
- Only process staged files for optimal performance

### Testing Git Hooks

To test that your Git hooks are working correctly:

**Method 1: Make a real change (Recommended)**

```sh
# Make a small change to test the hooks
echo "// Test comment" >> apps/jobber-auth/src/main.ts
git add .
git commit -m "test: verify git hooks are working"

# Remove the test comment afterwards
git reset HEAD~1
git checkout -- apps/jobber-auth/src/main.ts
```

**Method 2: Force empty commit**

```sh
git commit --allow-empty -m "test: verify git hooks with empty commit"
```

**Method 3: Use files with intentional formatting issues**

```sh
# Create a file with formatting issues
echo "const  x =    1   ;   console.log(x)" > test-formatting.ts
git add test-formatting.ts
git commit -m "test: check auto-formatting"
# The file will be automatically formatted before commit
```

### Understanding Git Hook Behavior

- ✅ **"Prevented an empty git commit!" message**: This is **expected behavior** when no changes are made by linting/formatting tools
- ✅ This means your hooks are working correctly - they ran successfully but found no issues to fix
- ✅ Your code is already properly formatted and linted

### Git Hook Configuration Files

- `.husky/pre-commit`: Contains the command that runs before each commit
- `.lintstagedrc`: Configuration for what tools run on which file types
- `package.json`: Contains the "prepare" script that sets up Husky

### Lint-staged Configuration

Current configuration in `.lintstagedrc`:

```json
{
  "*.{ts,tsx,js,jsx}": ["nx affected -t lint --fix --files"],
  "*": ["nx format:write --files"]
}
```

This configuration:

- Runs ESLint with auto-fix on TypeScript and JavaScript files using Nx affected
- Runs Prettier formatting on all files using Nx format
- Only processes files that are staged for commit
- Uses Nx's affected computation for optimal performance
