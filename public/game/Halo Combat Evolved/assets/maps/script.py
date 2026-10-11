from pathlib import Path

folder_path = Path(r'C:\Users\Layton\Desktop\temp')

# Get only file names (excluding folders)
file_names = [f.name for f in folder_path.iterdir() if f.is_file()]

print(file_names)