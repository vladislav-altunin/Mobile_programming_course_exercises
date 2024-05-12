CREATE TABLE IF NOT EXISTS Categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('Expense', 'Income', 'Savings'))
);

CREATE TABLE IF NOT EXISTS Transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER,
    amount REAL NOT NULL,
    date INTEGER NOT NULL,
    description TEXT,
    type TEXT NOT NULL CHECK (type IN ('Expense', 'Income', 'Savings')),
    FOREIGN KEY (category_id) REFERENCES Categories (id)
);

-- insert categoties
INSERT INTO Categories (name, type) VALUES ('Utilities', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Groceries', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Transport', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Miscellaneous', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Wages', 'Income');
INSERT INTO Categories (name, type) VALUES ('Dividents', 'Income');
INSERT INTO Categories (name, type) VALUES ('Bonuses', 'Income');
INSERT INTO Categories (name, type) VALUES ('Other', 'Income');
INSERT INTO Categories (name, type) VALUES ('Transfer', 'Savings');

-- insert transactions
INSERT INTO Transactions (category_id, amount, date, description, type) VALUES (1, 166.50, 1709295834, 'Electricity winter', 'Expense');
INSERT INTO Transactions (category_id, amount, date, description, type) VALUES (2, 301.20, 1711628634, 'Food for the month', 'Expense');
INSERT INTO Transactions (category_id, amount, date, description, type) VALUES (3, 55, 1709468634, 'HSL card', 'Expense');
INSERT INTO Transactions (category_id, amount, date, description, type) VALUES (4, 44.80, 1710937434, 'Drinking out', 'Expense');
INSERT INTO Transactions (category_id, amount, date, description, type) VALUES (5, 2475, 1711887834, 'Net income', 'Income');
INSERT INTO Transactions (category_id, amount, date, description, type) VALUES (6, 227.50, 1709900634, 'From investments', 'Income');
INSERT INTO Transactions (category_id, amount, date, description, type) VALUES (7, 945.50, 1711887834, 'Quarterly bonus', 'Income');
INSERT INTO Transactions (category_id, amount, date, description, type) VALUES (8, 200, 1709555034, 'Old phone trade in', 'Income');
INSERT INTO Transactions (category_id, amount, date, description, type) VALUES (9, 250, 1709555034, 'Reqular monthly', 'Savings');