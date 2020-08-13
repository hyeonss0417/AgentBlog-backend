export const COMMENT_FRAGMENT = `
    fragment CommentParts on Comment {
        id
        text
        user {
            username
        }
        createdAt
        updatedAt
    }
`;

export const USER_FRAGMENT = `
    fragment UserParts on User {
        id
        username
        avatar
        bio
    }
`;

export const _USER_FRAGMENT = `
        id
        username
        avatar
`;

export const MESSAGE_FRAGMENT = `
    fragment MessageParts on Message {
        id
        text
        to {
            ${_USER_FRAGMENT}
        }
        from {
            ${_USER_FRAGMENT}
        }
    }
`;
