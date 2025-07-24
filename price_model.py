import numpy as np
from sklearn.linear_model import LinearRegression

# Dummy training dataset
# Features: [description_length, keyword_score]
X = np.array([
    [20, 1],   # small product
    [50, 2],   # medium
    [100, 3],  # large
    [150, 4]   # very large
])

# Target prices
y = np.array([200, 400, 600, 800])  # in ₹

# Train a simple linear regression model
model = LinearRegression()
model.fit(X, y)

# Test it
desc_len = 80
keyword_score = 2  # found some keywords
predicted_price = model.predict([[desc_len, keyword_score]])
print("Predicted Price:", round(predicted_price[0]))
