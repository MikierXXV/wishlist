import React, {useState} from "react";
import PropTypes from "prop-types";

const createWish = text => ({ done: false, text });
const WishInput = ({ defaultValue, onNewWish }) => {
    const [newWishText, setNewWishText] = useState(defaultValue);
    return (
        <fieldset className="wish-input">
            <legend className="wish-input_label">New wish</legend>
            <input
                className="wish-input_field"
                placeholder="Enter your wish here"
                value={newWishText}
                onChange={e => setNewWishText(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === 'Enter' && newWishText.length){
                        onNewWish(createWish(newWishText));
                        setNewWishText(defaultValue);
                    }
                }}
            />
        </fieldset>
    );
}


WishInput.propTypes = {
    defaultValue: PropTypes.string,
    onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
    defaultValue: '',
    onNewWish: () => {},
};

export default WishInput;