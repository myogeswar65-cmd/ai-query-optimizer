from sqlalchemy import create_engine

DATABASE_URL = "postgresql://postgres:yogi1234@localhost/optimizerdb"

engine = create_engine(DATABASE_URL)