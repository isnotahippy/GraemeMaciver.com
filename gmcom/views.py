from gmcom import blueprint
from flask import render_template
from flask.views import MethodView

class HomeView(MethodView):

    def get(self):
        return render_template('home.html')



blueprint.add_url_rule('/', view_func=HomeView.as_view('Home'))