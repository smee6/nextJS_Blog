// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
export const sessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "TestPageCookieName",
    cookieOptions: {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
    }
};