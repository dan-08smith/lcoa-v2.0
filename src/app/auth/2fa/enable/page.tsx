import AuthCard from "@/app/components/AuthCard";
import LinkCard from "@/app/components/LinkCard";
import { Signal, TabletSmartphone } from "lucide-react";

export default function Enable2FA() {

  return (
    <>
        <AuthCard title="Enable 2FA">
        <section className="bg-white shadow rounded p-6 mb-8">
            <LinkCard
                href="/auth/2fa/verify"
                icon={Signal}
                label="Via SMS"
            />
        </section>
        <section className="bg-white shadow rounded p-6 mb-8">
            <LinkCard
                href="/auth/2fa/verify"
                icon={TabletSmartphone}
                label="Via Authentication App"
            />
        </section>
        </AuthCard>
    </>
  );
}