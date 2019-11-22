import React from 'react'

const Toogle = () => {
    return (
        <>
            <label className="inline-block w-4 h-6 relative hidden">
                <input className="hidden" type="checkbox" />
                <span className="bg-white absoulte cursor-pointer left-0 bottom-0 right-0 top-0"></span>
            </label>
        </>
    )
}
export default Toogle