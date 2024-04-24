
const Watch = ({watch}) => {
    const {brand, model, price} = watch;
    return (
        <div style={{border:'2px solid tomato', padding:'1rem', margin:'1rem', borderRadius:'1rem'}}>
            <h3>Watch Name:{brand}</h3>
            <h4>Watch Model:{model}</h4>
            <p>Price:{price}</p>
        </div>
    );
};


export default Watch;