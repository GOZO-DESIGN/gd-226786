# Project architecture
- Mount programme promotions once inside the router, using session-scoped frequency history and the shared accessible dialog/button system, so navigation does not reset prompts.
- Use a scroll-based exit-intent approximation on touch devices without intercepting navigation or browser history, because true browser exit cannot safely display a custom mobile dialog.