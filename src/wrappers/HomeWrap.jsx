import React from 'react'
import { Outlet } from 'react-router'

const HomeWrap = () => {
  return <div>
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat viverra ex, vel scelerisque justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus in arcu posuere, mattis nisl tincidunt, tincidunt odio. Suspendisse placerat, risus et egestas malesuada, diam eros porta massa, at hendrerit eros nisl at mi. Sed ut mattis lorem, sed condimentum magna. Nullam quis dolor sed mi fermentum malesuada at vel arcu. Cras a elit vel odio cursus semper nec vel ligula.<br />Mauris tincidunt nisl at dolor sodales, quis sollicitudin turpis pellentesque. Morbi in accumsan lorem. Sed sit amet condimentum nibh, in dictum orci. Etiam rutrum quam in ipsum hendrerit, vel finibus diam ullamcorper. Praesent fringilla dui nec orci vulputate, sit amet rhoncus justo laoreet. Vestibulum egestas tincidunt quam rhoncus ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet nisl eu sem dapibus fermentum nec at nibh. Suspendisse at finibus odio. Ut lacinia ligula eu semper posuere.</p>

    <Outlet />
  </div>
}

export default HomeWrap