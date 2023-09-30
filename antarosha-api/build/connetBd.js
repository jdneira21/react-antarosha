"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
// Create the connection pool. The pool-specific settings are the defaults
exports.pool = (0, promise_1.createPool)({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'antarosha',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});
