-- create coupon table
CREATE TABLE IF NOT EXISTS Coupon (
    code VARCHAR(36) NOT NULL,
    amount INT NOT NULL
);

-- insert coupons
INSERT INTO Coupon(code, amount) VALUES ('voucher10', 10);
INSERT INTO Coupon(code, amount) VALUES ('voucher50', 50);
INSERT INTO Coupon(code, amount) VALUES ('a7651150-4b4d-4530-ae6a-1c1ee682a2a0', 100);

-- create test user for back-end
CREATE USER backend WITH PASSWORD 'password';
GRANT CONNECT ON DATABASE postgres TO backend;
GRANT USAGE ON SCHEMA public TO backend;
GRANT SELECT ON Coupon TO backend;
