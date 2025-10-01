import { Button } from "@/components/ui/button";
import heroImage from "@/assets/konkani-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cultural-deep/80 via-cultural-purple/70 to-cultural-orange/60" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-cultural-gold/20 rounded-full animate-float" />
        <div className="absolute top-40 right-16 w-16 h-16 bg-cultural-purple/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-cultural-orange/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="space-y-6 sm:space-y-8 animate-fade-up">
          {/* Logo/Brand */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-4">
              <span className="bg-gradient-to-r from-cultural-gold to-cultural-orange bg-clip-text text-transparent">
                KonkaniShow
              </span>
              <span className="text-white">.com</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cultural-gold font-medium">Coming Soon!</p>
          </div>

          {/* Main Message */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight px-2">
              🌟 Your one-stop destination for all 
              <br className="hidden sm:block" />
              <span className="sm:inline block mt-1 sm:mt-0"> </span>
              <span className="text-cultural-gold">Konkani entertainment</span> 🎭🎶
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed px-2">
              Find the latest updates on movies, theatres, stand-up comedy, concerts, shows, workshops & cultural programs. Get all the dates, times, and locations in one place!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-8 px-4">
            <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              🔔 Notify Me When Live
            </Button>
            <Button variant="cultural" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              📱 Follow Updates
            </Button>
          </div>

          {/* Multilingual Footer */}
          <div className="pt-6 sm:pt-8 border-t border-white/20 mt-6 sm:mt-8">
            <p className="text-cultural-gold font-semibold text-base sm:text-lg mb-2 px-2">
              ✨ Something Special for All Konkani Lovers! ✨
            </p>
            <div className="space-y-2">
              <p className="text-white/80 font-medium text-sm sm:text-base">🌍 By Mandd Sobhann</p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/70 px-4">
                <span>कोंकणी</span>
                <span>•</span>
                <span>ಕೊಂಕಣಿ</span>
                <span>•</span>
                <span>കൊങ്കണി</span>
                <span>•</span>
                <span>كونكني</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};