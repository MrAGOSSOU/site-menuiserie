import os

# 1. Update index.html
with open("index.html", "r") as f:
    html = f.read()

# Fix Pourquoi nous choisir image
html = html.replace('src="Image/image-pdg.JPG"', 'src="Image/pourquoi_nous.jpg"')

with open("index.html", "w") as f:
    f.write(html)

# 2. Update css/style.css
with open("css/style.css", "r") as f:
    css = f.read()

# Fix hero height and padding
old_hero = """.hero {
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}"""

new_hero = """.hero {
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 150px;
  padding-bottom: 150px;
}"""
css = css.replace(old_hero, new_hero)

# Fix hero buttons wrapping (flex-wrap) to avoid squishing on mobile
old_hero_ctas = """.hero-ctas {
  display: flex;
  gap: 1rem;
}"""
new_hero_ctas = """.hero-ctas {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}"""
css = css.replace(old_hero_ctas, new_hero_ctas)

# Ensure scroll-indicator is at the very bottom, taking less vertical space if needed
old_scroll = """.scroll-indicator {
  position: absolute;
  bottom: 3rem;
  left: var(--px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  opacity: 0.6;
}"""
new_scroll = """.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: var(--px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  opacity: 0.6;
}"""
css = css.replace(old_scroll, new_scroll)

with open("css/style.css", "w") as f:
    f.write(css)

print("Applied fixes for image and header spacing.")
