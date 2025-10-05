import { currentUser } from "@clerk/nextjs/server";

export type UserType = "guest" | "regular";

export type Session = {
  user: {
    id: string;
    email: string;
    name?: string;
    image?: string;
    type: UserType;
  };
  expires: string;
} | null;

/**
 * Authentication function that integrates Clerk with the chat system
 * Returns a session object compatible with next-auth format
 */
export async function auth(): Promise<Session> {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return null;
  }

  // Extract user information from Clerk
  const email = clerkUser.emailAddresses[0]?.emailAddress || "";
  const name =
    clerkUser.firstName && clerkUser.lastName
      ? `${clerkUser.firstName} ${clerkUser.lastName}`
      : clerkUser.firstName ||
        clerkUser.lastName ||
        clerkUser.username ||
        "User";

  // Determine user type
  // Guests are identified by email starting with "guest-"
  // You can customize this logic based on your needs
  const userType: UserType = email.startsWith("guest-") ? "guest" : "regular";

  // Calculate expiration time (30 days from now)
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30);

  return {
    user: {
      id: clerkUser.id,
      email,
      name,
      image: clerkUser.imageUrl,
      type: userType,
    },
    expires: expiresAt.toISOString(),
  };
}

/**
 * Helper function to get user ID from session
 */
export async function getUserId(): Promise<string | null> {
  const session = await auth();
  return session?.user?.id || null;
}

/**
 * Helper function to check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const session = await auth();
  return session !== null;
}

/**
 * Helper function to check if user is a guest
 */
export async function isGuest(): Promise<boolean> {
  const session = await auth();
  return session?.user?.type === "guest";
}

/**
 * Helper function to check if user is a regular user
 */
export async function isRegularUser(): Promise<boolean> {
  const session = await auth();
  return session?.user?.type === "regular";
}
