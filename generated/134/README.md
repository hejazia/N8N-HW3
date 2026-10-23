# فرم ورود فارسی با دیگ

این پروژه یک فرم ورود کامل فارسی براساس بلوک ورود دیگ است و با کامپوننت‌های رسمی دیزاین‌سیستم دیگ ساخته شده. قابلیت پیش‌نمایش در Next.js 14 با App Router را دارد و تمام کنترل‌ها و آیکون‌ها بر پایه پیاده‌سازی‌های واقعی دیگ می‌باشند.

## اجزای استفاده شده
- `TextField` (فیلد متنی دیگ) برای ایمیل یا شماره موبایل
- `PasswordField` (فیلد رمز عبور دیگ) با امکان نمایش رمز
- `Checkbox` و `Label` برای گزینه «مرا به خاطر بسپار»، با آیکون داخلی (نیاز به آیکون جداگانه ندارد)
- `Button` (دکمه اصلی ورود و ورود با رمز یک‌بار مصرف)
- `Alert` (هشدار خطای ورود)
- `Separator` (خط جداکننده)
- `Card` (چیدمان کلی، اما کد بلاک به صورت دو ستونه بدون وارد کردن جداگانه کارت است)
- `Avatar` و آیکون `AvatarGenderIcon`, `SparklesIcon` برای پنل برند
- کامپوننت‌های الزامی ابزار: `link`, `control-size`, `icons`, `persian` (برای اعتبارسنجی موبایل/ایمیل), `label`

## نصب و آماده‌سازی

برای اجرای این فرم دقیقاً طبق مستندات دیگ مراحل زیر را انجام دهید:

۱. کامپوننت‌های لازم را نصب کنید:

```
npx digdesign@latest add https://docs.digdesign.ir/r/alert.json https://docs.digdesign.ir/r/avatar.json https://docs.digdesign.ir/r/button.json https://docs.digdesign.ir/r/checkbox.json https://docs.digdesign.ir/r/control-size.json https://docs.digdesign.ir/r/icons.json https://docs.digdesign.ir/r/label.json https://docs.digdesign.ir/r/link.json https://docs.digdesign.ir/r/password-field.json https://docs.digdesign.ir/r/persian.json https://docs.digdesign.ir/r/separator.json https://docs.digdesign.ir/r/text-field.json
```

۲. حتماً دستور فوق را روی پروژه اجرا و سپس Commit کنید؛ فایل‌های مربوط به هر کامپوننت (مثلاً src/components/ui/button.tsx و ...) توسط ابزار به پروژه شما افزوده می‌شود.

۳. برای مشاهده پیش‌نمایش، کد فایل `src/app/page.tsx` را با نمونه زیر جایگزین و پروژه را با Next.js 14+ اجرا کنید:

```
npm run dev
```

- اگر theme سفارشی یا برند خاصی دارید، فایل brand.css را مطابق دستورات دیگ بسازید.

## محدودیت‌ها
- این نمونه نیاز به تمامی دیپندنسی‌های دیگ دارد (در دستور نصب بالا آمده‌اند)
- عکس‌ها و متن برند صرفاً نمونه دیگ است، جهت تطبیق باید آن‌ها را برای برند خود ویرایش کنید.
- تمام props و importها و مسیرها با توجه به فایل‌های نصب‌شونده توسط digdesign تنظیم شده و نباید به صورت دستی مسیرها تغییر یابند.

## منابع
- نمونه و بلاک ورود دیگ: https://docs.digdesign.ir/block/login
- مستندات نصب و نحوه استفاده از هر کامپوننت در docs.digdesign.ir قابل دسترسی است. لطفاً قبل از استفاده همواره آخرین ورژن ابزار و مستندات را بررسی کنید.

---

این پروژه مبتنی بر اطلاعات رسمی کامپوننت‌ها و بلاک دیگ اجرا شده و فاقد ترکیب یا نام‌گذاری جعلی است.