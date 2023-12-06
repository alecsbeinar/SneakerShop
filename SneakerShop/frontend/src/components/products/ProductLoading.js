import React from "react";
import Loader from "../UI/Loader/Loader";

function ProductLoading(Component) {
    return function ProductLoadingComponent({isLoading, ...props}) {
        if (!isLoading) return <Component {...props}/>;
        return (
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
                <Loader/>
            </div>
        )
    }
}

export default ProductLoading;