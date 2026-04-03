# Apollo CLI - Your personal tool to daily

> My personal Swiss Army knife for the terminal. Automating the boring stuff so I can focus on what matters.

![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

**Apollo CLI** (`apollo`) is a command-line tool built to automate my daily development tasks, from standardizing Git commits to integrating Artificial Intelligence directly into the terminal.

## Current Features

- **Git Automator (`apollo git`):** Interactive flow to add, commit (with standardized prefixes like `feat`, `fix`, `chore`), and push code in seconds.
- **Apollo AI (`apollo chat`):** Integrated chat with Google Gemini (Flash model) supporting streaming responses, perfect for quick questions without leaving the terminal.
- **Rich Interface:** Interactive menus, loading spinners, and keyboard navigation, ensuring a smooth and beautiful user experience.

## Tech Stack

- **[TypeScript](https://www.typescriptlang.org/)** - Base language.
- **[Commander.js](https://github.com/tj/commander.js)** - Command structuring and routing.
- **[@clack/prompts](https://github.com/natemoo-re/clack)** - Visual interface, animations, and interactive keyboard inputs.
- **[zx](https://github.com/google/zx)** - Execution of system (shell) commands with modern syntax.

---

## Prerequisites

To run this project on your machine, you'll need **Node.js** (version 18+ recommended). 

## How to Install and Run Locally

1. Clone this repository:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/apollo-cli.git](https://github.com/YOUR_USERNAME/apollo-cli.git)
   cd apollo-cli
   ```

2. Install dependecies:
   ```bash
   npm install
   ```

3. Compile the Typescript code:
   ```bash
   npm run build
   ```
4. Create a global link on your machine:
   ```bash
   npm link
   ```

Made with ☕ and TypeScript by Carlos Antunes (@carlusnz-dev).