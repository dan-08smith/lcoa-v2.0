import PersonCard from "../../components/PersonCard";
import PortalNavbar from "../../components/portalnav";
import Footer from "../../components/footer";

export default function CommitteePage() {
  return (
    <>
      <PortalNavbar
        leftTitle="Your LCOA Committee"
      />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <PersonCard
              name="First Last"
              role="Chairperson"
              image="/img/user-profile.jpg"
              duration="Sep 2022 to Now"
              description="Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices augue risus platea rutrum litora."
            />
            <PersonCard
              name="First Last"
              role="Treasurer"
              image="/img/user-profile.jpg"
              duration="Jan 2024 to Now"
              description="Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices augue risus platea rutrum litora."
            />
            <PersonCard
              name="First Last"
              role="Secretary"
              image="/img/user-profile.jpg"
              duration="Oct 2024 to Now"
              description="Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices augue risus platea rutrum litora."
            />
            <PersonCard
              name="First Last"
              role="Membership Coordinator"
              image="/img/user-profile.jpg"
              duration="Dec 2024 to Now"
              description="Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices augue risus platea rutrum litora."
            />
            <PersonCard
              name="First Last"
              role="Events Coordinator"
              image="/img/user-profile.jpg"
              duration="Feb 2025 to Now"
              description="Lorem ipsum odor amet, consectetuer adipiscing elit. Ultrices augue risus platea rutrum litora."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
