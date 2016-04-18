from gmcom import blueprint
from gmcom import settings
from flask import render_template, abort, request
from flask.views import MethodView
import urllib2
import requests
import json

class HomeView(MethodView):

    def get(self):

        accept = request.accept_mimetypes.best_match(['application/json', 'text/html'])

        if accept == 'application/json':
            try:
                req = urllib2.Request("https://registry.jsonresume.org/graememaciver.json", 
                    headers={'User-Agent' : "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36"}) 
                cv_json = urllib2.urlopen(req).read()
                return cv_json
            except:
                return abort(500)
        else:
            return render_template('home.html')

class ImagesView(MethodView):

    def get_instagram_images(self):
        """
        Get images urls from instagram for my username
        """
        clean_images = None #settings.CACHE.get('instagram_images')

        if not clean_images:
            instagram_user = requests.get(url='%s/users/%s/media/recent' % (settings.INSTAGRAM_API_PATH, settings.INSTAGRAM_ACCOUNT_ID,),
                                          params=dict(access_token=settings.INSTAGRAM_ACCESS_TOKEN))

            if instagram_user.status_code == 200:
                content = json.loads(instagram_user.content)['data']
                clean_images = []
                
                for image in content:
                    clean_images.append(image['images']['low_resolution']['url'])

                settings.CACHE.set('instagram_images', clean_images, 3600)

        return clean_images



    def get(self):

        accept = request.accept_mimetypes.best_match(['application/json', 'text/html'])

        if accept == 'application/json':
            return json.dumps(self.get_instagram_images())

        return abort(400)



blueprint.add_url_rule('/', view_func=HomeView.as_view('Home'))
blueprint.add_url_rule('/api/images', view_func=ImagesView.as_view('Images'))
