export const userLogin = 
  `query (
    $email: String!,
    $password: String!,
  ) {
      userLogin (
        email: $email,
        password: $password,
      ) {
        status
      }
    }`