import type { JWT as DefaultJWT } from "next-auth/jwt";
import type { DefaultSession, User } from "next-auth";

declare module "next-auth/jwt" {
     interface JWT extends DefaultJWT {
        data: User;
    }
}

declare module "next-auth" {
     interface UserObject {
        userId: string;
        first_name: string;
        last_name: string;
        username: string;
        profile_pic: string;
        primary_user_type: string;
        emailVerified: Date | null;
        mentor_profile?: {
            mentor_id: string;
        };
    }
     interface BackendAccessJWT {
        access: string;
    }
     interface User {
        token: string;
        user: UserObject;
    }
     interface Session extends DefaultSession {
        user: UserObject;
        token: string;
    }
}
