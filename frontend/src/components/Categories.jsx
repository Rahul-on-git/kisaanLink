import category1 from '../assets/category-1.jpeg'
import category2 from '../assets/category-2.jpeg'


function Categories({type}) {
    let img
    if (type === 'Vegetables') {
       img = category1 
    } else {
        img = category2
    }
    return (
        <div className="category">
            <div><img src={img} alt='stock' className='img-front'/></div>
            <div>{type}</div>
        </div>
    );
}

export default Categories