import gql from 'graphql-tag';

export const currentUser = gql`
    {
        user {
            id
            email
        }
    }
`;

export const logoutUser = gql`
    mutation {
        logout {
            email
            id
        }
    }
`;

export const loginUser = gql`
    mutation Login($email: String, $password: String) {
        login(email: $email, password: $password) {
            email
            id
        }
    }
`;

export const signupUser = gql`
    mutation Signup($email: String, $password: String) {
        signup(email: $email, password: $password) {
            email
            id
        }
    }
`;
