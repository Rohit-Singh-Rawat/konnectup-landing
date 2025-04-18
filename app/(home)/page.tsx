import Home from '@/components/sections/Home';
import Services from '@/components/sections/services';
import AboutUs from '@/components/sections/AboutUs';
import MentorCompanies from '@/components/sections/MentorCompanies';
import Cta from '@/components/sections/Cta';

const Main = () => {
	return (
		<main>
			<Home />
			<Services />
			<AboutUs />
			<MentorCompanies />
			<Cta />
		</main>
	);
};

export default Main;
