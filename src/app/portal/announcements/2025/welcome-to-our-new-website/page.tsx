import Link from "next/link";
import AnnouncementPage from "@/app/components/AnnouncementPage";

export default function AnnouncementNewWebsitePage() {
  return (
    <>
        <AnnouncementPage 
            title="Welcome to our New Website!"
            datePublished="13/02/2025"
            description="We are excited to announce the launch of our brand-new website! This platform
                has been designed with our members in mind, offering a modern interface and
                easy access to essential information."
            details={
                <>
                    <p>
                        Here, you&apos;ll find the latest updates from the Largiemore Chalet Owners
                        Association, important documents, and a members-only portal to manage your
                        account. We hope this site enhances your experience and keeps you connected
                        with the LCOA community.
                    </p>
                    <br />
                    <p>
                        Thank you for your support as we continue to improve our services. Feel free
                        to explore the website and let us know if you have any feedback!
                    </p>
                </>
            }
        />
    </>
  );
}
