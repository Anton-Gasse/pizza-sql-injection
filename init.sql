-- create coupon table
CREATE TABLE IF NOT EXISTS Coupon (
    id SERIAL PRIMARY KEY,
    code VARCHAR(20) NOT NULL,
    description VARCHAR(256) NOT NULL
);

-- insert coupons
INSERT INTO Coupon(code, description) VALUES ('test100', 'Coupon Code for test purposes. Gives 100% off.');
INSERT INTO Coupon(code, description) VALUES ('test50', 'Coupon Code for test purposes. Gives 50% off.');
