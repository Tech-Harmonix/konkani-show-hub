import { Button } from "@/components/ui/button";

export const FooterSection = () => {
  return (
    <footer className="bg-cultural-deep text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Main CTA */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold">
            Ready to Experience <span className="text-cultural-gold">Konkani Culture</span>?
          </h3>
          <p className="text-white/80 text-lg">
            Be the first to know when we launch and never miss an event again!
          </p>
          <Button variant="notification" size="lg" className="text-lg px-8 py-4">
            🚀 Get Launch Updates
          </Button>
        </div>

        {/* Mandd Sobhann Info */}
        <div className="border-t border-white/20 pt-8 space-y-4">
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-cultural-gold">Mandd Sobhann</h4>
            <p className="text-white/70 max-w-2xl mx-auto">
              Preserving and promoting Konkani language, literature, and culture through various artistic and cultural initiatives.
            </p>
          </div>
          
          {/* Social/Contact Placeholder */}
          <div className="flex justify-center gap-4 pt-4">
            <div className="text-sm text-white/60">
              More details coming soon...
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-6 space-y-3">
          <div className="text-cultural-gold font-medium">
            🌍 KonkaniShow.com - Celebrating Konkani Heritage
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-white/60">
            <span>कोंकणी</span>
            <span>•</span>
            <span>ಕೊಂಕಣಿ</span>
            <span>•</span>
            <span>കൊങ്കണി</span>
            <span>•</span>
            <span>كونكني</span>
          </div>
          <div className="text-xs text-white/40 pt-2">
            © 2024 Mandd Sobhann. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};