# Barebones project as example for issue

## Expected

- `'/'` path ignored and doesn't show in `/docs`
- `'/hello'` showing normally

## Got

- No endpoints appear in `/docs`
- If you remove `'/'` from the `ignore` on `config/swagger.ts` it works
