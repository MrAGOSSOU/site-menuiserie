import os

# Update css/style.css
with open("css/style.css", "r") as f:
    css = f.read()

# Fix btn-primary transparent border so it matches btn-secondary height exactly
if "border: 1px solid transparent;" not in css:
    css = css.replace("  background: var(--c-blanc);\n  color: var(--c-espresso);", "  background: var(--c-blanc);\n  color: var(--c-espresso);\n  border: 1px solid transparent;")

# Fix hero-ctas alignment
old_hero_ctas = """.hero-ctas {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}"""
new_hero_ctas = """.hero-ctas {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
}"""
css = css.replace(old_hero_ctas, new_hero_ctas)

with open("css/style.css", "w") as f:
    f.write(css)

print("Fixed button alignment.")
