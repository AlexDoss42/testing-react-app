import React, { useState } from 'react'

function Button() {
    const [showAnotherButton, setShowAnotherButton] = useState(false);
  return (
    <div>
        <button
            data-testid="button"
            onClick={() => {
                setShowAnotherButton(true);
            }}
        >
            Click Here
        </button>
        {showAnotherButton && (
            <button data-testid="button">Click Here</button>
        )}
    </div>
  )
}

export default Button