import http.server
import ssl

class MyHTTPHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = '/XR/WebXR.html'  # Set the default index page
        try:
            # Open the file specified by the path
            file_to_open = open(self.path[1:]).read()
            self.send_response(200)
        except FileNotFoundError:
            # If the file is not found, send a 404 error
            file_to_open = "File not found"
            self.send_response(404)
        self.end_headers()
        self.wfile.write(bytes(file_to_open, 'utf-8'))

def run_https_server():
    server_address = ('', 443)
    httpd = http.server.HTTPServer(server_address, MyHTTPHandler)
    httpd.socket = ssl.wrap_socket(httpd.socket, keyfile="C:\Windows\System32\key.pem", certfile="C:\Windows\System32\server.crt", server_side=True)
    httpd.serve_forever()

if __name__ == "__main__":
    run_https_server()
