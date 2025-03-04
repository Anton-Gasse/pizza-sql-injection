-- create coupon table
CREATE TABLE IF NOT EXISTS Coupon (
    code VARCHAR(36) PRIMARY KEY,
    amount INT NOT NULL
);

CREATE TABLE IF NOT EXISTS Scoreboard (
    username VARCHAR(64) PRIMARY KEY
);

-- insert coupons
INSERT INTO Coupon(code, amount) VALUES ('voucher10', 10);
INSERT INTO Coupon(code, amount) VALUES ('voucher50', 50);
INSERT INTO Coupon(code, amount) VALUES ('a7651150-4b4d-4530-ae6a-1c1ee682a2a0', 100);

-- create test user for back-end
CREATE USER coupon_user WITH PASSWORD POSTGRES_PASSWORD;
GRANT CONNECT ON DATABASE postgres TO coupon_user;
GRANT USAGE ON SCHEMA public TO coupon_user;
GRANT SELECT ON Coupon TO coupon_user;

CREATE USER scoreboard_user WITH PASSWORD $POSTGRES_PASSWORD;
GRANT CONNECT ON DATABASE postgres TO scoreboard_user;
GRANT USAGE ON SCHEMA public TO scoreboard_user;
GRANT INSERT ON Scoreboard TO scoreboard_user;
GRANT SELECT ON Scoreboard To scoreboard_user;