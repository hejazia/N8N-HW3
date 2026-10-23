"use client"

import * as React from "react";

import { AvatarGenderIcon, SparklesIcon } from "@/components/icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ControlSizeProvider } from "@/components/ui/control-size";
import { Label } from "@/components/ui/label";
import { Link } from "@/components/ui/link";
import { PasswordField } from "@/components/ui/password-field";
import { Separator } from "@/components/ui/separator";
import { TextField } from "@/components/ui/text-field";
import { isValidEmail, isValidMobile } from "@/lib/persian";

function BrandPanel() {
  return (
    <aside
      aria-label="دربارهٔ حساب‌یار"
      className="relative hidden flex-col justify-end overflow-hidden rounded-xl bg-[var(--dig-violet-800)] p-10 text-[var(--dig-white)] lg:flex [--muted-foreground:var(--dig-violet-200)]"
    >
      <div aria-hidden className="absolute -end-16 top-12 hidden h-80 w-[115%] lg:block">
        {[2, 1, 0].map((layer) => (
          <div
            key={layer}
            className="absolute inset-y-0 rounded-xl border border-[var(--dig-violet-600)] bg-[var(--dig-violet-700)] p-5"
            style={{ insetInlineStart: `${layer * 2.5}rem`, top: `${layer * 1.5}rem`, transform: "rotate(-6deg)" }}
          >
            {layer === 0 && (
              <div className="flex h-full gap-4">
                <div className="flex w-40 flex-col gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-[var(--dig-violet-500)] [&>svg]:size-4">
                    <SparklesIcon />
                  </span>
                  <span className="flex h-9 items-center gap-2 rounded-lg bg-[var(--dig-violet-600)] px-3 text-sm">داشبورد</span>
                  {[70, 55, 80, 60].map((width) => (
                    <span key={width} className="h-2.5 rounded-full bg-[var(--dig-violet-600)]" style={{ width: `${width}%` }} />
                  ))}
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <span className="h-16 rounded-lg bg-[var(--dig-violet-600)]" />
                  <span className="h-2.5 w-2/3 rounded-full bg-[var(--dig-violet-600)]" />
                  <span className="h-2.5 w-1/2 rounded-full bg-[var(--dig-violet-600)]" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-[var(--dig-violet-800)] from-40% to-transparent" />

      <figure className="relative flex max-w-md flex-col gap-4 lg:gap-6">
        <Avatar size="lg" alt="سارا محمدی" icon={<AvatarGenderIcon gender="female" />} className="hidden ring-2 ring-[var(--dig-violet-500)] lg:flex" />
        <blockquote className="text-lg leading-relaxed font-bold lg:text-2xl">
          «حساب‌وکتابِ ماهانه‌مان از سه روز به یک ساعت رسید.{" "}
          <span className="text-muted-foreground">حالا وقتمان صرفِ فروش می‌شود، نه اکسل.»</span>
        </blockquote>
        <figcaption className="flex flex-col gap-0.5">
          <span className="font-semibold">سارا محمدی</span>
          <span className="text-sm text-muted-foreground">مدیرِ فروشگاهِ آنلاین</span>
        </figcaption>
      </figure>
    </aside>
  );
}

function BrandMark() {
  return (
    <span aria-hidden className="flex size-12 items-center justify-center rounded-xl bg-[var(--dig-violet-700)] text-[var(--dig-white)] [&>svg]:size-6">
      <SparklesIcon />
    </span>
  );
}

export default function Page() {
  const [error, setError] = React.useState(false);
  const [signing, setSigning] = React.useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSigning(true);
    setError(false);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSigning(false);
    setError(true);
  }

  return (
    <main className="grid grid-cols-1 min-h-svh gap-4 bg-background p-4 lg:grid-cols-2" dir="rtl">
      <div className="flex flex-col items-center px-4 py-10">
        <ControlSizeProvider size="xl" className="flex w-full max-w-sm flex-1 flex-col justify-center gap-8">
          <header className="flex flex-col items-center gap-4 text-center">
            <BrandMark />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">ورود به حساب</h1>
              <p className="text-sm text-muted-foreground">با ایمیل یا شمارهٔ موبایل وارد شوید.</p>
            </div>
          </header>

          <div className="flex flex-col gap-4">
            <Button variant="outline" fullWidth>
              ورود با رمزِ یک‌بارمصرف
            </Button>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <Separator className="flex-1" />
              یا با رمز عبور
              <Separator className="flex-1" />
            </div>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            {error && (
              <Alert color="destructive">
                <AlertTitle>ورود ناموفق بود</AlertTitle>
                <AlertDescription>ایمیل، شماره یا رمز عبور درست نیست.</AlertDescription>
              </Alert>
            )}
            <TextField
              label="ایمیل یا شمارهٔ موبایل"
              name="identifier"
              dir="ltr"
              autoComplete="username"
              required
              validate={(value) => (isValidEmail(value) || isValidMobile(value) ? undefined : "یک ایمیل یا شماره موبایلِ معتبر وارد کنید.")}
              disabled={signing}
            />
            <PasswordField label="رمز عبور" name="password" autoComplete="current-password" required disabled={signing} />
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" name="remember" />
                <Label htmlFor="remember">مرا به خاطر بسپار</Label>
              </div>
              <Link href="/forgot-password" size="sm">
                فراموشی رمز
              </Link>
            </div>
            <Button type="submit" fullWidth loading={signing} className="mt-4">
              ورود
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            حساب ندارید؟ <Link href="/signup">ثبت‌نام کنید</Link>
          </p>
        </ControlSizeProvider>
        <p className="pt-10 text-xs text-muted-foreground">
          <Link href="#" size="sm">
            قوانین
          </Link>{" "}
          و{" "}
          <Link href="#" size="sm">
            حریم خصوصی
          </Link>
        </p>
      </div>
      <BrandPanel />
    </main>
  );
}
