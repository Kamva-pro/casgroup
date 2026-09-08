import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/motion';

const credentials = [
  {
    title: 'B-BBEE Level 1',
    subtitle: '135% procurement recognition',
    detail: '100% Black-Owned Contributor delivering maximum statutory procurement recognition for state, mining, and corporate supply chains.',
    type: 'bee'
  },
  {
    title: 'CSD Registered',
    subtitle: 'Fully registered on the National Treasury Central Supplier Database',
    detail: 'Compliant supplier verified for procurement tenders, municipal operations, and heavy industrial contracts across South Africa.',
    type: 'csd'
  }
];

export function CredentialsSection() {
  return (
    <section id="credentials" className="bg-slate-50/80 py-20 border-y border-slate-200/80">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center mb-12"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-red-600">
            Compliance & Accreditation
          </p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 lg:text-4xl tracking-tight">
            Verified Industrial Credentials
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {credentials.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-sm border border-slate-200/90 transition-all hover:border-red-200 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center justify-center">
                {c.type === 'bee' ? <BeeSeal /> : <CsdSeal />}
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {c.title}
              </h3>
              <p className="mt-2 text-base font-semibold text-red-600">
                {c.subtitle}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
                {c.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Styled B-BBEE Level 1 Seal matching reference image
function BeeSeal() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" className="drop-shadow-md">
      {/* Outer serrated gold / black rosette badge */}
      <circle cx="44" cy="44" r="42" fill="#18181B" stroke="#D97706" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="44" cy="44" r="38" fill="#09090B" stroke="#F59E0B" strokeWidth="1.5" />
      <circle cx="44" cy="44" r="34" fill="#18181B" stroke="#D97706" strokeWidth="1" />

      {/* Decorative stars on top & bottom */}
      <path d="M44 14l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z" fill="#F59E0B" />
      <path d="M36 17l.8 1.8 2 .3-1.4 1.4.3 2-1.7-.9-1.7.9.3-2-1.4-1.4 2-.3z" fill="#D97706" />
      <path d="M52 17l.8 1.8 2 .3-1.4 1.4.3 2-1.7-.9-1.7.9.3-2-1.4-1.4 2-.3z" fill="#D97706" />

      {/* Ribbon Banner text */}
      <text x="44" y="29" fill="#F59E0B" fontSize="6.5" fontWeight="900" textAnchor="middle" letterSpacing="0.8">
        WE ARE PROUD
      </text>
      <text x="44" y="44" fill="#FFFFFF" fontSize="13" fontWeight="900" textAnchor="middle" letterSpacing="0.5">
        BEE 1
      </text>
      <text x="44" y="55" fill="#F59E0B" fontSize="8" fontWeight="800" textAnchor="middle" letterSpacing="1">
        LEVEL
      </text>
      <text x="44" y="65" fill="#E4E4E7" fontSize="5.5" fontWeight="700" textAnchor="middle" letterSpacing="0.6">
        CONTRIBUTORS
      </text>

      {/* Bottom stars */}
      <path d="M44 72l1 2 2.2.3-1.6 1.6.4 2.2-2-1-2 1 .4-2.2-1.6-1.6 2.2-.3z" fill="#F59E0B" />
    </svg>
  );
}

// Styled CSD National Treasury Verified Seal
function CsdSeal() {
  return (
    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" className="drop-shadow-md">
      {/* Outer shield / medal ring */}
      <circle cx="44" cy="44" r="42" fill="#0A1628" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 2" />
      <circle cx="44" cy="44" r="38" fill="#0F172A" stroke="#60A5FA" strokeWidth="1.5" />
      <circle cx="44" cy="44" r="34" fill="#0A1628" stroke="#1D4ED8" strokeWidth="1" />

      {/* Checkmark crest */}
      <circle cx="44" cy="27" r="9" fill="#DC2626" />
      <path d="M40 27l3 3 5-5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Central National Treasury CSD lettering */}
      <text x="44" y="46" fill="#FFFFFF" fontSize="11" fontWeight="900" textAnchor="middle" letterSpacing="1">
        CSD
      </text>
      <text x="44" y="56" fill="#60A5FA" fontSize="7" fontWeight="800" textAnchor="middle" letterSpacing="0.8">
        REGISTERED
      </text>
      <text x="44" y="66" fill="#94A3B8" fontSize="5" fontWeight="700" textAnchor="middle" letterSpacing="0.5">
        NATIONAL TREASURY
      </text>
    </svg>
  );
}
