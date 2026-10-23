import { Button } from "@/components/ui/button";

export function PaymentButton() {
  return (
    <Button color="primary" size="lg">
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ display: 'flex' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9H21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 17H17" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/><rect x="2.75" y="3.75" width="18.5" height="16.5" rx="3.25" stroke="currentColor" strokeWidth="1.5"/></svg>
        </span>
        پرداخت
      </span>
    </Button>
  );
}
