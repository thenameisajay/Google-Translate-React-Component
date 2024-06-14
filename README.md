# Next.js TypeScript Starter Pack with ESLint, Prettier, and Tailwind CSS

This starter pack provides a foundation for building Next.js applications with TypeScript, ESLint, Prettier, and Tailwind CSS. It includes pre-configured setups for maintaining code quality and formatting standards, along with pre-commit hooks for seamless development.

## Features

-   **Next.js**: React framework for building server-rendered applications.
-   **TypeScript**: Typed JavaScript for enhanced code quality and developer experience.
-   **ESLint**: JavaScript and TypeScript linter for maintaining code consistency.
-   **Prettier**: Opinionated code formatter for consistent code styling.
-   **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
-   **Husky**: Git hooks manager for running tasks before commits.
-   **Lint-staged**: Run linters on staged files for improved workflow efficiency.

## Setup

### Installation

1. Clone this repository.
2. Navigate to the project directory.

```bash
git clone <repository-url>
cd <project-directory>
```

3.Install dependencies.

```bash
npm install
```

### Usage

-   **Development**: Start the development server.

```bash
npm run dev
```

-   **Production**: Build the application for production.

```bash
npm run build
```

-   **Start**: Start the server in production mode.

```bash
npm start
```

-   **Format Code**: Format code according to Prettier standards.

```bash
npm run format
```

-   **Prepare (Optional)**: Manually run pre-commit hooks.

```bash
npm run prepare
```

## Configuration

You can customize ESLint and Prettier configurations as per your project requirements.

-   **ESLint Configuration**: Modify `.eslintrc.json` file.
-   **Prettier Configuration**: Modify `.prettier.config.js` file.

## Using with Django Backend

If you're using this pack for the frontend with Django as the backend, you can remove Husky and manage pre-commit hooks in the Django project. You can still manually run the pre-commit hooks using:

```bash
npm run prepare
```

This command validates types and formats the code according to the defined standards.

Feel free to contribute, report issues, or suggest improvements. Pull requests are welcome !
