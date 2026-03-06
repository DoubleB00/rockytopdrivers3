import { ExternalLink, Building2 } from 'lucide-react';

interface Sponsor {
  name: string;
  tagline?: string;
  description?: string;
  website: string;
  logo?: string;
}

const sponsors: Sponsor[] = [
  {
    name: 'Example Business 1',
    tagline: 'Quality Service Since 1995',
    description: 'Supporting local businesses and community partners',
    website: 'https://example.com',
  },
  {
    name: 'Example Business 2',
    tagline: 'Knoxville\'s Finest',
    description: 'Trusted partner in the Knoxville community',
    website: 'https://example.com',
  },
  {
    name: 'Example Business 3',
    tagline: 'Family-Owned & Operated',
    description: 'Serving East Tennessee with pride',
    website: 'https://example.com',
  },
  {
    name: 'Example Business 4',
    tagline: 'Serving East Tennessee',
    description: 'Building strong community connections',
    website: 'https://example.com',
  },
];

export default function Sponsors() {
  return (
    <section className="bg-navy-900 py-24 lg:py-32 relative overflow-hidden border-t border-white/8">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950/40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="section-label mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-gold-500" />
            Featured Partners
            <span className="w-8 h-px bg-gold-500" />
          </p>
          <h2 className="section-heading mb-6">
            Local Sponsors & Featured Knoxville Businesses
          </h2>
          <p className="text-white/55 text-base leading-relaxed">
            Rocky Top Drivers partners with and promotes great local businesses across the Knoxville area including Oak Ridge, Farragut, Pigeon Forge, Gatlinburg, Sevierville, and Maryville. Our riders may receive recommendations for dining, attractions, and experiences from these trusted partners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-glass p-6 hover:border-gold-500/40 transition-all duration-300 flex flex-col"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-24 h-24 flex items-center justify-center border border-white/10 group-hover:border-gold-500/40 mb-4 transition-all duration-300 bg-white/5">
                  {sponsor.logo ? (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="w-full h-full object-contain p-3"
                    />
                  ) : (
                    <Building2 className="w-10 h-10 text-gold-500/60 group-hover:text-gold-500 transition-colors duration-300" />
                  )}
                </div>

                <h3 className="text-white font-semibold text-base mb-2 group-hover:text-gold-400 transition-colors duration-300">
                  {sponsor.name}
                </h3>

                {sponsor.tagline && (
                  <p className="text-white/50 text-sm font-medium mb-2">
                    {sponsor.tagline}
                  </p>
                )}

                {sponsor.description && (
                  <p className="text-white/35 text-xs mb-4 flex-grow leading-relaxed">
                    {sponsor.description}
                  </p>
                )}

                <div className="flex items-center gap-2 text-gold-500/70 group-hover:text-gold-400 text-sm transition-colors duration-300 mt-auto">
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-white/45 text-sm">
            Interested in advertising with Rocky Top Drivers?{' '}
            <button
              onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gold-500 hover:text-gold-400 transition-colors duration-200 underline underline-offset-4"
            >
              Contact us to become a featured partner
            </button>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
