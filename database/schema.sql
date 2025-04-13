CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT
);

CREATE TABLE variants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    price REAL NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE options (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE variant_options (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    variant_id INTEGER NOT NULL,
    option_id INTEGER NOT NULL,
    value TEXT NOT NULL,
    FOREIGN KEY (variant_id) REFERENCES variants(id),
    FOREIGN KEY (option_id) REFERENCES options(id)
);