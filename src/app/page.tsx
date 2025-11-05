import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { Banner } from "@/components/layouts/pages/home/banner";
import { ReviewsSection } from "@/components/layouts/pages/home/reviwes";
import { SliderReviews } from "@/components/layouts/pages/home/slider-reviews";
import { BenefitsSection } from "@/components/layouts/pages/home/benefits-section";
import { Wrapper } from "@/components/layouts/wrapper";
import { ProductSection } from "@/components/layouts/pages/home/product-section";

// const reviews = [
// 	{
// 		id: '1',
// 		type: 'text' as const,
// 		rating: 5,
// 		title: 'I feel like I have gotten younger',
// 		text: 'I simply feel like I have more energy to do everything. This is like a caffeine jolt without any of the side effects. I am hoping...',
// 		author: 'Kathryn C.',
// 		size: 'small' as const,
// 	},
// 	{
// 		id: '2',
// 		type: 'video' as const,
// 		rating: 5,
// 		title: '',
// 		text: '',
// 		author: '',
// 		mediaUrl: 'https://res.cloudinary.com/dcxo7cldm/video/upload/w_800/v1760536479/4-5_PDP_Softgels_Oct_2025_V2_vw0lzi.mp4',
// 		isVideo: true,
// 		size: 'large' as const,
// 	},
// 	{
// 		id: '3',
// 		type: 'text-image' as const,
// 		rating: 5,
// 		title: 'Obsessed with this supplement',
// 		text: 'Love this supplement. I take 2 capsules of Mitopure every morning and I\'m obsessed. I\'ve increased my load at my CrossFit...',
// 		author: 'Mercedes J.',
// 		mediaUrl: 'https://framerusercontent.com/images/TJ1rJfqmOlX024hc8ZyXPwLmrbc.png?width=800',
// 		isVideo: false,
// 		size: 'small' as const,
// 	},
// 	{
// 		id: '4',
// 		type: 'video' as const,
// 		rating: 5,
// 		title: '',
// 		text: '',
// 		author: '',
// 		mediaUrl: 'https://res.cloudinary.com/dcxo7cldm/video/upload/w_800/v1760536479/4-5_PDP_Softgels_Oct_2025_V2_vw0lzi.mp4',
// 		isVideo: true,
// 		size: 'large' as const,
// 	},
// 	{
// 		id: '5',
// 		type: 'text' as const,
// 		rating: 5,
// 		title: 'I can tell a huge difference',
// 		text: 'I can tell a huge difference in how good my legs feel since I have been taking the mitopure. I am able to cycle much faster...',
// 		author: 'Megan A.',
// 		size: 'small' as const,
// 	},
// 	{
// 		id: '6',
// 		type: 'video' as const,
// 		rating: 5,
// 		title: '',
// 		text: '',
// 		author: '',
// 		mediaUrl: 'https://res.cloudinary.com/dcxo7cldm/video/upload/w_800/v1760536479/4-5_PDP_Softgels_Oct_2025_V2_vw0lzi.mp4',
// 		isVideo: true,
// 		size: 'large' as const,
// 	},
// 	{
// 		id: '7',
// 		type: 'text-image' as const,
// 		rating: 5,
// 		title: 'More Energetic',
// 		text: 'Mitopure has been a game changer in my supplementation regiment. I can actually feel the difference in my energy level with...',
// 		author: 'Michelle Y.',
// 		mediaUrl: 'https://framerusercontent.com/images/WtKQ0cxb5NtRiRa2CgrWMA9f2I.png?width=800',
// 		isVideo: false,
// 		size: 'large' as const,
// 	},
// 	{
// 		id: '8',
// 		type: 'text' as const,
// 		rating: 5,
// 		title: 'Increased muscle and performance for athletes',
// 		text: 'I finally reached the four month mark of consistently taking Mitopure every single day, and I have to say that I have noticed...',
// 		author: 'Susan P.',
// 		size: 'small' as const,
// 	},
// 	{
// 		id: '9',
// 		type: 'text-image' as const,
// 		rating: 5,
// 		title: 'Feeling unstoppable thanks to Mitopure',
// 		text: 'I forgot what it felt like to feel energized. I was so overrun with fatigue for many years that I just got used to it but once I started...',
// 		author: 'Brigette R.',
// 		mediaUrl: 'https://framerusercontent.com/images/FhIeD9Hw066TbTUVnIBwXD2ILdg.png?width=800',
// 		isVideo: false,
// 		size: 'small' as const,
// 	},
// ];

export default function HomePage() {
	return <Wrapper>
		<Header />
		<div className="container mx-auto lg:px-2 px-1 xl:px-4 h-full">
			<Banner />
			<SliderReviews />
			<BenefitsSection />
			<ProductSection />
			<ReviewsSection />
		</div>
		<Footer />
	</Wrapper>
}
