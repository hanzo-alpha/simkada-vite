# Atomist Open Source Security Policies and Procedures

This document outlines security procedures and general policies for the
Atomist Open Source projects as found on https://github.com/atomist.

* [Reporting a Vulnerability](#reporting-a-vulnerability)
* [Disclosure Policy](#disclosure-policy)

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible receiving such patches depend on the CVSS v3.0
Rating:

| CVSS v3.0 | Supported Versions                        |
| --------- | ----------------------------------------- |
| 9.0-10.0  | Releases within the previous three months |
| 4.0-8.9   | Most recent release                       |

## Reporting a Vulnerability

The Atomist OSS team and community take all security vulnerabilities
seriously. Thank you for improving the security of our open source
software. We appreciate your efforts and responsible disclosure and will
make every effort to acknowledge your contributions.

Report security vulnerabilities by emailing the Atomist security team at:

    security@atomist.com

Please report (suspected) security vulnerabilities to **[security@ory.sh](mailto:security@ory.sh)**. You will receive a response
from us within 48 hours. If the issue is confirmed, we will release a patch as soon as possible depending on complexity but
historically within a few days.

## Disclosure Policy

When the security team receives a security bug report, they will assign it
to a primary handler. This person will coordinate the fix and release
process, involving the following steps:

* Confirm the problem and determine the affected versions.
* Audit code to find any potential similar problems.
* Prepare fixes for all releases still under maintenance. These fixes
  will be released as fast as possible to NPM.
