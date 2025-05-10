import Navbar from '../components/Navbar';
import MedicinePage from '../pages/MedicinePage';
import CompareMedicinePage from '../pages/CompareMedicinePage';
import FAQSection from '../pages/FAQSection';
import FooterSection from '../pages/FooterSection';
import Rating from './Rating';

const Dashboard = () => (
  <>
    <Navbar />
    <MedicinePage />
    <CompareMedicinePage />
    <FAQSection />
    <Rating />
    <FooterSection />
  </>
);
export default Dashboard;