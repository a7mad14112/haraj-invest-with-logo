import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-8 md:flex-row md:items-center">
        <div>
          <div className="brand-ruqaa text-3xl font-bold text-slate-950">حراج الفرص والمشاريع</div>
          <div className="mt-1 text-sm text-slate-500">سوق منظم للفرص التجارية والمشاريع.</div>
        </div>
        <div className="flex flex-col gap-3 text-sm text-slate-500 md:items-end">
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-slate-950">الشروط والأحكام</Link>
            <Link href="/privacy" className="hover:text-slate-950">سياسة الخصوصية</Link>
            <Link href="/contact" className="hover:text-slate-950">تواصل معنا</Link>
          </div>
          <div>© 2026 حراج الفرص والمشاريع. جميع الحقوق محفوظة.</div>
        </div>
      </div>
    </footer>
  );
}
