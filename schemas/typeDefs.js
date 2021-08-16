const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    role: Boolean
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Category {
    _id: ID
    name: String
  }

  type Business {
    _id: ID
    companyName: String
    description: String
    website: String
    logo: String
    sharePrice: Int
    shareQuantity: Int
    pitchDeck: String
    category: String
    owner: User
  }

  type Investments {
    _id: ID
    investor: User
    business: Business
    shareNumber: Int
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      role: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
      role: Boolean
    ): User
    addBusiness(
      companyName: String
      description: String
      website: String
      logo: String
      sharePrice: Int
      shareQuantity: Int
      pitchDeck: String
      category: String
    ): Business
    updateBusiness(
      companyName: String
      description: String
      website: String
      logo: String
      sharePrice: Int
      shareQuantity: Int
      pitchDeck: String
      category: String
    ): Business
    addInvestments(shareNumber: Int): Investments
    updateInvestments(shareNumber: Int): Investments
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
