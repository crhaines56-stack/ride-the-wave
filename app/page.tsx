import HeroSection from '@/components/HeroSection'
import MissionSection from '@/components/MissionSection'
import AgendaSection from '@/components/AgendaSection'
import WhoSection from '@/components/WhoSection'
import EventSection from '@/components/EventSection'
import SignupSection from '@/components/SignupSection'
import FounderSection from '@/components/FounderSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <AgendaSection />
      <WhoSection />
      <EventSection />
      <SignupSection />
      <FounderSection />
      <Footer />
    </main>
  )
}
