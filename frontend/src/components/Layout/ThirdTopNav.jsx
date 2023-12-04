

import { FaInstagram,FaCaretDown, FaAngleDown } from "react-icons/fa6";


const ThirdTopNav = () => {
  return (
    <>
        <div className= 'thirdBgHead displayNone'>
            <div className="container-fluid">
                <div className='thirdNavContainer mx-[52px]'>
                    <div className='ThirdNavContent'>
                        <p><FaInstagram className='thirdNavIcon'/></p>
                        <p>1.1M </p>
                        <p>Followers </p>
                    </div>

                    <div className='ThirdNavContent'>
                        <p>Free Shipping World wide for all orders over $199. <span className='thirdNavSpan'>Click and Shop Now.</span></p>
                    </div>

                    <div className='ThirdNavContent'>
                        <p>Order Traking</p>
                        <p>English </p>
                        <p>USD</p>

                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ThirdTopNav
