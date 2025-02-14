import PersonCard from "@/app/components/PersonCard";
import PortalNavbar from "@/app/components/portalnavbar";

export default function CommitteePage() {
  return (
    <>
      <PortalNavbar
        leftTitle="Your LCOA Committee"
        returnHref="/portal"
        returnLabel="Return to Portal"
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <PersonCard
              name="Alice Johnson"
              role="Chairperson"
              image="/img/user-profile.jpg"
              description="Alice oversees the operations of the LCOA committee, ensuring all members work together effectively."
            />
            <PersonCard
              name="Bob Smith"
              role="Treasurer"
              image="/img/user-profile.jpg"
              description="Bob manages the association's financial resources, budgets, and expenditures."
            />
            <PersonCard
              name="Catherine Lewis"
              role="Secretary"
              image="/img/user-profile.jpg"
              description="Catherine handles meeting minutes, records, and correspondence for the committee."
            />
            <PersonCard
              name="David Williams"
              role="Membership Coordinator"
              image="/img/user-profile.jpg"
              description="David is responsible for communicating with new and existing members of the association."
            />
            <PersonCard
              name="Emma Brown"
              role="Events Coordinator"
              image="/img/user-profile.jpg"
              description="Emma plans and organizes events to keep the community engaged and informed."
            />
            <PersonCard
              name="Frank Miller"
              role="Compliance Officer"
              image="/img/user-profile.jpg"
              description="Frank ensures the association adheres to legal regulations and best practices."
            />
          </div>
        </div>
      </section>
    </>
  );
}
