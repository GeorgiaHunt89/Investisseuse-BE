const { AuthenticationError } = require("apollo-server-express");
const { User, Business, Investments } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    addBusiness: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        const business = await Business.create({
          ...args,
          owner: context.user._id,
        });

        const fullBusiness = await Business.findById(business._id).populate(
          "owner"
        );

        return fullBusiness;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateBusiness: async (parent, args, context) => {
      if (context.user) {
        return await Business.findByIdAndUpdate(context.business._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not logged in");
    },
    addInvestments: async (parent, args, context) => {
      console.log(context.user);
      if (context.user) {
        const investments = await Investments.create({
          ...args,
          investor: context.user._id,
          business: context.business._id,
        });

        const fullInvestment = await Investments.findById(investments._id)
          .populate("investor")
          .populate("business");

        return fullInvestment;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateInvestments: async (parent, args, context) => {
      if (context.user) {
        return await Investments.findByIdAndUpdate(
          context.investments._id,
          args,
          {
            new: true,
          }
        );
      }
      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
