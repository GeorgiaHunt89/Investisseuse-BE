const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    role: String
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
    companyName: String
    description: String
    website: String
    logo: String
    sharePrice: Int
    shareQuantity: Int
    pitchDeck: String
    category: Category
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
      role: String!
    ): User
    addBusiness(
      companyName: String
      description: String
      website: String
      logo: String
      sharePrice: Int
      shareQuantity: Int
      pitchDeck: String
      category: Category
    ): Business
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
