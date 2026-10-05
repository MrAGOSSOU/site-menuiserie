import os

with open("css/style.css", "r") as f:
    css = f.read()

# Fix tablet alignment
if ".hero-left { margin: 0 auto; }" in css:
    css = css.replace(".hero-left { margin: 0 auto; }", ".hero-left { margin: 0 auto; }\n  .hero-ctas { justify-content: center; }")

# Fix mobile alignment
old_mobile_ctas = """  .hero-ctas { flex-direction: column; }
  .btn-primary, .btn-secondary { width: 100%; }"""

new_mobile_ctas = """  .hero-ctas { 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    width: 100%; 
  }
  .btn-primary, .btn-secondary { 
    width: 100%; 
    max-width: 320px; 
    text-align: center; 
    justify-content: center; 
  }"""

css = css.replace(old_mobile_ctas, new_mobile_ctas)

with open("css/style.css", "w") as f:
    f.write(css)

print("Fixed mobile CTA button centering.")
