import React from 'react'
import "./home.scss"
import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import Widgets from './widgets/Widgets';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Chart from './chart/Chart';
import Cards from './cards/Cards';
import Featured from './feature/Featured';
import Progress from './progress/Progress';
const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="home-container">
            <Navbar/>
            <div className="widgets">
                <Widgets title="Today's Money" number="$53,000" percent="+55%" Icon={AccountBalanceWalletOutlinedIcon}  />
                <Widgets title="Today's Users" number="2,300 " percent="+3%" Icon={PersonIcon}  />
                <Widgets title="New Clients" number="+3462" percent="+5%" Icon={DirectionsWalkIcon}  />
                <Widgets title="Total Sales" number="$112,000" percent="+7%" Icon={ShoppingCartOutlinedIcon}  />
            </div>
            <div className="charts">
            <Chart/>
            </div>
            <div className="cards">
              <Cards/>
            </div>

            <div className="feature">
              <Progress/>
              <Featured/>
            </div>

          
        </div>

    </div>
  )
}

export default Home