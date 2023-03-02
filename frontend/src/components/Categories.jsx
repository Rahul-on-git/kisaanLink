import itemImage from '../assets/temp.jpg'

function Categories() {
    return (
        <div className="category">
            <div><img src={itemImage} alt='stock' className='img-front'/></div>
            <div>Category Name</div>
        </div>
    );
}

export default Categories