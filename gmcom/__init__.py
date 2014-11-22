from flask import Flask, Blueprint

app = Flask(__name__) #, static_url_path='//127.0.0.1:5000')

if __name__ == '__main__':
    app.run()

blueprint = Blueprint('gmcom', __name__, template_folder='templates')

def register_blueprints(app):
    # Prevents circular imports
    app.register_blueprint(blueprint)

from street import views

register_blueprints(app)
