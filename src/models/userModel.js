import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },

    name: {
      type: String,
      required: true,
    },

    cpf: {
      type: Number,
      required: true,
    },

    birthDate: {
      type: Date,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      min: 6,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    number: {
      type: Number,
      required: true,
    },
    complement: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    zipcode: {
      type: Number,
      min: 8,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

/*users.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Error, invalid e-mail.');*/

const users = mongoose.model("users", userSchema);

export default users;
