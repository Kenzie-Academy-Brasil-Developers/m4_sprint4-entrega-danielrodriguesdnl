CREATE  EXTENCSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories(
    id BIGSERIAL PRIMARY KEY INTEGER UNIQUE,
    "name" VARCHAR UNIQUE,
);

CREATE TABLE IF NOT EXISTS products(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    "name" VARCHAR,
    "price" NUMERIC(2,2),
    "category_id" INTEGER,
    FOREIGN KEY (categories_id) REFERENCES categories(id)
      ON DELETE CASCADE
);