import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy | Karl Konsult International",
  description:
    "Understand which fees paid to Karl Konsult International are refundable, which are not, and how to request a refund for our overseas-education services.",
};

const updated = "July 2026";

const sections = [
  {
    heading: "1. Scope of this policy",
    body: [
      "This Refund Policy explains how refunds are handled for service fees paid to Karl Konsult International for our overseas-education counselling and application-support services. It does not cover fees paid to third parties such as universities, testing bodies or visa authorities.",
    ],
  },
  {
    heading: "2. Service fees",
    body: [
      "Where you pay us a service fee for counselling or application support, refund eligibility depends on the stage of service already delivered at the time of your request:",
      "• If no substantive work has begun on your file, you may be eligible for a refund of the service fee, less any non-recoverable administrative costs.",
      "• If work has already started, such as shortlisting, application drafting or documentation, a partial refund may be considered in proportion to the work completed.",
      "• Once a service has been substantially or fully delivered, the corresponding service fee is generally non-refundable.",
    ],
  },
  {
    heading: "3. Third-party fees are non-refundable",
    body: [
      "Fees paid to third parties are outside our control and are non-refundable through us. These include, but are not limited to:",
      "• University or college application and tuition fees.",
      "• Visa, immigration and biometric fees.",
      "• Test-registration fees for exams such as IELTS, PTE and language tests.",
      "• Courier, translation, attestation and similar charges paid to external providers.",
      "Any refund of such fees is subject entirely to the policies of the respective third party, and you would need to pursue it directly with them.",
    ],
  },
  {
    heading: "4. Non-refundable situations",
    body: [
      "Refunds are generally not available where:",
      "• The service has already been delivered as agreed.",
      "• A delay or unfavourable outcome results from inaccurate, incomplete or late information provided by you.",
      "• An application is rejected, or a visa is refused, by a university or authority, as these decisions are beyond our control.",
      "• You choose to discontinue the process for reasons unrelated to our performance.",
    ],
  },
  {
    heading: "5. How to request a refund",
    body: [
      "To request a refund, please email us at hello@karlkonsult.com with your name, contact details, the service concerned and the reason for your request. We may ask for supporting information to assess eligibility.",
    ],
  },
  {
    heading: "6. Refund processing and timeline",
    body: [
      "Approved refunds are processed to the original payment method or another mutually agreed method. We aim to process eligible refunds within a reasonable period, typically within 15 to 30 business days of approval, though the exact time may vary depending on your bank or payment provider.",
    ],
  },
  {
    heading: "7. Changes to this policy",
    body: [
      "We may update this Refund Policy from time to time. Changes will be posted on this page with a revised \"Last updated\" date. The policy in effect at the time you engaged a service will generally apply to that service.",
    ],
  },
  {
    heading: "8. Contact us",
    body: [
      "For any questions about refunds or this policy, please contact us:",
      "• Email: hello@karlkonsult.com",
      "• Phone: +91 97723 00000",
      "• Address: 3rd Floor, Crystal Mall, C-Scheme, Jaipur, Rajasthan 302001",
    ],
  },
];

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      updated={updated}
      intro="This Refund Policy sets out how refunds are handled for service fees paid to Karl Konsult International, and clarifies which charges are non-refundable because they are paid to third parties. This is a general policy; please contact us using the details at the end if you have any questions about your specific situation."
      sections={sections}
    />
  );
}
