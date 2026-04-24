# Security Policy

## Reporting a Vulnerability

Do not open a public issue for security vulnerabilities.

Instead, contact the maintainer privately through the repository owner profile and include:

1. a description of the issue
2. steps to reproduce
3. potential impact
4. a suggested fix, if you have one

## Scope

Security issues in the following are in scope:

- scripts (`*.mjs`)
- templates used for generated HTML or PDF output
- configuration defaults that may expose secrets or private data

## Out of Scope

- issues in third-party dependencies, which should be reported upstream
- issues requiring physical access to the user's machine
- social engineering attacks
- attacks against a hosted service, because Venture-Ops is a local tool

## Disclosure Policy

We follow coordinated disclosure. Once a fix is released, the reporter may be credited unless they prefer to remain anonymous.
