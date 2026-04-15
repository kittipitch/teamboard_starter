# TeamBoard — Legacy Edition

Team Feedback Board for the AI-Accelerated Software Development Workshop.

**Used in**: S1 (Setup), S2 (Brownfield Practice)

> **Note**: This is the brownfield base repo. For security audit exercises (S2/S4), use [teamboard_vulnerable](https://github.com/kittipitch/teamboard_vulnerable).

## Quick Start

```bash
bun install
bun server.js
# Open http://localhost:3000/health
```

## Workshop Checkpoints

If you fall behind, catch up with:
```bash
git stash
git checkout <tag>
bun install
bun server.js
```

| Tag | After Session | State |
|:----|:-------------|:------|
| `v0-starter` | Pre-workshop | Bare repo, no routes |
| `v1-setup` | S1 | /health + /boards endpoints |
| `v2-cards` | (reference) | Full CRUD for cards |
| `v3-secure` | S4 | Input validation + XSS protection |
| `v4-skills` | S5 | Skill + subagent configs in .claude/ |
| `v5-hooks` | S6 | Hooks in settings.json |

## Related Repos

| Repo | Used In | Purpose |
|:----|:--------|:--------|
| [teamboard_vulnerable](https://github.com/kittipitch/teamboard_vulnerable) | S2, S4 | 8 planted security vulnerabilities — audit target |
| [ai-agent-setup](https://github.com/kittipitch/ai-agent-setup) | Pre-workshop | Installation instructions |

---

*Part of the AI-Accelerated Software Development Workshop*
