import Image from "next/image";
import Link from "next/link";
import { Bell, PlusCircle } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center" aria-label="حراج انڤست">
          <div className="relative h-14 w-40 overflow-hidden md:h-16 md:w-52">
            <Image
              src="/brand/haraj-invest-logo.png"
              alt="حراج انڤست"
              fill
              priority
              sizes="(max-width: 768px) 160px, 208px"
              className="object-contain object-right"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-slate-600 md:flex">
          <Link href="/projects" className="hover:text-slate-950">
            المشاريع
          </Link>
          <Link href="/dashboard" className="hover:text-slate-950">
            لوحة التحكم
          </Link>
          <Link href="/admin" className="hover:text-slate-950">
            الإدارة
          </Link>
          <Link href="/contact" className="hover:text-slate-950">
            تواصل
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            aria-label="الإشعارات"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -left-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-black text-white">
              1
            </span>
          </Link>

          <Link
            href="/login"
            className="rounded-2xl px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100"
          >
            دخول
          </Link>

          <Link
            href="/dashboard/projects/new"
            className="flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800"
          >
            <PlusCircle className="h-4 w-4" />
            أضف مشروعك
          </Link>
        </div>
      </div>
    </header>
  );
}
