import ReactDom from 'react-dom'

export default function Portal({handleClosePortal, children}) {
    
    return ReactDom.createPortal(
        <div className='portal-container'>
            <div onClick={handleClosePortal} className='portal-underlay'/>

            {children}

        </div>,
        document.getElementById('portal')



    )
}