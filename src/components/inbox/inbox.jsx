import './inbox.css';

const Inbox = () => {
    return(
        <div className="inbox container">
            <h2 className="inbox__title">Incredible deals, right to your inbox!</h2>
            <form action="#" className='inbox__form'>
                <input type="text" className='inbox-form__input' placeholder='Inter email...' />
                <button type="submit" className='inbox-form__button'>
                    <i className="bi bi-chevron-down"></i>
                </button>
            </form>
            <p className="inbox__text">By joining you agree to our Terms and Conditions</p>
        </div>
    )
}

export default Inbox;