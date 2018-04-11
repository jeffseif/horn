from flask import Flask
from flask import render_template


app = Flask(__name__, template_folder='')


@app.route('/')
def root():
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
