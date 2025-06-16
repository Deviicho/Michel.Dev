import requests
from decouple import config

class DiscordNotificationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        if request.path == '/':  # Notify only on homepage visits
            self.send_discord_notification(request)
        if 'fbclid' in request.GET:
            self.send_discord_notification2(request)
        return response

    def send_discord_notification(self, request):
        webhook_url = config('WEBHOOK_URL')
        ip = request.META.get('REMOTE_ADDR', 'unknown IP')
        message = f"@everyone New visit on michel.dev from {ip}"
        requests.post(webhook_url, json={"content": message})
        
    def send_discord_notification2(self):
        webhook_url = config('WEBHOOK_URL')
        message = f"@everyone New visit on michel.dev from instagram !"
        requests.post(webhook_url, json={"content": message})
