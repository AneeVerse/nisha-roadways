import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type TeamCardProps = {
  name: string;
  role: string;
  imageSrc: string;
  accentGradient?: string; // e.g., 'from-blue-600 to-indigo-700'
  href?: string;
};

export default function TeamCard({
  name,
  role,
  imageSrc,
  accentGradient = 'from-slate-300 to-slate-400',
  href,
}: TeamCardProps) {
  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-4 p-4">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${accentGradient} opacity-20`}></div>
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="64px"
            className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
            priority={false}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-gray-900 truncate">{name}</div>
          <div className="text-xs text-slate-600 truncate">{role}</div>
        </div>

        {href ? (
          <Link href={href} className="text-blue-600 hover:text-blue-700 text-xs font-medium inline-flex items-center gap-1">
            <span>View</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        ) : null}
      </div>
    </div>
  );
}