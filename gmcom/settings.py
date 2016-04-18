import os
from werkzeug.contrib.cache import MemcachedCache


def get_var_or(var, default=None):
    return os.environ.get(var) or default

INSTAGRAM_API_PATH = get_var_or('INSTAGRAM_API_PATH', "https://api.instagram.com/v1")
INSTAGRAM_ACCESS_TOKEN = get_var_or('INSTAGRAM_ACCESS_TOKEN', "")
INSTAGRAM_ACCOUNT_ID = get_var_or('INSTAGRAM_ACCOUNT_ID', "285042185") # my id
MEMCACHIER_SERVERS = get_var_or('MEMCACHIER_SERVERS', "127.0.0.1:11211")

CACHE = MemcachedCache(MEMCACHIER_SERVERS.split(','))

