from http.server import SimpleHTTPRequestHandler, HTTPServer
import os
import requests
from urllib.parse import urljoin

class CustomRequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if not self.path_exists():
            self.download_missing_path()
        super().do_GET()

    def path_exists(self):
        if self.path == '/':
            return True
        translated_path = self.translate_path(self.path)
        return os.path.exists(translated_path)

    def download_missing_path(self):
        base_url = "https://14795171320512817430.playables.usercontent.goog/v/assets"
        path = self.path
        full_url = base_url + path
        translated_path = self.translate_path(self.path)
        directory = os.path.dirname(translated_path)
        
        # Create necessary directories
        os.makedirs(directory, exist_ok=True)
        
        try:
            response = requests.get(full_url, stream=True)
            response.raise_for_status()
            
            # Save the file
            with open(translated_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    if chunk:  # Filter out keep-alive chunks
                        f.write(chunk)
            print(f"Downloaded {full_url} to {translated_path}")
            return True
        except Exception as e:
            print(f"Failed to download {full_url}: {e}")
            return False

if __name__ == '__main__':
    server_address = ('', 8008)
    httpd = HTTPServer(server_address, CustomRequestHandler)
    print("Server running on port 8000...")
    httpd.serve_forever()