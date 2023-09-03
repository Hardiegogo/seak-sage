import mongoose from "mongoose";

interface IAdmin {
  username: string;
  password: string;
}

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

export default Admin;