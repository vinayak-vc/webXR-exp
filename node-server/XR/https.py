from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import ssl
import os

class MyHTTPHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            if self.path == '/x':
                self.path = '/WebXR.html'
                self.serve_file(self.path[1:])
            
            # Handle requests for marker pattern files and other static files
            elif self.path.startswith('/Markers/') or self.path.startswith('/video/'):
                self.serve_file(self.path[1:])  # Remove the leading '/' from the path

            elif self.path.startswith('/getVideoUrl'):
                query = self.path.split('?')[-1]
                params = dict(qc.split('=') for qc in query.split('&'))
                marker_id = params.get('marker')

                video_urls = {
                    'marker1': 'https://ia804600.us.archive.org/27/items/10_20240612_202406/1.mp4',
                    'marker2': 'https://ia804600.us.archive.org/27/items/10_20240612_202406/2.mp4',
                    'marker3': 'https://ia804600.us.archive.org/27/items/10_20240612_202406/3.mp4',
                    'marker4': 'https://ia804600.us.archive.org/27/items/10_20240612_202406/4.mp4',
                    'marker5': 'https://ia804600.us.archive.org/27/items/10_20240612_202406/5.mp4',
                    'marker6': 'https://ia804600.us.archive.org/27/items/10_20240612_202406/6.mp4',
                    'marker7': 'https://ia804600.us.archive.org/27/items/10_20240612_202406/7.mp4',
                    'marker8': 'https://ia804600.us.archive.org/27/items/10_20240612_202406/8.mp4',
                    'marker9': 'https://ia804600.us.archive.org/27/items/10_20240612_202406/9.mp4',
                    'marker10': 'https://ia804600.us.archive.org/27/items/10_20240612_202406/10.mp4'
                }

                video_url = video_urls.get(marker_id, '')

                if video_url:
                    self.send_response(200)
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
                    self.send_header('Access-Control-Allow-Headers', 'Content-Type')
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(json.dumps({'url': video_url}).encode('utf-8'))
                else:
                    self.send_response(404)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(json.dumps({'error': 'Marker not found'}).encode('utf-8'))
            else:
                self.send_response(404)
                self.send_header('Content-Type', 'text/plain')
                self.end_headers()
                self.wfile.write(b'404 Not Found')
        except Exception as e:
            print(f'Error Occurd {e}')

    def do_HEAD(self):
        if self.path.endswith(".mp4"):
            self.serve_file(self.path)
        else:
            self.do_GET()

    def serve_file(self, file_path):
        try:
            file_path =  "XR/" + file_path
            with open(file_path, 'rb') as file:
                content = file.read()
                self.send_response(200)
                self.send_header('Content-Type', self.guess_type(file_path))
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(content)
        except Exception as e:
            self.send_response(404)
            self.send_header('Content-Type', 'text/plain')
            self.end_headers()
            self.wfile.write(f'File not found: {file_path}'.encode('utf-8'))
            
    def guess_type(self, path):
        ext = os.path.splitext(path)[1]
        if ext in ['.html', '.htm']:
            return 'text/html'
        if ext in ['.jpg', '.jpeg']:
            return 'image/jpeg'
        if ext == '.png':
            return 'image/png'
        if ext == '.gif':
            return 'image/gif'
        if ext == '.js':
            return 'application/javascript'
        if ext == '.css':
            return 'text/css'
        if ext == '.json':
            return 'application/json'
        if ext == '.mp4':
            return 'video/mp4'
        if ext == '.patt':
            return 'application/octet-stream'
        return 'application/octet-stream'

def run(server_class=HTTPServer, handler_class=MyHTTPHandler, port=443):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting httpd server on port {port}')
    httpd.socket = ssl.wrap_socket(
        httpd.socket,
        keyfile="C:/Windows/System32/key.pem",
        certfile="C:/Windows/System32/server.crt",
        server_side=True
    )
    httpd.serve_forever()

if __name__ == "__main__":
    run()
