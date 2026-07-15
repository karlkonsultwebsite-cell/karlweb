import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryPage } from "@/components/sections/CountryPage";
import { destinations, countryDetails } from "@/lib/data";
import { countryContent } from "@/lib/content";

type Params = { country: string };

export function generateStaticParams(): Params[] {
  return destinations.map((d) => ({ country: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { country } = await params;
  const dest = destinations.find((d) => d.slug === country);
  if (!dest) return {};
  const detail = countryDetails[dest.slug];
  return {
    title: `Study in ${dest.name} | ${dest.name} Study Abroad Consultants — Karl Konsult`,
    description: `Study in ${dest.name} with Karl Konsult International, trusted overseas education consultants in Jaipur. ${detail?.intro ?? ""} Free counselling, admissions, scholarships and student-visa support.`.slice(0, 320),
  };
}

export default async function StudyAbroadCountryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { country } = await params;
  const dest = destinations.find((d) => d.slug === country);
  const detail = dest ? countryDetails[dest.slug] : undefined;
  const content = dest ? countryContent[dest.slug] : undefined;
  if (!dest || !detail || !content) notFound();
  return <CountryPage dest={dest} detail={detail} content={content} />;
}
