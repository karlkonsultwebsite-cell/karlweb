import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Karl Konsult International",
  description:
    "How Karl Konsult International collects, uses, protects and shares the personal information you provide when you enquire about studying abroad.",
};

const updated = "July 2026";

const sections = [
  {
    heading: "1. Information we collect",
    body: [
      "When you contact us, submit an enquiry, book a counselling session or otherwise interact with our website, we may collect the following information:",
      "• Contact details such as your name, email address, phone number and city.",
      "• Enquiry details such as your preferred country, course, intended intake, academic background and the questions you send us.",
      "• Documents you choose to share with us for counselling or application purposes, such as academic transcripts, test scores or identification.",
      "• Technical information such as your IP address, browser type, device details and pages visited, collected automatically through cookies and analytics tools.",
      "We only ask for information that is reasonably needed to respond to you and to provide our services.",
    ],
  },
  {
    heading: "2. How we use your information",
    body: [
      "We use the information you provide to:",
      "• Respond to your enquiries and provide overseas-education counselling.",
      "• Guide you through course selection, applications, admissions and visa preparation.",
      "• Communicate with you by phone, email, WhatsApp or SMS about your enquiry and our services.",
      "• Send you relevant updates, reminders and occasional offers, where you have not opted out.",
      "• Improve our website, services and the quality of our guidance.",
      "We do not use your information for purposes that are unrelated to the services you have asked us about.",
    ],
  },
  {
    heading: "3. Cookies and analytics",
    body: [
      "Our website may use cookies and similar technologies, including third-party analytics services, to understand how visitors use the site and to improve their experience.",
      "You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect how parts of the website function.",
    ],
  },
  {
    heading: "4. Sharing your information",
    body: [
      "We do not sell your personal information. We may share it only as needed to provide our services, for example:",
      "• With universities, colleges and their authorised representatives when you ask us to submit or support an application.",
      "• With service providers who help us operate our business, such as communication, hosting and analytics tools, under appropriate confidentiality arrangements.",
      "• Where required by law, regulation or a valid request from a competent authority.",
      "Any third party we share information with is expected to handle it responsibly and only for the purpose it was shared.",
    ],
  },
  {
    heading: "5. Data security",
    body: [
      "We take reasonable technical and organisational measures to protect your information against unauthorised access, alteration, disclosure or loss.",
      "However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "6. Data retention",
    body: [
      "We retain your information for as long as needed to provide our services, to maintain our records, and to meet legal or legitimate business requirements. When information is no longer required, we take steps to delete or anonymise it.",
    ],
  },
  {
    heading: "7. Your rights",
    body: [
      "Subject to applicable law in India, you may:",
      "• Request access to the personal information we hold about you.",
      "• Ask us to correct information that is inaccurate or incomplete.",
      "• Ask us to delete your information where it is no longer required.",
      "• Withdraw your consent to marketing communications at any time.",
      "To exercise any of these rights, please contact us using the details below. We may need to verify your identity before acting on a request.",
    ],
  },
  {
    heading: "8. Children's privacy",
    body: [
      "Our services are intended for prospective students and their families. Where a prospective student is a minor, we expect enquiries to be made or supervised by a parent or guardian.",
    ],
  },
  {
    heading: "9. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised \"Last updated\" date. We encourage you to review this page periodically.",
    ],
  },
  {
    heading: "10. Contact us",
    body: [
      "If you have any questions about this Privacy Policy or how your information is handled, please contact us:",
      "• Email: hello@karlkonsult.com",
      "• Phone: +91 97723 00000",
      "• Address: 3rd Floor, Crystal Mall, C-Scheme, Jaipur, Rajasthan 302001",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={updated}
      intro="This Privacy Policy explains how Karl Konsult International collects, uses, shares and protects the personal information you provide when you enquire about or use our overseas-education services. This is a general policy; if you have any questions, please reach out to us using the contact details at the end."
      sections={sections}
    />
  );
}
