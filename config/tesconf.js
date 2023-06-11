// Load environment variables from .env file
require("dotenv").config();

module.exports = {
  // Konfigurasi untuk pengembangan
  development: {
    username: process.env.MYSQL_USERNAME, // Nama pengguna MySQL
    password: process.env.MYSQL_PASSWORD, // Kata sandi MySQL
    database: process.env.MYSQL_DATABASE, // Nama basis data MySQL
    host: process.env.MYSQL_HOST, // Host MySQL
    dialect: process.env.MYSQL_DIALECT, // Dialek MySQL (misalnya, mysql, postgres, sqlite)
  },
  // Konfigurasi untuk pengujian
  test: {
    username: process.env.MYSQL_USERNAME, // Nama pengguna MySQL
    password: process.env.MYSQL_PASSWORD, // Kata sandi MySQL
    database: process.env.MYSQL_DATABASE, // Nama basis data MySQL
    host: process.env.MYSQL_HOST, // Host MySQL
    dialect: process.env.MYSQL_DIALECT, // Dialek MySQL (misalnya, mysql, postgres, sqlite)
  },
  // Konfigurasi untuk produksi
  production: {
    username: process.env.MYSQL_USERNAME, // Nama pengguna MySQL
    password: process.env.MYSQL_PASSWORD, // Kata sandi MySQL
    database: process.env.MYSQL_DATABASE, // Nama basis data MySQL
    host: process.env.MYSQL_HOST, // Host MySQL
    dialect: process.env.MYSQL_DIALECT, // Dialek MySQL (misalnya, mysql, postgres, sqlite)
    dialectOptions: {
      socketPath: process.env.MYSQL_HOST.startsWith("/path/to/socket")
        ? process.env.MYSQL_HOST // Path soket MySQL
        : undefined, // Path soket tidak ditentukan jika tidak diawali dengan '/path/to/socket'
    },
  },
};
