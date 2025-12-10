import './TwitterFollowCard.css'

import { useState } from 'react'

function TwitterFollowCard ({ children, formatUserName, userName = 'unknown', initialIsFollowing}){    
    const imageSrc = `https://unavatar.io/${userName}`

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? 'Siguiendo':'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following':'tw-followCard-button'
  
    return (
        <article className='tw-followCard'>

            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar' 
                    alt="El avatar de midudev" 
                    src={imageSrc} />
                <div className='tw-followCard-info'>
                <strong className='tw-followCard-name'>{children}</strong>
                <span className='tw-followCard-username'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                {text}
                <span className='tw-foolowCard-stopFollowing'>Dejar de seguir</span>
                </button>
            </aside>

        </article>
    )
}

export default TwitterFollowCard