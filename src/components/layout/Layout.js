import React from 'react'
const Layout = props => {
    return (
        <div className="lg:px-48 md:px-24 px-6">
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout