import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer | Karl Konsult International",
  description:
    "Important information about the guidance provided by Karl Konsult International, including that admission, visa and scholarship outcomes rest with universities and authorities.",
};

const updated = "July 2026";

const sections = [
  {
    heading: "1. General information only",
    body: [
      "The information provided on the Karl Konsult International website and through our services is for general guidance and informational purposes only. It should not be treated as definitive advice for any individual situation without confirming the current requirements with us and the relevant institutions or authorities.",
    ],
  },
  {
    heading: "2. No guarantee of outcomes",
    body: [
      "We assist and guide students through the study-abroad journey, but we do not control the decisions of third parties. In particular:",
      "• Admission decisions rest solely with the universities and colleges concerned.",
      "• Visa and immigration decisions rest solely with the relevant embassies and authorities.",
      "• Scholarship and financial-aid decisions rest solely with the awarding institutions.",
      "We make no guarantee, express or implied, of any admission, visa, scholarship, test result or other specific outcome.",
    ],
  },
  {
    heading: "3. Accuracy and timeliness of information",
    body: [
      "We take care to keep the information on our website accurate and up to date. However, requirements, fees, deadlines, eligibility criteria and policies of universities and authorities can change without notice. We do not warrant that all information here is complete, current or error-free, and you should always verify important details before acting on them.",
    ],
  },
  {
    heading: "4. External links",
    body: [
      "Our website may contain links to third-party websites and resources. These are provided for convenience only. We do not endorse and are not responsible for the content, accuracy, or practices of any external site, and accessing them is at your own risk.",
    ],
  },
  {
    heading: "5. Not professional advice",
    body: [
      "Nothing on this website constitutes legal, financial, immigration or other professional advice. For advice specific to your circumstances, you should consult a qualified professional or the relevant official authority.",
    ],
  },
  {
    heading: "6. Limitation of liability",
    body: [
      "To the maximum extent permitted by law, Karl Konsult International shall not be liable for any loss or damage arising from reliance on information provided on this website, or from decisions taken by universities, authorities or other third parties.",
    ],
  },
  {
    heading: "7. Contact us",
    body: [
      "If you have any questions about this Disclaimer, please contact us:",
      "• Email: hello@karlkonsult.com",
      "• Phone: +91 97723 00000",
      "• Address: 3rd Floor, Crystal Mall, C-Scheme, Jaipur, Rajasthan 302001",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated={updated}
      intro="This Disclaimer explains the basis on which Karl Konsult International provides information and guidance, and clarifies that admission, visa and scholarship outcomes rest with the relevant universities and authorities. This is a general notice; please contact us using the details at the end if anything is unclear."
      sections={sections}
    />
  );
}
