import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Karl Konsult International",
  description:
    "The terms and conditions that govern your use of the Karl Konsult International website and our overseas-education counselling and application services.",
};

const updated = "July 2026";

const sections = [
  {
    heading: "1. Acceptance of terms",
    body: [
      "By accessing or using the Karl Konsult International website, or by engaging our services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website or services.",
    ],
  },
  {
    heading: "2. Our services",
    body: [
      "Karl Konsult International is an overseas-education consultancy. Our services include, among others:",
      "• Career and course counselling for studying abroad.",
      "• University and college shortlisting and application guidance.",
      "• Documentation support and visa-application assistance.",
      "• Test-preparation guidance for exams such as IELTS, PTE and language tests.",
      "Our services are advisory and facilitative in nature. We guide and support you through the process, but we do not control the decisions of universities, colleges, embassies, testing bodies or other authorities.",
    ],
  },
  {
    heading: "3. No guarantee of outcomes",
    body: [
      "Admission decisions, visa approvals, scholarships and similar outcomes rest solely with the relevant universities, authorities and third parties. We do not and cannot guarantee any admission, visa, scholarship, test score or other specific outcome.",
      "Any timelines, fee estimates or eligibility indications we provide are based on available information and are subject to change by the concerned institutions or authorities.",
    ],
  },
  {
    heading: "4. Your responsibilities",
    body: [
      "When using our services, you agree to:",
      "• Provide accurate, complete and truthful information and documents.",
      "• Promptly share any updates or changes to your information.",
      "• Meet the deadlines, requirements and conditions set by universities and authorities.",
      "• Comply with all applicable laws, including the immigration and visa rules of your destination country.",
      "We are not responsible for consequences arising from inaccurate, incomplete or misleading information provided by you.",
    ],
  },
  {
    heading: "5. Fees and payments",
    body: [
      "Any service fees payable to us will be communicated to you before you engage the relevant service. Fees charged by third parties, such as universities, testing bodies and visa or immigration authorities, are separate from our service fees and are payable directly as required.",
      "Refunds, where applicable, are governed by our Refund Policy.",
    ],
  },
  {
    heading: "6. Intellectual property",
    body: [
      "All content on this website, including text, graphics, logos, images and layout, is the property of Karl Konsult International or its licensors and is protected by applicable intellectual-property laws. You may not copy, reproduce, distribute or use our content without our prior written permission.",
    ],
  },
  {
    heading: "7. Third-party links",
    body: [
      "Our website may contain links to third-party websites for your convenience. We do not control and are not responsible for the content, policies or practices of those websites. Accessing them is at your own risk.",
    ],
  },
  {
    heading: "8. Limitation of liability",
    body: [
      "To the maximum extent permitted by law, Karl Konsult International shall not be liable for any indirect, incidental or consequential loss arising from your use of our website or services, or from decisions made by third parties such as universities and authorities.",
      "Our services are provided on a reasonable-effort basis, and our total liability, if any, is limited to the service fees you have paid to us for the specific service in question.",
    ],
  },
  {
    heading: "9. Governing law and jurisdiction",
    body: [
      "These Terms & Conditions are governed by the laws of India. Any disputes arising from them shall be subject to the exclusive jurisdiction of the courts at Jaipur, Rajasthan.",
    ],
  },
  {
    heading: "10. Changes to these terms",
    body: [
      "We may update these Terms & Conditions from time to time. Changes will be posted on this page with a revised \"Last updated\" date, and your continued use of our website or services constitutes acceptance of the updated terms.",
    ],
  },
  {
    heading: "11. Contact us",
    body: [
      "If you have any questions about these Terms & Conditions, please contact us:",
      "• Email: hello@karlkonsult.com",
      "• Phone: +91 97723 00000",
      "• Address: 3rd Floor, Crystal Mall, C-Scheme, Jaipur, Rajasthan 302001",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated={updated}
      intro="These Terms & Conditions govern your use of the Karl Konsult International website and our overseas-education services. Please read them carefully. This is a general set of terms; if anything is unclear, contact us using the details at the end before proceeding."
      sections={sections}
    />
  );
}
