"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { href: "/", label: "Inicio" },
  { href: "https://nasaspaceappschallenge.streamlit.app/", label: "Analizar Datos", external: true },
  { href: "/chat", label: "Asistente IA" },
];

export function SpaceNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <nav className="glass-card fixed top-4 right-4 left-4 z-50 rounded-2xl border border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link className="group flex items-center gap-3" href="/">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
              <Image
                alt="ExoPlanet AI Logo"
                className="object-contain"
                height={56}
                src="/images/exoplanet-logo.png"
                width={56}
              />
            </div>
            <span className="font-bold font-space-grotesk text-xl transition-colors group-hover:text-primary">
              ExoPlanet - AI
            </span>
          </Link>

          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    className="font-medium text-sm text-white/70 transition-colors hover:text-primary"
                    href={item.href}
                    key={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <Link
                  className={`font-medium text-sm transition-colors hover:text-primary ${
                    pathname === item.href ? "text-primary" : "text-white/70"
                  }`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            {isLoaded ? (
              isSignedIn && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-white/5"
                      type="button"
                    >
                      <Image
                        alt={
                          user.primaryEmailAddress?.emailAddress ??
                          "User Avatar"
                        }
                        className="rounded-full"
                        height={32}
                        src={
                          user.imageUrl ||
                          `https://avatar.vercel.sh/${user.primaryEmailAddress?.emailAddress}`
                        }
                        width={32}
                      />
                      <span className="font-medium text-sm">
                        {user.firstName ||
                          user.primaryEmailAddress?.emailAddress}
                      </span>
                      <ChevronDown className="h-4 w-4 text-white/70" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-2 py-1.5 text-sm text-white/70">
                      {user.primaryEmailAddress?.emailAddress}
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link className="cursor-pointer" href="/dashboard">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link className="cursor-pointer" href="/chat">
                        Mis Chats
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer text-red-400 focus:text-red-400"
                      onSelect={() => {
                        signOut(() => router.push("/"));
                      }}
                    >
                      Cerrar Sesión
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link
                    className="px-4 py-2 font-medium text-sm text-white/70 transition-colors hover:text-white"
                    href="/sign-in"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    className="rounded-lg bg-primary px-4 py-2 font-medium text-sm transition-colors hover:bg-primary/90"
                    href="/sign-up"
                  >
                    Comenzar
                  </Link>
                </>
              )
            ) : (
              <div className="h-10 w-32 animate-pulse rounded-lg bg-white/10" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
