import os, json, re

main_js_path = '/Users/aaaaaaaa/SaaS/Meilleur menuserie du Benin/js/main.js'
base_dir = '/Users/aaaaaaaa/SaaS/Meilleur menuserie du Benin/Image'

with open(main_js_path, 'r') as f:
    content = f.read()

# Extract existing galleryData
match = re.search(r'const galleryData = (\{.*?\});\n\n// LIGHTBOX LOGIC', content, re.DOTALL)
if match:
    try:
        # Convert JS object to JSON by replacing single quotes or unquoted keys if necessary
        # Fortunately the previous galleryData was valid JSON
        gallery_data = json.loads(match.group(1))
    except json.JSONDecodeError:
        print("Error parsing existing galleryData JSON")
        sys.exit(1)
else:
    print("Could not find galleryData in main.js")
    sys.exit(1)

# Categories to dynamically update from directories
categories = {
    "cuisines-haut-standing": "Cuisines de haut standing",
    "dressings-lumineux-luxueux": "Dressings lumineux luxeux",
    "lit": "LIT",
    "dressing-individuel": "Dressing individuel",
    "meubles-tv": "Meubles TV"
}

# Update arrays based on current folder contents
for key, folder_name in categories.items():
    folder_path = os.path.join(base_dir, folder_name)
    if os.path.exists(folder_path):
        files = [f for f in os.listdir(folder_path) if not f.startswith('.')]
        files.sort()
        gallery_data[key] = [f"Image/{folder_name}/{f}" for f in files]
        print(f"Updated {key} with {len(files)} images.")
    else:
        print(f"Warning: Folder not found: {folder_path}")

# Reconstruct the file content
new_gallery_str = "const galleryData = " + json.dumps(gallery_data, indent=2) + ";"
new_content = content[:match.start()] + new_gallery_str + content[match.end():]

with open(main_js_path, 'w') as f:
    f.write(new_content)

print("js/main.js successfully updated.")
