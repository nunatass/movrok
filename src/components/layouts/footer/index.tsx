export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-20 xl:px-40 py-8">
        {/* Disclaimer Text */}
        <div className="mb-8">
          <p className="text-xs text-gray-500 leading-relaxed">
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease. References: *Nutrition studies: 500mg Mitopure® have been shown to (1) induce gene expression related to mitochondria function and metabolism and (2) increase the strength of the hamstring leg muscle in measures of knee extension and flexion in overweight 40-65 year olds. Data from two randomized double-blind placebo-controlled human clinical trials. **Nutrition NOURISH Study: 500mg Mitopure® have been shown to deliver at least 6 times higher Urolithin A plasma levels over 24 hours (area under the curve) than 8 ounces (240ml) of pomegranate juice in a randomized human clinical trial.
          </p>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-200">
          {/* Left Side - Copyright and Links */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span>Movrok © 2025</span>
            <a 
              href="/terms" 
              className="underline hover:text-gray-900 transition-colors"
            >
              Terms & Conditions
            </a>
            <a 
              href="/privacy" 
              className="underline hover:text-gray-900 transition-colors"
            >
              Privacy policy
            </a>
          </div>

          {/* Right Side - Payment Icons */}
          <div className="flex items-center gap-3">
            <img 
              src="/assets/images/google-pay.svg" 
              alt="Google Pay" 
              className="h-6"
            />
            <img 
              src="/assets/images/apple-pay.svg" 
              alt="Apple Pay" 
              className="h-6"
            />
            <img 
              src="/assets/images/master-card.png" 
              alt="Mastercard" 
              className="h-6"
            />
            <img 
              src="/assets/images/visa.svg" 
              alt="Visa" 
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

