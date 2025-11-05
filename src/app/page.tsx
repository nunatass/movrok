import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { Banner } from "@/components/layouts/pages/home/banner";
import { ReviewsSection } from "@/components/layouts/pages/home/reviwes";
import { SliderReviews } from "@/components/layouts/pages/home/slider-reviews";
import { BenefitsSection } from "@/components/layouts/pages/home/benefits-section";
import { Wrapper } from "@/components/layouts/wrapper";
import { ProductSection } from "@/components/layouts/pages/home/product-section";
import { ProductBuySection } from "@/components/layouts/pages/home/product-buy-section";

export default function HomePage() {
	return <Wrapper>
		<Header />
		<div className="w-full mx-auto p-1 sm:p-2 h-full">
			<Banner />
			<SliderReviews />
	
			<ProductSection />
			<ProductBuySection />
			<BenefitsSection />
			<ReviewsSection />
		</div>
		<Footer />
	</Wrapper>
}
