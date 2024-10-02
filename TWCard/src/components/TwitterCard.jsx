import { useState } from 'react'
import '../App.css'

function TwitterCard({ children, userName,}) {
    let text = '';
    let buttonClassName = '';
    const [isFollowing, setIsFollowing] = useState(false);
    if (isFollowing) {
        text = 'Siguiendo';
        buttonClassName = 'tw-card-button is-following';
    } else {
        text = 'Seguir';
        buttonClassName = 'tw-card-button';
    }
    function ToggleFollow() {
        setIsFollowing(!isFollowing);
    }
    return (
        <div className='tw-card'>
            <img className='tw-card-img' src={`https://unavatar.io/${userName}`} alt="avatar" />
            <div className='tw-card-info'>
                <strong className='tw-card-name'>{children}</strong>
                <span className='tw-card-user'>@{userName}</span>
            </div>
            <button className={buttonClassName} onClick={ToggleFollow}>{text}</button>
        </div>
    )
}

export default TwitterCard