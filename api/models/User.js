const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  role: String
});

const RealUser = mongoose.model("User", userSchema);

const dbPath = path.join(__dirname, "../mock_db.json");

if (!global.mockUsersArray) {
  global.mockUsersArray = [];
}

function readLocalUsers() {
  // Try /tmp fallback first since it is updated at runtime
  try {
    const tmpPath = path.join("/tmp", "mock_db.json");
    if (fs.existsSync(tmpPath)) {
      const data = JSON.parse(fs.readFileSync(tmpPath, "utf8"));
      if (data && data.length > 0) {
        global.mockUsersArray = data;
        return global.mockUsersArray;
      }
    }
  } catch (e) {
    // Ignore tmp read errors
  }

  // Fallback to static packaged database
  try {
    if (fs.existsSync(dbPath)) {
      const data = JSON.parse(fs.readFileSync(dbPath, "utf8"));
      if (data && data.length > 0) {
        global.mockUsersArray = data;
        return global.mockUsersArray;
      }
    }
  } catch (e) {
    // Ignore read errors
  }

  return global.mockUsersArray;
}

function writeLocalUsers(users) {
  global.mockUsersArray = users;
  try {
    fs.writeFileSync(dbPath, JSON.stringify(users, null, 2), "utf8");
  } catch (e) {
    // If it's read-only file system, write to /tmp
    try {
      const tmpPath = path.join("/tmp", "mock_db.json");
      fs.writeFileSync(tmpPath, JSON.stringify(users, null, 2), "utf8");
    } catch (err) {
      console.error("Error writing mock DB to /tmp:", err);
    }
  }
}

class MockUser {
  constructor(data) {
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
    this.phone = data.phone;
    this.role = data.role;
  }

  async save() {
    const users = readLocalUsers();
    const idx = users.findIndex(u => u.email === this.email);
    if (idx >= 0) {
      users[idx] = this;
    } else {
      users.push(this);
    }
    writeLocalUsers(users);
    return this;
  }

  static async findOne(query) {
    const users = readLocalUsers();
    if (query && query.email) {
      const user = users.find(u => u.email === query.email);
      return user ? new MockUser(user) : null;
    }
    return null;
  }
}

const UserProxy = new Proxy(class {}, {
  construct(target, args) {
    const ActualClass = global.useLocalDB ? MockUser : RealUser;
    return new ActualClass(...args);
  },
  get(target, prop) {
    const ActualClass = global.useLocalDB ? MockUser : RealUser;
    return ActualClass[prop];
  }
});

module.exports = UserProxy;
