import React from 'react'
import ReactDom from 'react-dom'

function PortalDemo(){
return ReactDom.createPortal(
<>
<h1>createPortal</h1>
document.getElementById('portal-root')
</>
)
}

return default PortalDemo