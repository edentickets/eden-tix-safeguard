interface EventHeroBackgroundProps {
  promo_banner_url?: string;
}

export const EventHeroBackground = ({ promo_banner_url }: EventHeroBackgroundProps) => {
  if (!promo_banner_url) return null;
  
  return (
    <>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: `url(${promo_banner_url})`,
          filter: 'blur(50px)',
          transform: 'scale(1.2)',
        }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--event-background,#121212)] to-[var(--event-background,#121212)]" />
    </>
  );
};