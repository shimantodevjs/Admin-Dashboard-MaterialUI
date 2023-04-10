import './Home.css'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import Chart from '../../components/Chart/Chart'
import { userData } from '../../UserData'
import WidgetLarge from '../../components/WidgetLarge/WidgetLarge'
import WidgetSmall from '../../components/WidgetSmall/WidgetSmall'

export default function Home() {
  return (
    <div className='home'>
       <FeaturedInfo />
       <Chart
       data={userData}
       title="User Analytics"
       firstParameter="Active User"
       secondParameter="Subscribed"
       />
       <div className="homeWidgets">
            <WidgetSmall />
            <WidgetLarge />
       </div>
    </div>
  )
}
