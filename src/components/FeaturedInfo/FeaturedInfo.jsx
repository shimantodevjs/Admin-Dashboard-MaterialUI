import React from 'react'
import {ArrowDownward , ArrowUpward} from '@mui/icons-material'
import './FeaturedInfo.css'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
         <div className="featuredItem">
            <div className="featuredTitle">Revanue</div>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">
                    -11.4<ArrowDownward className='featuredIcon'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
         </div>

          <div className="featuredItem">
            <div className="featuredTitle">Sales</div>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,432</span>
                <span className="featuredMoneyRate">
                    -1.4<ArrowDownward className='featuredIcon'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
         </div>

          <div className="featuredItem">
            <div className="featuredTitle">Revanue</div>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1,217</span>
                <span className="featuredMoneyRate">
                    +5.9<ArrowUpward className='featuredIcon positive'/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
         </div>
    </div>
  )
}
