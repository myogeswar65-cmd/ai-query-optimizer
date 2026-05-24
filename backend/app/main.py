from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Input model
class QueryInput(BaseModel):
    query: str

# Home route
@app.get("/")
def home():
    return {
        "message": "AI Query Optimizer Backend Running"
    }

# Optimization route
@app.post("/optimize")
def optimize(data: QueryInput):

    original_query = data.query
    query = data.query.upper()

    issues = []

    optimized_query = original_query

    suggested_index = "No index suggestion"

    performance_gain = "Estimated 30% faster"

    # Detect SELECT *
    if "SELECT *" in query:
        issues.append("Avoid using SELECT *")

        optimized_query = optimized_query.replace(
            "SELECT *",
            "SELECT id,name,email"
        )

    # Detect missing WHERE clause
    if "WHERE" not in query:
        issues.append(
            "Query has no WHERE clause, may scan entire table"
        )

    # Detect LOWER()
    if "LOWER(" in query:
        issues.append(
            "LOWER() prevents index usage"
        )

        performance_gain = "Estimated 70% faster"

    # Detect ORDER BY
    if "ORDER BY" in query:
        issues.append(
            "ORDER BY may require sorting optimization"
        )

    # Suggest email index
    if "EMAIL" in query:

        suggested_index = (
            "CREATE INDEX idx_users_email "
            "ON users(email);"
        )

    # Suggest user_id index
    elif "USER_ID" in query:

        suggested_index = (
            "CREATE INDEX idx_orders_user_id "
            "ON orders(user_id);"
        )

    # No issues fallback
    if len(issues) == 0:
        issues.append("No major issues detected")

    return {

        "original_query": original_query,

        "issues": issues,

        "optimized_query": optimized_query,

        "suggested_index": suggested_index,

        "performance_gain": performance_gain
    }