import React from 'react'

import reactLogo from '../assets/react.svg'

export const Logo = (): JSX.Element => (
    <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
)
