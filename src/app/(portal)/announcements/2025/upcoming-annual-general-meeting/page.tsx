import AnnouncementPage from "../../../../components/AnnouncementPage";

export default function AnnouncementAGM2025Page() {
  return (
    <>
        <AnnouncementPage 
            title="Upcoming Annual General Meeting (AGM)"
            datePublished="14/02/2025"
            description="We are pleased to annouce that the Annual General Meeting (AGM) of the Largiemore 
                Chalet Owners Association will be held on Saturday, 20th April 2025, at 12:00 PM 
                in Chalet #10."
            details={
                <>
                    <p>
                        All members are kindly requested to complete and submit the Membership Form by 
                        10th April 2025 to ensure your membership is up-to-date and confirm your attendance 
                        at the meeting. This form is essential for us to verify your contact details and 
                        prepare for the AGM effectively.
                    </p>
                    <br />
                    <p>
                        The Membership Form can be downloaded <a href="/files/blank.pdf" 
                        className="text-blue-600 hover:underline">here</a> and should be emailed to <a 
                        href="mailto:largiemorecoa@gmail.com" className="text-blue-600 hover:underline">
                        largiemorecoa@gmail.com</a>.
                    </p>
                    <br />
                    <p>
                        We look forward to seeing you at the AGM, where we&apos;ll discuss important matters and 
                        collaborate to shape the future of our community.
                    </p>

                </>
            }
        />
    </>
  );
}
