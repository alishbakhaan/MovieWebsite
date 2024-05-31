import {useState, React} from 'react'
import '../../App.css'
const SwitchTabs = ({data, onTabChange}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] =useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100)
    setTimeout(() =>{
      setSelectedTab(index)
    }, 300);
    onTabChange(tab, index)
  }

  return (
    <div className='bg-white p-[2px] rounded-[20px] h-[34px] switchingTabs'>
      <div className="relative flex h-[30px] align-middle tabItems">
        {data.map((tab,index) => (
          <span 
          key={index} 
          className={`tabItem 
          ${selectedTab === index ? "active" : ""}`}
          onClick={() => activeTab(tab, index)}
          >
             {tab}
          </span>
        ))}
        <span className='left-0 absolute rounded-2xl w-full h-[30px] movingBg' style={{left}}></span>
      </div>
    </div>
  )
}

export default SwitchTabs