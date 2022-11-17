import { forwardRef, useState } from 'react';
import images from '~/assets/images'

const AvatarDefault = forwardRef(({ ...props }, ref, alt, src) => {

    const [fallback, setFallback] = useState('')

    const handleError = () => {
        setFallback(images.noAvatar)
    }

    return <img
        ref={ref} 
        {...props}
        alt={alt}
        src={fallback || src}
        onError={handleError}
    />
})


export default AvatarDefault;