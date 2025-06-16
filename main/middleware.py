import requests
from decouple import config

class DiscordNotificationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        if request.path == '/':  # Notify only on homepage visits
            self.send_discord_notification(request)
        return response

    def send_discord_notification(self, request):
        webhook_url = config('WEBHOOK_URL')
        ip = request.META.get('REMOTE_ADDR', 'unknown IP')
        referrer = request.META.get('HTTP_REFERER', 'unknown referrer')
        user_agent = request.META.get('HTTP_USER_AGENT', 'unknown user agent')

        message = (
            f"@everyone New visit on michel.dev\n"
            f"IP: {ip}\n"
            f"Referrer: {referrer}\n"
            f"User-Agent: {user_agent}"
        )

        try:
            requests.post(webhook_url, json={"content": message})
        except Exception as e:
            print(f"Discord webhook failed: {e}")
