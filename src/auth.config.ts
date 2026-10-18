import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";
import { db, connectDatabase } from "./prisma/db";

const requiredEnv = [
        "AUTH_SECRET",
        "AUTH_GITHUB_ID",
        "AUTH_GITHUB_SECRET",
] as const;

function getRequiredEnv(key: (typeof requiredEnv)[number]) {
        const value = process.env[key];

        if (!value || value.trim() === "") {
                throw new Error(
                        `Missing required environment variable: ${key}`,
                );
        }

        return value;
}

export const env = {
        AUTH_SECRET: getRequiredEnv("AUTH_SECRET"),
        AUTH_GITHUB_ID: getRequiredEnv("AUTH_GITHUB_ID"),
        AUTH_GITHUB_SECRET: getRequiredEnv("AUTH_GITHUB_SECRET"),
};

export const authConfig: NextAuthConfig = {
        secret: env.AUTH_SECRET,

        session: {
                strategy: "jwt",
        },

        providers: [
                GitHub({
                        clientId: env.AUTH_GITHUB_ID,
                        clientSecret: env.AUTH_GITHUB_SECRET,
                }),
        ],

        callbacks: {
                async signIn({ profile }) {
                        // Check provider
                        //if (account?.provider !== 'github' ) return false;

                        const githubId = Number(profile.id);
                        console.log(githubId)
                        // Upsert user into DB

                        await connectDatabase();

                        await db.User.upsert({
                                where: {github_id:githubId},
                                create: { 
                                        github_id: githubId,
                                        github_username: String(profile.login),
                                        full_name: profile.name ? String(profile.name) : null,
                                        email: profile.email ? String(profile.email) : null,
                                        avatar_url: profile.avatar_url ? String(profile.avatar_url) : null,
                                      },
                                      update: {
                                        github_username: String(profile.login),
                                        full_name: profile.name ? String(profile.name) : null,
                                        email: profile.email ? String(profile.email) : null,
                                        avatar_url: profile.avatar_url ? String(profile.avatar_url) : null,
                                      },
                        });

                        return Boolean(profile);
                },

                async jwt({ token, profile }) {
                        if (profile?.id) {
                                token.id = String(profile.id);
                        }

                        return token;
                },

                async session({ session, token }) {
                        if (token.id && session.user) {
                                session.user.id = String(token.id);
                        }

                        return session;
                },
        },

        trustHost: true,
};
