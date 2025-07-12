
from flask import Flask, request, render_template
from flask_cors import CORS
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.tree import DecisionTreeClassifier

# Load and prepare data
df = pd.read_csv("iris.data", names=["sepal_length", "sepal_width", "petal_length", "petal_width", "species"])
features = df.iloc[:, 0:4]
target = df.iloc[:, -1]

encoder = LabelEncoder()
target = encoder.fit_transform(target)

x_train, x_test, y_train, y_test = train_test_split(features, target, test_size=0.2, random_state=42)
clf = DecisionTreeClassifier()
clf.fit(x_train, y_train)

# Map predictions to species name
iris_info = {
    0: ("Setosa", "Setosa is known for its small size and is often found in gardens."),
    1: ("Versicolor", "Versicolor is a medium-sized iris with various colors."),
    2: ("Virginica", "Virginica is the largest among the three and has a violet-blue hue.")
}

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return render_template("index.html", result="")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        features = [
            float(request.form['sepal_length']),
            float(request.form['sepal_width']),
            float(request.form['petal_length']),
            float(request.form['petal_width'])
        ]

        prediction = clf.predict([features])[0]
        name, desc = iris_info[prediction]
        result = f"<h2>Predicted Flower: {name}</h2><p>{desc}</p>"
    except Exception as e:
        result = f"<p style='color:red;'>Error: {e}</p>"

    return render_template("index.html", result=result)

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
