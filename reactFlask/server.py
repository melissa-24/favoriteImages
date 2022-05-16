from app import app
from flask_app.controllers import users, favrites

if __name__ == "__main__":
    app.run(debug=True)