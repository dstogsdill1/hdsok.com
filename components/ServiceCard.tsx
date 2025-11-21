import Link from 'next/link';
import Image from 'next/image';
import type { ServiceFields } from '@/types/contentful';
import { getImageUrl, getImageAlt } from '@/types/contentful';

interface ServiceCardProps {
  service: {
    fields: ServiceFields;
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { title, description, icon, features, benefits, slug, ctaText = 'Learn More' } = service.fields;
  const iconUrl = getImageUrl(icon);
  const iconAlt = getImageAlt(icon, title);

  return (
    <div className="border-2 border-neon-green rounded-lg p-8 bg-dark-card hover:shadow-lg hover:shadow-neon-green/20 transition-all">
      {iconUrl && (
        <div className="mb-4">
          <Image
            src={iconUrl}
            alt={iconAlt}
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
      )}
      <h2 className="text-3xl font-bold text-neon-green mb-4">
        {title}
      </h2>
      <p className="text-gray-300 mb-6">
        {description}
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {features && features.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Services Include:</h3>
            <ul className="text-gray-300 space-y-2">
              {features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>
        )}
        {benefits && benefits.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Benefits:</h3>
            <ul className="text-gray-300 space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index}>• {benefit}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Link 
        href={`/services/${slug}`}
        className="inline-block mt-6 border-2 border-neon-green text-neon-green px-6 py-3 rounded-lg font-semibold hover:bg-neon-green hover:text-dark-bg transition-colors"
      >
        {ctaText}
      </Link>
    </div>
  );
}
