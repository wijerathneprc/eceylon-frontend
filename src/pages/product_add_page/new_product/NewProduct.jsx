

export function NewProduct({ product }) {

    return (<>
        <div className="new-prod">
            <div>{product.name}</div>
            <div> {product.brand}</div>
            <div>{product.category}</div>
            <div>{product.description}</div>
            <button>edit</button>
        </div>
    </>)
}