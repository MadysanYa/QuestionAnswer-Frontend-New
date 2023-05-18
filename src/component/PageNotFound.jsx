import React from 'react'

function NotFound(props) {
    const defaultMessage = "Sorry, We couldn' find what you are looking for!";

    return (
        <div className="rounded overflow-hidden shadow-lg mt-4 p-6 bg-white max-w-screen-lg mx-auto">
            <div className="p-6">
                <div className="text-center px-4 pt-4 text-red-500">
                    <div className="text-8xl font-light ">404</div>
                    <p className="mt-3 font-semibold">{props.message ?? defaultMessage}</p>
                </div>
            </div>
        </div>
    )
}

export default NotFound