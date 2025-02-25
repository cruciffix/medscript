
import MetricsMe from '../components/componentsPages/me/metricsMe/MetricsMe';
import AvatarAndName from '../components/componentsPages/me/AvatarAndName/AvatartAndName';
import Top from '../components/componentsPages/me/top/Top';
import Footer from '../components/Footer';

export default function Me() {
    

    return (
        <>
            <div className='marginHorizontal'>
                
                <AvatarAndName />

                <MetricsMe />

                <Top />
            </div>
            <Footer />

        </>
        
    )
}