# TeamBoard

Team Feedback Board for the AI-Accelerated Software Development Workshop.

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
| `v2-cards` | S3 | Full CRUD for cards |
| `v2-cards-vulnerable` | S4 start | Cards with 8 planted vulnerabilities |
| `v3-secure` | S4 | Input validation + XSS protection |
| `v4-skills` | S5 | Skill + subagent configs in .claude/ |
| `v5-hooks` | S6 | Hooks in settings.json |
