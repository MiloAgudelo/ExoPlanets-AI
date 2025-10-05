import { currentUser } from "@clerk/nextjs/server";
import { cookies } from "next/headers";
import Script from "next/script";
import { AppSidebar } from "@/components/app-sidebar";
import { DataStreamProvider } from "@/components/data-stream-provider";
import { SpaceFooter } from "@/components/space/space-footer";
import { SpaceNavbar } from "@/components/space/SpaceNavbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, cookieStore] = await Promise.all([currentUser(), cookies()]);
  const isCollapsed = cookieStore.get("sidebar_state")?.value !== "true";

  // Transform Clerk user to match expected format
  const userForSidebar = user
    ? {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress || "",
        name:
          user.firstName && user.lastName
            ? `${user.firstName} ${user.lastName}`
            : user.firstName || user.lastName || user.username || "Usuario",
        image: user.imageUrl,
      }
    : undefined;

  return (
    <>
      <SpaceNavbar />
      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js"
        strategy="beforeInteractive"
      />
      <DataStreamProvider>
        <SidebarProvider defaultOpen={!isCollapsed}>
          <AppSidebar user={userForSidebar} />
          <SidebarInset className="pt-28 pb-16">{children}</SidebarInset>
        </SidebarProvider>
      </DataStreamProvider>
      <SpaceFooter />
    </>
  );
}
