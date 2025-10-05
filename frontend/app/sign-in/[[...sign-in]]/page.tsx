import { SignIn } from "@clerk/nextjs";
import { SpaceNavbar } from "@/components/space/SpaceNavbar";
import { SpaceFooter } from "@/components/space/SpaceFooter";

export default function SignInPage() {
  return (
    <>
      <SpaceNavbar />
      <div className="flex min-h-screen items-center justify-center pt-24 pb-16">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-zinc-900 border border-zinc-800",
            },
          }}
        />
      </div>
      <SpaceFooter />
    </>
  );
}

