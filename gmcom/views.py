from gmcom import blueprint
from flask import render_template, abort, request
from flask.views import MethodView
import urllib2

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

blueprint.add_url_rule('/', view_func=HomeView.as_view('Home'))
