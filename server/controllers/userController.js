const bodyParser = require("body-parser");
const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

exports.view = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log("Connected as ID " + connection.threadId);

        connection.query(
            "SELECT * FROM user WHERE status ='ACTIVE'",
            (err, rows) => {
                connection.release();

                if (!err) {
                    res.render("home", { rows });
                } else {
                    console.log(err);
                }
            }
        );
    });
};

// Search Function
exports.find = (req, res) => {
    let searchTerm = req.body.search;
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log("Connected as ID " + connection.threadId);

        connection.query(
            "SELECT * FROM user WHERE firstname LIKE ? OR lastname LIKE ?", ["%" + searchTerm + "%", "%" + searchTerm + "%"],
            (err, rows) => {
                connection.release();

                if (!err) {
                    res.render("home", { rows });
                } else {
                    console.log(err);
                }
            }
        );
    });
};

//Add a New User Form
exports.createUserForm = (req, res) => {
    res.render("add-user");
};

//Add a New User Script
exports.createUserFunction = (req, res) => {
    const { firstname, lastname, email, phone, comments } = req.body;
    unique_id = Math.random().toString(36).slice(2, 12);
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log("Connected as ID " + connection.threadId);

        connection.query(
            "INSERT INTO user SET unique_id = ?, firstname = ?, lastname = ?, email = ?, phone = ?, comments = ?", [unique_id, firstname, lastname, email, phone, comments],
            (err, rows) => {
                connection.release();

                if (!err) {
                    res.render("add-user", {
                        userCreateAlert: "Account Added Successfully",
                    });
                } else {
                    console.log(err);
                }
            }
        );
    });
};

exports.editUser = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log("Connected as ID " + connection.threadId);

        connection.query(
            "SELECT * FROM user WHERE id = ?", [req.params.id],
            (err, rows) => {
                connection.release();
                if (!err) {
                    res.render("edit-user", { rows });
                } else {
                    console.log(err);
                }
            }
        );
    });
};

exports.updateUser = (req, res) => {
    const { firstname, lastname, email, phone, comments } = req.body;
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log("Connected as ID " + connection.threadId);

        connection.query(
            "UPDATE user SET firstname = ?, lastname = ?, email = ?, phone = ?, comments = ? WHERE id = ?", [firstname, lastname, email, phone, comments, req.params.id],
            (err, rows) => {
                connection.release();
                if (!err) {
                    pool.getConnection((err, connection) => {
                        if (err) throw err; //not connected
                        console.log("Connected as ID " + connection.threadId);
                        connection.query(
                            "SELECT * FROM user WHERE id = ?", [req.params.id],
                            (err, rows) => {
                                connection.release();
                                if (!err) {
                                    res.render("edit-user", {
                                        rows,
                                        userUpdateAlert: `${firstname} has been Updated`,
                                    });
                                } else {
                                    console.log(err);
                                }
                            }
                        );
                    });
                } else {
                    console.log(err);
                }
            }
        );
    });
};

// Delete An Account
exports.deleteUser = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log("Connected as ID " + connection.threadId);

        connection.query(
            "UPDATE user SET status = ? WHERE unique_id = ?", ["DEACTIVATED", req.params.unique_id],
            (err, rows) => {
                connection.release();
                if (!err) {
                    res.redirect("/");
                } else {
                    console.log(err);
                }
            }
        );
    });
};

exports.viewUser = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err; //not connected
        console.log("Connected as ID " + connection.threadId);

        connection.query(
            "SELECT * FROM user WHERE unique_id = ?", [req.params.unique_id],
            (err, rows) => {
                connection.release();
                if (!err) {
                    res.render("view-user", { rows });
                } else {
                    console.log(err);
                }
            }
        );
    });
};