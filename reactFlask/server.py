from app import app
from app.controllers import users, favorites

if __name__ == "__main__":
    app.run(debug=True)