# حراج الفرص والمشاريع MVP

مشروع Next.js أولي لمنصة **حراج الفرص والمشاريع**: سوق منظم لعرض المشاريع والفرص التجارية، مع واجهة عربية RTL ولوحات تحكم وإدارة.

## التشغيل

```bash
npm install
npm run dev
```

افتح: `http://localhost:3000`

## الصفحات

- `/` الصفحة الرئيسية
- `/projects` المشاريع العامة
- `/projects/[slug]` تفاصيل مشروع
- `/login` و `/register`
- `/dashboard` لوحة المستخدم
- `/dashboard/projects/new` إضافة مشروع
- `/dashboard/my-projects` مشاريعي
- `/dashboard/interests` طلبات الاهتمام
- `/dashboard/profile` الملف الشخصي
- `/notifications` الإشعارات
- `/admin` لوحة الإدارة
- `/admin/projects` مراجعة المشاريع
- `/admin/categories` إدارة التصنيفات
- `/admin/users` إدارة المستخدمين
- `/admin/reports` البلاغات
- `/admin/contact-messages` رسائل التواصل
- `/contact`, `/terms`, `/privacy`

## Supabase

ملف SQL المبدئي داخل: `supabase/schema.sql`

انسخ `.env.example` إلى `.env.local` وأضف مفاتيح Supabase عند الربط.

## ملاحظة

هذه نسخة MVP قابلة للتشغيل ببيانات تجريبية. الربط الكامل مع Supabase يتم تدريجيًا عبر الجداول والسياسات الموجودة في مجلد `supabase`.


## Build fix

هذه النسخة تثبّت Next.js 14 وTailwind 3 لتجنب خطأ build الناتج عن استخدام `latest` على Vercel.
