import React from 'react'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'

const Trending = () => {

  const onTabChange = (tab) => {};

  return (
    <div className='relative mb-20 crouselsection'>
      <div className='flex justify-between m-auto mb-5 p-5 w-[100%] max-w-[1200px] align-middle contentWrapper'>
        <span className='font-normal text-2xl text-white crouselTitle'>Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange}/>
      </div>
    </div>
  )
}

export default Trending