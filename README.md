# پیش‌نمایش زنده دیگ — راهنمای فارسی

این پوشه یک پروژه Next.js 16 + React 19 است که با **خروجی خود Agent** و **کامپوننت‌های واقعی دیگ** کار می‌کند. کد کامپوننت دیگ در ZIP جعل نشده است؛ نصب کامپوننت‌ها باید از CLI رسمی انجام شود.

## ۱) آماده‌کردن ریپازیتوری

یک مخزن GitHub برای این پروژه در نظر بگیرید؛ اگر همان مخزن ورک‌فلوی n8n را دارید، فایل‌های **داخل** پوشه `dig-preview-app` را در ریشه آن آپلود کنید، نه در زیرپوشه `dig-preview-app` (تا `package.json` در ریشه مخزن باشد). از GitHub > Add file > Upload files می‌توانید استفاده کنید. پوشه `generated/` قبلی را پاک نکنید.

## ۲) نصب واقعی دیگ — فقط یک‌بار

در GitHub روی **Code > Codespaces > Create codespace on main** کلیک کنید. در Terminal این دستورها را اجرا کنید (هیچ‌کدام کد JavaScript نیستند):

```bash
npm install
npx digdesign@latest init
npx digdesign@latest add https://docs.digdesign.ir/r/button.json
npx digdesign@latest add https://docs.digdesign.ir/r/card.json
npx digdesign@latest add https://docs.digdesign.ir/r/text-field.json
npx digdesign@latest add https://docs.digdesign.ir/r/checkbox.json
npx digdesign@latest add https://docs.digdesign.ir/r/label.json
npx digdesign@latest add https://docs.digdesign.ir/r/textarea.json
npm run build
```

اگر در `digdesign init` سوالی پرسیده شد، مسیرهای پروژه را مطابق src و @/* تایید کنید. اگر CLI به علت تفاوت نسخه فایل‌های پایه را تغییر داد، تغییرات آن را نگه دارید. اگر build خطا داشت، خطا را قبل از ادامه برطرف کنید.

سپس:

```bash
git add .
git commit -m "Initialize Dig preview project"
git push
```

**مهم**: کامپوننت‌هایی که Agent در آینده به کار می‌برد ولی در این شش مورد نیستند باید با دستور `npx digdesign@latest add https://docs.digdesign.ir/r/COMPONENT.json` و آدرس واقعی رجیستری مربوطه نصب و commit شوند. واردکردن نام‌های فرضی ممنوع است.

## ۳) واردکردن ورک‌فلو n8n

فایل `dig-ui-agent-with-live-preview.json` را Import کنید (یا تغییراتش را در ورک‌فلوی خود اعمال کنید). مدل OpenAI Chat Model را `gpt-4.1` بگذارید. Credentialهای OpenAI و GitHub را متصل کنید. در سه نود GitHub، `REPLACE_WITH_OWNER` و `REPLACE_WITH_REPO` را با GitHub owner/repo واقعی جایگزین کنید.

نود جدید **GitHub Edit Preview Page** پس از ساخت آرشیو و README، فایل `src/app/page.tsx` را با `output.previewPage` به‌روز می‌کند. در n8n، operation این نود باید **Edit** باشد، نه Create. فایل `src/app/page.tsx` باید در مخزن وجود داشته باشد. سایر فایل‌های هر اجرا همانند قبل زیر `generated/<execution-id>/` ذخیره می‌شوند.

## ۴) دیدن خروجی در مرورگر

برای **مخزن عمومی**:

```
https://stackblitz.com/github/OWNER/REPO
```

نام owner/repo واقعی را بگذارید. اگر به‌روزرسانی GitHub را نمی‌بینید، صفحه StackBlitz را Reload کنید. پروژه باید در ریشه `package.json` داشته باشد و وابستگی‌ها نصب شوند. مخزن خصوصی ممکن است به پلن یا اتصال ویژه StackBlitz نیاز داشته باشد.

برای یک آدرس Deploy ثابت، می‌توانید همان GitHub Repository را یک‌بار به Vercel متصل کنید تا بعد از هر commit نسخه جدید Deploy شود. اولین Build نیازمند نصب صحیح کامپوننت‌هاست.

## ۵) محدودیت‌های مهم

- StackBlitz کد React/TSX را **کامپایل و اجرا** می‌کند؛ ساختن HTML ساده در Webhook جایگزین آن نیست.
- سیستم فعلی برای پیش‌نمایش تنها یک `src/app/page.tsx` ثابت را ویرایش می‌کند. سایر فایل‌های تولیدی برای تحویل تمرین آرشیو می‌شوند؛ اگر صفحه به فایل‌های دیگری وابسته باشد، باید آن فایل‌ها هم در پروژه ثبت شوند یا در یک فایل previewPage یکپارچه شوند.
- کد تولیدی توسط AI باید بررسی شود؛ به‌خصوص پیش از قرارگرفتن در مخزن عمومی یا محیطی دارای داده حساس.
- اگر Agent از کامپوننتی استفاده کرد که هنوز در پروژه نصب نشده، احتمال خطای `Module not found` وجود دارد. مسیر واقعی آن را از README خروجی/مستندات دیگ گرفته و با CLI نصب کنید.
- در این بسته دسترسی به GitHub شما و اجرای واقعی n8n وجود نداشته، بنابراین مسیر End-to-End روی محیطتان تست نشده است.

منابع:
- https://docs.digdesign.ir/docs/installation
- https://developer.stackblitz.com/guides/user-guide/importing-projects
- https://vercel.com/docs/git
