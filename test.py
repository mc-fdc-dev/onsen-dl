import requests


session = requests.Session()
HEADERS = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "ja,en-US;q=0.9,en;q=0.8",
    "Connection": "keep-alive",
    "Host": "onsen-ma3phlsvod.sslcs.cdngc.net",
    "Origin": "https://www.onsen.ag",
    "Referer": "https://www.onsen.ag/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Windows"
}

r = session.get("https://www.onsen.ag/web_api/commercials?program_id=277")
print(r.text)
r = session.get("https://onsen-ma3phlsvod.sslcs.cdngc.net/onsen-ma3pvod/_definst_/202210/lycoris-recoil221024q3wz-15.mp4/chunklist.m3u8")
print(r.status_code)