
const Sunglass = ({sunglass}) => {
    const {brand, price} = sunglass;
    
    return (
        <>
            <div style={{border:'2px solid purple', padding:'1rem ', margin:'1rem', borderRadius:'1rem'}}>
                <h2>Brand: {brand}</h2>
                <h3>Price: {price}</h3>
            </div>
        </>
    );
};

export default Sunglass;